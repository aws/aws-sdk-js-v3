// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { LexModelsV2ServiceException as __BaseException } from "./LexModelsV2ServiceException";

/**
 * @public
 * <p>The active context used in the test execution.</p>
 */
export interface ActiveContext {
  /**
   * @public
   * <p>The name of active context.</p>
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
 * @public
 * <p>Provides settings that enable advanced recognition settings for slot values.</p>
 */
export interface AdvancedRecognitionSetting {
  /**
   * @public
   * <p>Enables using the slot values as a custom vocabulary for recognizing user utterances.</p>
   */
  audioRecognitionStrategy?: AudioRecognitionStrategy | string;
}

/**
 * @public
 * <p>Details about an error in an execution of a test set.</p>
 */
export interface ExecutionErrorDetails {
  /**
   * @public
   * <p>The error code for the error.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The message describing the error.</p>
   */
  errorMessage: string | undefined;
}

/**
 * @public
 * <p>The information about the agent turn in a test set execution.</p>
 */
export interface AgentTurnResult {
  /**
   * @public
   * <p>The expected agent prompt for the agent turn in a test set execution.</p>
   */
  expectedAgentPrompt: string | undefined;

  /**
   * @public
   * <p>The actual agent prompt for the agent turn in a test set execution.</p>
   */
  actualAgentPrompt?: string;

  /**
   * @public
   * <p>Details about an error in an execution of a test set.</p>
   */
  errorDetails?: ExecutionErrorDetails;

  /**
   * @public
   * <p>The actual elicited slot for the agent turn in a test set execution.</p>
   */
  actualElicitedSlot?: string;

  /**
   * @public
   * <p>The actual intent for the agent turn in a test set execution.</p>
   */
  actualIntent?: string;
}

/**
 * @public
 * <p>The specification of an agent turn.</p>
 */
export interface AgentTurnSpecification {
  /**
   * @public
   * <p>The agent prompt for the agent turn in a test set.</p>
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
 * @public
 * <p>Filters responses returned by the
 *             <code>ListAggregatedUtterances</code> operation.</p>
 */
export interface AggregatedUtterancesFilter {
  /**
   * @public
   * <p>The name of the field to filter the utterance list.</p>
   */
  name: AggregatedUtterancesFilterName | string | undefined;

  /**
   * @public
   * <p>The value to use for filtering the list of bots.</p>
   */
  values: string[] | undefined;

  /**
   * @public
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *             <code>ListAggregatedUtterances</code> operation should return only
   *          utterances that equal the specified value. Specify <code>CO</code> when
   *          the <code>ListAggregatedUtterances</code> operation should return
   *          utterances that contain the specified value.</p>
   */
  operator: AggregatedUtterancesFilterOperator | string | undefined;
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
 * @public
 * <p>Specifies attributes for sorting a list of utterances.</p>
 */
export interface AggregatedUtterancesSortBy {
  /**
   * @public
   * <p>The utterance attribute to sort by.</p>
   */
  attribute: AggregatedUtterancesSortAttribute | string | undefined;

  /**
   * @public
   * <p>Specifies whether to sort the aggregated utterances in ascending or
   *          descending order.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 * <p>Provides summary information for aggregated utterances. The
 *             <code>ListAggregatedUtterances</code> operations combines all
 *          instances of the same utterance into a single aggregated
 *          summary.</p>
 */
export interface AggregatedUtterancesSummary {
  /**
   * @public
   * <p>The text of the utterance. If the utterance was used with the
   *             <code>RecognizeUtterance</code> operation, the text is the
   *          transcription of the audio utterance.</p>
   */
  utterance?: string;

  /**
   * @public
   * <p>The number of times that the utterance was detected by Amazon Lex during
   *          the time period. When an utterance is detected, it activates an intent
   *          or a slot.</p>
   */
  hitCount?: number;

  /**
   * @public
   * <p>The number of times that the utterance was missed by Amazon Lex An
   *          utterance is missed when it doesn't activate an intent or slot.</p>
   */
  missedCount?: number;

  /**
   * @public
   * <p>The date and time that the utterance was first recorded in the time
   *          window for aggregation. An utterance may have been sent to Amazon Lex before
   *          that time, but only utterances within the time window are
   *          counted.</p>
   */
  utteranceFirstRecordedInAggregationDuration?: Date;

  /**
   * @public
   * <p>The last date and time that an utterance was recorded in the time
   *          window for aggregation. An utterance may be sent to Amazon Lex after that
   *          time, but only utterances within the time window are counted.</p>
   */
  utteranceLastRecordedInAggregationDuration?: Date;

  /**
   * @public
   * <p>Aggregated utterance data may contain utterances from versions of
   *          your bot that have since been deleted. When the aggregated contains
   *          this kind of data, this field is set to true.</p>
   */
  containsDataFromDeletedResources?: boolean;
}

/**
 * @public
 * <p>Specifies the allowed input types.</p>
 */
export interface AllowedInputTypes {
  /**
   * @public
   * <p>Indicates whether audio input is allowed.</p>
   */
  allowAudioInput: boolean | undefined;

  /**
   * @public
   * <p>Indicates whether DTMF input is allowed.</p>
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
 * @public
 * <p>Contains the time metric, interval, and method by which to bin the analytics data.</p>
 */
export interface AnalyticsBinBySpecification {
  /**
   * @public
   * <p>Specifies the time metric by which to bin the analytics data.</p>
   */
  name: AnalyticsBinByName | string | undefined;

  /**
   * @public
   * <p>Specifies the interval of time by which to bin the analytics data.</p>
   */
  interval: AnalyticsInterval | string | undefined;

  /**
   * @public
   * <p>Specifies whether to bin the analytics data in ascending or descending order. If this field is left blank, the default order is by the key of the bin in descending order.</p>
   */
  order?: AnalyticsSortOrder | string;
}

/**
 * @public
 * <p>An object containing the criterion by which to bin the results and the value that defines that bin.</p>
 */
export interface AnalyticsBinKey {
  /**
   * @public
   * <p>The criterion by which to bin the results.</p>
   */
  name?: AnalyticsBinByName | string;

  /**
   * @public
   * <p>The value of the criterion that defines the bin.</p>
   */
  value?: number;
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
 * @public
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
 */
export interface AnalyticsIntentFilter {
  /**
   * @public
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
   */
  name: AnalyticsIntentFilterName | string | undefined;

  /**
   * @public
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
   */
  operator: AnalyticsFilterOperator | string | undefined;

  /**
   * @public
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
   */
  values: string[] | undefined;
}

/**
 * @public
 * <p>Contains the category by which the intent analytics were grouped and a member of that category.</p>
 */
export interface AnalyticsIntentGroupByKey {
  /**
   * @public
   * <p>A category by which the intent analytics were grouped.</p>
   */
  name?: AnalyticsIntentField | string;

  /**
   * @public
   * <p>A member of the category by which the intent analytics were grouped.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Contains the category by which to group the intents.</p>
 */
export interface AnalyticsIntentGroupBySpecification {
  /**
   * @public
   * <p>Specifies whether to group the intent stages by their name or their end state.</p>
   */
  name: AnalyticsIntentField | string | undefined;
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
 * @public
 * <p>Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intents in the bot.</p>
 */
export interface AnalyticsIntentMetric {
  /**
   * @public
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
   */
  name: AnalyticsIntentMetricName | string | undefined;

  /**
   * @public
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
   */
  statistic: AnalyticsMetricStatistic | string | undefined;

  /**
   * @public
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   */
  order?: AnalyticsSortOrder | string;
}

/**
 * @public
 * <p>An object containing the results for the intent metric you requested.</p>
 */
export interface AnalyticsIntentMetricResult {
  /**
   * @public
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
   */
  name?: AnalyticsIntentMetricName | string;

  /**
   * @public
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
   */
  statistic?: AnalyticsMetricStatistic | string;

  /**
   * @public
   * <p>The value of the summary statistic for the metric that you requested.</p>
   */
  value?: number;
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
 * @public
 * <p>An object containing information about the requested path.</p>
 */
export interface AnalyticsIntentNodeSummary {
  /**
   * @public
   * <p>The name of the intent at the end of the requested path.</p>
   */
  intentName?: string;

  /**
   * @public
   * <p>The path.</p>
   */
  intentPath?: string;

  /**
   * @public
   * <p>The total number of sessions that follow the given path to the given intent.</p>
   */
  intentCount?: number;

  /**
   * @public
   * <p>The number of intents up to and including the requested path.</p>
   */
  intentLevel?: number;

  /**
   * @public
   * <p>Specifies whether the node is the end of a path (<code>Exit</code>) or not (<code>Inner</code>).</p>
   */
  nodeType?: AnalyticsNodeType | string;
}

/**
 * @public
 * <p>An object containing the results for the intent metrics you requested and the bin and/or group(s) they refer to, if applicable.</p>
 */
export interface AnalyticsIntentResult {
  /**
   * @public
   * <p>A list of objects containing the criteria you requested for binning results and the values of the bins.</p>
   */
  binKeys?: AnalyticsBinKey[];

  /**
   * @public
   * <p>A list of objects containing the criteria you requested for grouping results and the values of the groups.</p>
   */
  groupByKeys?: AnalyticsIntentGroupByKey[];

  /**
   * @public
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   */
  metricsResults?: AnalyticsIntentMetricResult[];
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
 * @public
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
 */
export interface AnalyticsIntentStageFilter {
  /**
   * @public
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
   */
  name: AnalyticsIntentStageFilterName | string | undefined;

  /**
   * @public
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
   */
  operator: AnalyticsFilterOperator | string | undefined;

  /**
   * @public
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
   */
  values: string[] | undefined;
}

/**
 * @public
 * <p>Contains the category by which the intent stage analytics and the values for that category were grouped.</p>
 */
export interface AnalyticsIntentStageGroupByKey {
  /**
   * @public
   * <p>A category by which the intent stage analytics were grouped.</p>
   */
  name?: AnalyticsIntentStageField | string;

  /**
   * @public
   * <p>A member of the category by which the intent stage analytics were grouped.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Contains the category by which to group the intent stages.</p>
 */
export interface AnalyticsIntentStageGroupBySpecification {
  /**
   * @public
   * <p>Specifies whether to group the intent stages by their name or the intent to which the session was switched.</p>
   */
  name: AnalyticsIntentStageField | string | undefined;
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
 * @public
 * <p>Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intent stages across the user sessions with the bot.</p>
 */
export interface AnalyticsIntentStageMetric {
  /**
   * @public
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
   */
  name: AnalyticsIntentStageMetricName | string | undefined;

  /**
   * @public
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
   */
  statistic: AnalyticsMetricStatistic | string | undefined;

  /**
   * @public
   * <p>Specifies whether to sort the results in ascending or descending order of the summary statistic (<code>value</code> in the response).</p>
   */
  order?: AnalyticsSortOrder | string;
}

/**
 * @public
 * <p>An object containing the results for an intent stage metric you requested.</p>
 */
export interface AnalyticsIntentStageMetricResult {
  /**
   * @public
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
   */
  name?: AnalyticsIntentStageMetricName | string;

  /**
   * @public
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
   */
  statistic?: AnalyticsMetricStatistic | string;

  /**
   * @public
   * <p>The value of the summary statistic for the metric that you requested.</p>
   */
  value?: number;
}

/**
 * @public
 * <p>An object containing the results for the intent stage metrics you requested and the bin and/or group they refer to, if applicable.</p>
 */
export interface AnalyticsIntentStageResult {
  /**
   * @public
   * <p>A list of objects containing the criteria you requested for binning results and the values of the bins.</p>
   */
  binKeys?: AnalyticsBinKey[];

  /**
   * @public
   * <p>A list of objects containing the criteria you requested for grouping results and the values of the bins.</p>
   */
  groupByKeys?: AnalyticsIntentStageGroupByKey[];

  /**
   * @public
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   */
  metricsResults?: AnalyticsIntentStageMetricResult[];
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
 * @public
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
 */
export interface AnalyticsPathFilter {
  /**
   * @public
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
   */
  name: AnalyticsCommonFilterName | string | undefined;

  /**
   * @public
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
   */
  operator: AnalyticsFilterOperator | string | undefined;

  /**
   * @public
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
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
 * @public
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
 */
export interface AnalyticsSessionFilter {
  /**
   * @public
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
   */
  name: AnalyticsSessionFilterName | string | undefined;

  /**
   * @public
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
   */
  operator: AnalyticsFilterOperator | string | undefined;

  /**
   * @public
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
   */
  values: string[] | undefined;
}

/**
 * @public
 * <p>Contains the category by which the session analytics were grouped and a member of that category.</p>
 */
export interface AnalyticsSessionGroupByKey {
  /**
   * @public
   * <p>The category by which the session analytics were grouped.</p>
   */
  name?: AnalyticsSessionField | string;

  /**
   * @public
   * <p>A member of the category by which the session analytics were grouped.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Contains the category by which to group the sessions.</p>
 */
export interface AnalyticsSessionGroupBySpecification {
  /**
   * @public
   * <p>Specifies whether to group the session by their end state or their locale.</p>
   */
  name: AnalyticsSessionField | string | undefined;
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
 * @public
 * <p>Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the user sessions with the bot.</p>
 */
export interface AnalyticsSessionMetric {
  /**
   * @public
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
   */
  name: AnalyticsSessionMetricName | string | undefined;

  /**
   * @public
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
   */
  statistic: AnalyticsMetricStatistic | string | undefined;

  /**
   * @public
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   */
  order?: AnalyticsSortOrder | string;
}

/**
 * @public
 * <p>An object containing the results for a session metric you requested.</p>
 */
export interface AnalyticsSessionMetricResult {
  /**
   * @public
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
   */
  name?: AnalyticsSessionMetricName | string;

  /**
   * @public
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
   */
  statistic?: AnalyticsMetricStatistic | string;

  /**
   * @public
   * <p>The value of the summary statistic for the metric that you requested.</p>
   */
  value?: number;
}

/**
 * @public
 * <p>An object containing the results for the session metrics you requested and the bin and/or group(s) they refer to, if applicable.</p>
 */
export interface AnalyticsSessionResult {
  /**
   * @public
   * <p>A list of objects containing the criteria you requested for binning results and the values of the bins.</p>
   */
  binKeys?: AnalyticsBinKey[];

  /**
   * @public
   * <p>A list of objects containing the criteria you requested for grouping results and the values of the bins.</p>
   */
  groupByKeys?: AnalyticsSessionGroupByKey[];

  /**
   * @public
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   */
  metricsResults?: AnalyticsSessionMetricResult[];
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
 * @public
 * <p>An object that specifies the last used intent at the time of the utterance as an attribute to return.</p>
 */
export interface AnalyticsUtteranceAttribute {
  /**
   * @public
   * <p>An attribute to return. The only available attribute is the intent that the bot mapped the utterance to.</p>
   */
  name: AnalyticsUtteranceAttributeName | string | undefined;
}

/**
 * @public
 * <p>An object containing the intent that the bot mapped the utterance to.</p>
 */
export interface AnalyticsUtteranceAttributeResult {
  /**
   * @public
   * <p>The intent that the bot mapped the utterance to.</p>
   */
  lastUsedIntent?: string;
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
 * @public
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
 */
export interface AnalyticsUtteranceFilter {
  /**
   * @public
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
   */
  name: AnalyticsUtteranceFilterName | string | undefined;

  /**
   * @public
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
   */
  operator: AnalyticsFilterOperator | string | undefined;

  /**
   * @public
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
   */
  values: string[] | undefined;
}

/**
 * @public
 * <p>Contains the category by which the utterance analytics were grouped and the values for that category.</p>
 */
export interface AnalyticsUtteranceGroupByKey {
  /**
   * @public
   * <p>The category by which the utterance analytics were grouped.</p>
   */
  name?: AnalyticsUtteranceField | string;

  /**
   * @public
   * <p>A member of the category by which the utterance analytics were grouped.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Contains the category by which to group the utterances.</p>
 */
export interface AnalyticsUtteranceGroupBySpecification {
  /**
   * @public
   * <p>Specifies whether to group the utterances by their text or their state.</p>
   */
  name: AnalyticsUtteranceField | string | undefined;
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
 * @public
 * <p>Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the utterances across the user sessions with the bot.</p>
 */
export interface AnalyticsUtteranceMetric {
  /**
   * @public
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
   */
  name: AnalyticsUtteranceMetricName | string | undefined;

  /**
   * @public
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
   */
  statistic: AnalyticsMetricStatistic | string | undefined;

  /**
   * @public
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   */
  order?: AnalyticsSortOrder | string;
}

/**
 * @public
 * <p>An object containing the results for the utterance metric you requested.</p>
 */
export interface AnalyticsUtteranceMetricResult {
  /**
   * @public
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
   */
  name?: AnalyticsUtteranceMetricName | string;

  /**
   * @public
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
   */
  statistic?: AnalyticsMetricStatistic | string;

  /**
   * @public
   * <p>The value of the summary statistic for the metric that you requested.</p>
   */
  value?: number;
}

/**
 * @public
 * <p>An object containing the results for the utterance metrics you requested and the bin and/or group(s) they refer to, if applicable.</p>
 */
export interface AnalyticsUtteranceResult {
  /**
   * @public
   * <p>A list of objects containing the criteria you requested for binning results and the values of the bins.</p>
   */
  binKeys?: AnalyticsBinKey[];

  /**
   * @public
   * <p>A list of objects containing the criteria you requested for grouping results and the values of the bins.</p>
   */
  groupByKeys?: AnalyticsUtteranceGroupByKey[];

  /**
   * @public
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   */
  metricsResults?: AnalyticsUtteranceMetricResult[];

  /**
   * @public
   * <p>A list of objects containing information about the last used intent at the time of an utterance.</p>
   */
  attributeResults?: AnalyticsUtteranceAttributeResult[];
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
 * @public
 * <p>The object containing information that associates the recommended
 *          intent/slot type with a conversation.</p>
 */
export interface AssociatedTranscript {
  /**
   * @public
   * <p>The content of the transcript that meets the search filter criteria.
   *          For the JSON format of the transcript, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/designing-output-format.html">Output transcript
   *             format</a>.</p>
   */
  transcript?: string;
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
 * @public
 * <p>Filters to search for the associated transcript.</p>
 */
export interface AssociatedTranscriptFilter {
  /**
   * @public
   * <p>The name of the field to use for filtering. The allowed names are
   *          IntentId and SlotTypeId.</p>
   */
  name: AssociatedTranscriptFilterName | string | undefined;

  /**
   * @public
   * <p>The values to use to filter the transcript.</p>
   */
  values: string[] | undefined;
}

/**
 * @public
 * <p>Specifies the audio input specifications.</p>
 */
export interface AudioSpecification {
  /**
   * @public
   * <p>Time for how long Amazon Lex waits before speech input is truncated and the speech
   *          is returned to application.</p>
   */
  maxLengthMs: number | undefined;

  /**
   * @public
   * <p>Time for which a bot waits after the customer stops speaking to assume the
   *          utterance is finished.</p>
   */
  endTimeoutMs: number | undefined;
}

/**
 * @public
 * <p>Specifies the DTMF input specifications.</p>
 */
export interface DTMFSpecification {
  /**
   * @public
   * <p>The maximum number of DTMF digits allowed in an utterance.</p>
   */
  maxLength: number | undefined;

  /**
   * @public
   * <p>How long the bot should wait after the last DTMF character input before assuming
   *          that the input has concluded.</p>
   */
  endTimeoutMs: number | undefined;

  /**
   * @public
   * <p>The DTMF character that clears the accumulated DTMF digits and immediately ends
   *          the input.</p>
   */
  deletionCharacter: string | undefined;

  /**
   * @public
   * <p>The DTMF character that immediately ends input. If the user does not press this
   *          character, the input ends after the end timeout.</p>
   */
  endCharacter: string | undefined;
}

/**
 * @public
 * <p>Specifies the audio and DTMF input specification.</p>
 */
export interface AudioAndDTMFInputSpecification {
  /**
   * @public
   * <p>Time for which a bot waits before assuming that the customer isn't going to speak or press
   *          a key. This timeout is shared between Audio and DTMF inputs.</p>
   */
  startTimeoutMs: number | undefined;

  /**
   * @public
   * <p>Specifies the settings on audio input.</p>
   */
  audioSpecification?: AudioSpecification;

  /**
   * @public
   * <p>Specifies the settings on DTMF input.</p>
   */
  dtmfSpecification?: DTMFSpecification;
}

/**
 * @public
 * <p>Specifies an Amazon S3 bucket for logging audio conversations</p>
 */
export interface S3BucketLogDestination {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service
   *          (KMS) key for encrypting audio log files stored in an S3 bucket.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio
   *          log files are stored.</p>
   */
  s3BucketArn: string | undefined;

  /**
   * @public
   * <p>The S3 prefix to assign to audio log files.</p>
   */
  logPrefix: string | undefined;
}

/**
 * @public
 * <p>The location of audio log files collected when conversation logging
 *          is enabled for a bot.</p>
 */
export interface AudioLogDestination {
  /**
   * @public
   * <p>The Amazon S3 bucket where the audio log files are stored. The IAM
   *          role specified in the <code>roleArn</code> parameter of the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation must have permission to write to this
   *          bucket.</p>
   */
  s3Bucket: S3BucketLogDestination | undefined;
}

/**
 * @public
 * <p>Settings for logging audio of conversations between Amazon Lex and a
 *          user. You specify whether to log audio and the Amazon S3 bucket where
 *          the audio file is stored.</p>
 */
export interface AudioLogSetting {
  /**
   * @public
   * <p>Determines whether audio logging in enabled for the bot.</p>
   */
  enabled: boolean | undefined;

  /**
   * @public
   * <p>The location of audio log files collected when conversation logging
   *          is enabled for a bot.</p>
   */
  destination: AudioLogDestination | undefined;
}

/**
 * @public
 * <p>The new custom vocabulary item from the custom
 *          vocabulary list.</p>
 */
export interface NewCustomVocabularyItem {
  /**
   * @public
   * <p>The unique phrase for the new custom vocabulary item from the custom
   *          vocabulary list.</p>
   */
  phrase: string | undefined;

  /**
   * @public
   * <p>The weight assigned to the new custom vocabulary item from the custom
   *          vocabulary list.</p>
   */
  weight?: number;

  /**
   * @public
   * <p>The display as value assigned to the new custom vocabulary item from the custom
   *          vocabulary list.</p>
   */
  displayAs?: string;
}

/**
 * @public
 */
export interface BatchCreateCustomVocabularyItemRequest {
  /**
   * @public
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The identifier of the version of the bot associated with this
   *          custom vocabulary.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale where this custom vocabulary
   *          is used. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>A list of new custom vocabulary items. Each entry must contain a phrase and
   *          can optionally contain a displayAs and/or a weight.</p>
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
 * @public
 * <p>The unique failed custom vocabulary item from the custom
 *          vocabulary list.</p>
 */
export interface FailedCustomVocabularyItem {
  /**
   * @public
   * <p>The unique item identifer for the failed custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  itemId?: string;

  /**
   * @public
   * <p>The error message for the failed custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>The unique error code for the failed custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  errorCode?: ErrorCode | string;
}

/**
 * @public
 * <p>The unique custom vocabulary item from the custom
 *          vocabulary list.</p>
 */
export interface CustomVocabularyItem {
  /**
   * @public
   * <p>The unique item identifer for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  itemId: string | undefined;

  /**
   * @public
   * <p>The unique phrase for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  phrase: string | undefined;

  /**
   * @public
   * <p>The weight assigned for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  weight?: number;

  /**
   * @public
   * <p>The DisplayAs value for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  displayAs?: string;
}

/**
 * @public
 */
export interface BatchCreateCustomVocabularyItemResponse {
  /**
   * @public
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The identifier of the version of the bot associated with this
   *          custom vocabulary.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The identifier of the language and locale where this custom vocabulary is used.
   *          The string must match one of the supported locales.
   *          For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>A list of custom vocabulary items that failed to create during the operation.
   *          The reason for the error is contained within each error object.</p>
   */
  errors?: FailedCustomVocabularyItem[];

  /**
   * @public
   * <p>A list of custom vocabulary items that were
   *          successfully created during the operation.</p>
   */
  resources?: CustomVocabularyItem[];
}

/**
 * @public
 * <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
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
 * @public
 * <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
 * @public
 * <p>You have reached a quota for your bot. </p>
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
 * @public
 * <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The number of seconds after which the user can invoke the API again.</p>
   */
  retryAfterSeconds?: number;

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
 * @public
 * <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
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
 * @public
 * <p>The unique entry identifier for the custom vocabulary
 *          items.</p>
 */
export interface CustomVocabularyEntryId {
  /**
   * @public
   * <p>The unique item identifier for the custom vocabulary
   *          items.</p>
   */
  itemId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteCustomVocabularyItemRequest {
  /**
   * @public
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale where this custom vocabulary is
   *          used. The string must match one of the supported locales.
   *          For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>A list of custom vocabulary items requested to be deleted.
   *          Each entry must contain the unique custom vocabulary entry identifier.</p>
   */
  customVocabularyItemList: CustomVocabularyEntryId[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteCustomVocabularyItemResponse {
  /**
   * @public
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The identifier of the language and locale where this custom vocabulary is
   *          used. The string must match one of the supported locales.
   *          For more information, see Supported
   *          languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>A list of custom vocabulary items that failed to delete during the operation.
   *          The reason for the error is contained within each error object.</p>
   */
  errors?: FailedCustomVocabularyItem[];

  /**
   * @public
   * <p>A list of custom vocabulary items that were
   *          successfully deleted during the operation.</p>
   */
  resources?: CustomVocabularyItem[];
}

/**
 * @public
 */
export interface BatchUpdateCustomVocabularyItemRequest {
  /**
   * @public
   * <p>The identifier of the bot associated with this custom vocabulary</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale where this custom vocabulary
   *          is used. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>A list of custom vocabulary items with updated fields. Each entry must contain a phrase
   *          and can optionally contain a displayAs and/or a weight.</p>
   */
  customVocabularyItemList: CustomVocabularyItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateCustomVocabularyItemResponse {
  /**
   * @public
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The identifier of the language and locale where this custom vocabulary
   *          is used. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>A list of custom vocabulary items that failed to update during the operation.
   *          The reason for the error is contained within each error object.</p>
   */
  errors?: FailedCustomVocabularyItem[];

  /**
   * @public
   * <p>A list of custom vocabulary items that were
   *          successfully updated during the operation.</p>
   */
  resources?: CustomVocabularyItem[];
}

/**
 * @public
 * <p>Provides a record of an event that affects a bot alias. For example,
 *          when the version of a bot that the alias points to changes.</p>
 */
export interface BotAliasHistoryEvent {
  /**
   * @public
   * <p>The version of the bot that was used in the event. </p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The date and time that the event started.</p>
   */
  startDate?: Date;

  /**
   * @public
   * <p>The date and time that the event ended.</p>
   */
  endDate?: Date;
}

/**
 * @public
 * <p>Specifies a Lambda function that verifies requests to a bot or
 *          fulfills the user's request to a bot.</p>
 */
export interface LambdaCodeHook {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   */
  lambdaARN: string | undefined;

  /**
   * @public
   * <p>The version of the request-response that you want Amazon Lex to use to
   *          invoke your Lambda function.</p>
   */
  codeHookInterfaceVersion: string | undefined;
}

/**
 * @public
 * <p>Contains information about code hooks that Amazon Lex calls during a
 *          conversation.</p>
 */
export interface CodeHookSpecification {
  /**
   * @public
   * <p>Specifies a Lambda function that verifies requests to a bot or
   *          fulfills the user's request to a bot.</p>
   */
  lambdaCodeHook: LambdaCodeHook | undefined;
}

/**
 * @public
 * <p>Specifies settings that are unique to a locale. For example, you can
 *          use different Lambda function depending on the bot's locale.</p>
 */
export interface BotAliasLocaleSettings {
  /**
   * @public
   * <p>Determines whether the locale is enabled for the bot. If the value
   *          is <code>false</code>, the locale isn't available for use.</p>
   */
  enabled: boolean | undefined;

  /**
   * @public
   * <p>Specifies the Lambda function that should be used in the
   *          locale.</p>
   */
  codeHookSpecification?: CodeHookSpecification;
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
 * @public
 * <p>Summary information about bot aliases returned from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliases.html">ListBotAliases</a> operation.</p>
 */
export interface BotAliasSummary {
  /**
   * @public
   * <p>The unique identifier assigned to the bot alias. You can use this ID
   *          to get detailed information about the alias using the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotAlias.html">DescribeBotAlias</a> operation.</p>
   */
  botAliasId?: string;

  /**
   * @public
   * <p>The name of the bot alias.</p>
   */
  botAliasName?: string;

  /**
   * @public
   * <p>The description of the bot alias.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The version of the bot that the bot alias references.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The current state of the bot alias. If the status is
   *          <code>Available</code>, the alias is ready for use.</p>
   */
  botAliasStatus?: BotAliasStatus | string;

  /**
   * @public
   * <p>A timestamp of the date and time that the bot alias was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>A timestamp of the date and time that the bot alias was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 * <p>The target Amazon S3 location for the test set execution using a bot alias.</p>
 */
export interface BotAliasTestExecutionTarget {
  /**
   * @public
   * <p>The bot Id of the bot alias used in the test set execution.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The bot alias Id of the bot alias used in the test set execution.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The locale Id of the bot alias used in the test set execution.</p>
   */
  localeId: string | undefined;
}

/**
 * @public
 * <p>Provides the identity of a the bot that was exported.</p>
 */
export interface BotExportSpecification {
  /**
   * @public
   * <p>The identifier of the bot assigned by Amazon Lex.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot that was exported. This will be either
   *             <code>DRAFT</code> or the version number.</p>
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
 * @public
 * <p>Filters the responses returned by the <code>ListBots</code>
 *          operation.</p>
 */
export interface BotFilter {
  /**
   * @public
   * <p>The name of the field to filter the list of bots.</p>
   */
  name: BotFilterName | string | undefined;

  /**
   * @public
   * <p>The value to use for filtering the list of bots.</p>
   */
  values: string[] | undefined;

  /**
   * @public
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *          <code>ListBots</code> operation should return only aliases that
   *          equal the specified value. Specify <code>CO</code> when the
   *          <code>ListBots</code> operation should return aliases that contain
   *          the specified value.</p>
   */
  operator: BotFilterOperator | string | undefined;
}

/**
 * @public
 * <p>By default, data stored by Amazon Lex is encrypted. The
 *             <code>DataPrivacy</code> structure provides settings that determine
 *          how Amazon Lex handles special cases of securing the data for your bot.
 *       </p>
 */
export interface DataPrivacy {
  /**
   * @public
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
   */
  childDirected: boolean | undefined;
}

/**
 * @public
 * <p>Provides the bot parameters required for importing a bot.</p>
 */
export interface BotImportSpecification {
  /**
   * @public
   * <p>The name that Amazon Lex should use for the bot.</p>
   */
  botName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role used to build and run
   *          the bot.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>By default, data stored by Amazon Lex is encrypted. The
   *             <code>DataPrivacy</code> structure provides settings that determine
   *          how Amazon Lex handles special cases of securing the data for your bot.
   *       </p>
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * @public
   * <p>The time, in seconds, that Amazon Lex should keep information about a
   *          user's conversation with the bot. </p>
   *          <p>A user interaction remains active for the amount of time specified.
   *          If no conversation occurs during this time, the session expires and
   *          Amazon Lex deletes any data provided before the timeout.</p>
   *          <p>You can specify between 60 (1 minute) and 86,400 (24 hours)
   *          seconds.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * @public
   * <p>A list of tags to add to the bot. You can only add tags when you
   *          import a bot. You can't use the <code>UpdateBot</code> operation to
   *          update tags. To update tags, use the <code>TagResource</code>
   *          operation.</p>
   */
  botTags?: Record<string, string>;

  /**
   * @public
   * <p>A list of tags to add to the test alias for a bot. You can only add
   *          tags when you import a bot. You can't use the <code>UpdateAlias</code>
   *          operation to update tags. To update tags on the test alias, use the
   *             <code>TagResource</code> operation.</p>
   */
  testBotAliasTags?: Record<string, string>;
}

/**
 * @public
 * <p>Provides the bot locale parameters required for exporting a bot
 *          locale.</p>
 */
export interface BotLocaleExportSpecification {
  /**
   * @public
   * <p>The identifier of the bot to create the locale for.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot to export.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale to export. The string must
   *          match one of the locales in the bot.</p>
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
 * @public
 * <p>Filters responses returned by the <code>ListBotLocales</code>
 *          operation.</p>
 */
export interface BotLocaleFilter {
  /**
   * @public
   * <p>The name of the field to filter the list of bots.</p>
   */
  name: BotLocaleFilterName | string | undefined;

  /**
   * @public
   * <p>The value to use for filtering the list of bots.</p>
   */
  values: string[] | undefined;

  /**
   * @public
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *          <code>ListBotLocales</code> operation should return only aliases
   *          that equal the specified value. Specify <code>CO</code> when the
   *          <code>ListBotLocales</code> operation should return aliases that
   *          contain the specified value.</p>
   */
  operator: BotLocaleFilterOperator | string | undefined;
}

/**
 * @public
 * <p>Provides information about an event that occurred affecting the bot
 *             locale.</p>
 */
export interface BotLocaleHistoryEvent {
  /**
   * @public
   * <p>A description of the event that occurred.</p>
   */
  event: string | undefined;

  /**
   * @public
   * <p>A timestamp of the date and time that the event occurred.</p>
   */
  eventDate: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const VoiceEngine = {
  Neural: "neural",
  Standard: "standard",
} as const;

/**
 * @public
 */
export type VoiceEngine = (typeof VoiceEngine)[keyof typeof VoiceEngine];

/**
 * @public
 * <p>Defines settings for using an Amazon Polly voice to communicate with a
 *          user.</p>
 */
export interface VoiceSettings {
  /**
   * @public
   * <p>The identifier of the Amazon Polly voice to use.</p>
   */
  voiceId: string | undefined;

  /**
   * @public
   * <p>Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine">
   *                <code>engine</code> parameter of the <code>SynthesizeSpeech</code> operation</a> in the <i>Amazon Polly developer guide</i>.</p>
   *          <p>If you do not specify a value, the default is <code>standard</code>.</p>
   */
  engine?: VoiceEngine | string;
}

/**
 * @public
 * <p>Provides the bot locale parameters required for importing a bot
 *          locale.</p>
 */
export interface BotLocaleImportSpecification {
  /**
   * @public
   * <p>The identifier of the bot to import the locale to.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot to import the locale to. This can only be the
   *             <code>DRAFT</code> version of the bot.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale that the bot will be used
   *          in. The string must match one of the supported locales. All of the
   *          intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported
   *          languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
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
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * @public
   * <p>Defines settings for using an Amazon Polly voice to communicate with a
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;
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
 * @public
 * <p>Specifies attributes for sorting a list of bot locales.</p>
 */
export interface BotLocaleSortBy {
  /**
   * @public
   * <p>The bot locale attribute to sort by.</p>
   */
  attribute: BotLocaleSortAttribute | string | undefined;

  /**
   * @public
   * <p>Specifies whether to sort the bot locales in ascending or descending
   *          order.</p>
   */
  order: SortOrder | string | undefined;
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
 * @public
 * <p>Summary information about bot locales returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotLocales.html">ListBotLocales</a> operation.</p>
 */
export interface BotLocaleSummary {
  /**
   * @public
   * <p>The language and locale of the bot locale.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The name of the bot locale.</p>
   */
  localeName?: string;

  /**
   * @public
   * <p>The description of the bot locale.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The current status of the bot locale. When the status is
   *          <code>Built</code> the locale is ready for use.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * @public
   * <p>A timestamp of the date and time that the bot locale was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>A timestamp of the date and time that the bot locale was last
   *          built.</p>
   */
  lastBuildSubmittedDateTime?: Date;
}

/**
 * @public
 * <p>A bot that is a member of a network of bots.</p>
 */
export interface BotMember {
  /**
   * @public
   * <p>The unique ID of a bot that is a member of this network of bots.</p>
   */
  botMemberId: string | undefined;

  /**
   * @public
   * <p>The unique name of a bot that is a member of this network of bots.</p>
   */
  botMemberName: string | undefined;

  /**
   * @public
   * <p>The alias ID of a bot that is a member of this network of bots.</p>
   */
  botMemberAliasId: string | undefined;

  /**
   * @public
   * <p>The alias name of a bot that is a member of this network of bots.</p>
   */
  botMemberAliasName: string | undefined;

  /**
   * @public
   * <p>The version of a bot that is a member of this network of bots.</p>
   */
  botMemberVersion: string | undefined;
}

/**
 * @public
 * <p>The object that contains the statistical summary of recommended
 *             intents associated with the bot recommendation.</p>
 */
export interface IntentStatistics {
  /**
   * @public
   * <p>The number of recommended intents associated with the bot
   *             recommendation.</p>
   */
  discoveredIntentCount?: number;
}

/**
 * @public
 * <p>The object that contains the statistical summary of the recommended
 *             slot type associated with the bot recommendation.</p>
 */
export interface SlotTypeStatistics {
  /**
   * @public
   * <p>The number of recommended slot types associated with the bot
   *             recommendation.</p>
   */
  discoveredSlotTypeCount?: number;
}

/**
 * @public
 * <p>A statistical summary of the bot recommendation results.</p>
 */
export interface BotRecommendationResultStatistics {
  /**
   * @public
   * <p>Statistical information about about the intents associated with the
   *             bot recommendation results.</p>
   */
  intents?: IntentStatistics;

  /**
   * @public
   * <p>Statistical information about the slot types associated with the bot
   *             recommendation results.</p>
   */
  slotTypes?: SlotTypeStatistics;
}

/**
 * @public
 * <p>The object representing the URL of the bot definition, the URL of
 *             the associated transcript, and a statistical summary of the bot
 *             recommendation results.</p>
 */
export interface BotRecommendationResults {
  /**
   * @public
   * <p>The presigned URL link of the recommended bot definition.</p>
   */
  botLocaleExportUrl?: string;

  /**
   * @public
   * <p>The presigned url link of the associated transcript.</p>
   */
  associatedTranscriptsUrl?: string;

  /**
   * @public
   * <p>The statistical summary of the bot recommendation results.</p>
   */
  statistics?: BotRecommendationResultStatistics;
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
 * @public
 * <p>A summary of the bot recommendation.</p>
 */
export interface BotRecommendationSummary {
  /**
   * @public
   * <p>The status of the bot recommendation.</p>
   *          <p>If the status is Failed, then the reasons for the failure are listed
   *          in the failureReasons field. </p>
   */
  botRecommendationStatus: BotRecommendationStatus | string | undefined;

  /**
   * @public
   * <p>The unique identifier of the bot recommendation to be
   *          updated.</p>
   */
  botRecommendationId: string | undefined;

  /**
   * @public
   * <p>A timestamp of the date and time that the bot recommendation was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>A timestamp of the date and time that the bot recommendation was
   *          last updated.</p>
   */
  lastUpdatedDateTime?: Date;
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
 * @public
 * <p>Specifies attributes for sorting a list of bots.</p>
 */
export interface BotSortBy {
  /**
   * @public
   * <p>The attribute to use to sort the list of bots.</p>
   */
  attribute: BotSortAttribute | string | undefined;

  /**
   * @public
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
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
 * @public
 * <p>Summary information about a bot returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBots.html">ListBots</a> operation.</p>
 */
export interface BotSummary {
  /**
   * @public
   * <p>The unique identifier assigned to the bot. Use this ID to get
   *          detailed information about the bot with the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBot.html">DescribeBot</a> operation.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The name of the bot.</p>
   */
  botName?: string;

  /**
   * @public
   * <p>The description of the bot.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The current status of the bot. When the status is
   *          <code>Available</code> the bot is ready for use.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * @public
   * <p>The latest numerical version in use for the bot.</p>
   */
  latestBotVersion?: string;

  /**
   * @public
   * <p>The date and time that the bot was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>The type of the bot.</p>
   */
  botType?: BotType | string;
}

/**
 * @public
 * <p>The version of a bot used for a bot locale.</p>
 */
export interface BotVersionLocaleDetails {
  /**
   * @public
   * <p>The version of a bot used for a bot locale.</p>
   */
  sourceBotVersion: string | undefined;
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
 * @public
 * <p>Specifies attributes for sorting a list of bot versions.</p>
 */
export interface BotVersionSortBy {
  /**
   * @public
   * <p>The attribute to use to sort the list of versions.</p>
   */
  attribute: BotVersionSortAttribute | string | undefined;

  /**
   * @public
   * <p>The order to sort the list. You can specify ascending or descending
   *          order.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 * <p>Summary information about a bot version returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersions.html">ListBotVersions</a> operation.</p>
 */
export interface BotVersionSummary {
  /**
   * @public
   * <p>The name of the bot associated with the version.</p>
   */
  botName?: string;

  /**
   * @public
   * <p>The numeric version of the bot, or <code>DRAFT</code> to indicate
   *          that this is the version of the bot that can be updated..</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The description of the version.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the bot. When the status is available, the version of
   *          the bot is ready for use.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * @public
   * <p>A timestamp of the date and time that the version was
   *          created.</p>
   */
  creationDateTime?: Date;
}

/**
 * @public
 */
export interface BuildBotLocaleRequest {
  /**
   * @public
   * <p>The identifier of the bot to build. The identifier is returned in
   *          the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot to build. This can only be the draft version
   *          of the bot.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale that the bot will be used
   *          in. The string must match one of the supported locales. All of the
   *          intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface BuildBotLocaleResponse {
  /**
   * @public
   * <p>The identifier of the specified bot.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The version of the bot that was built. This is only the draft
   *          version of the bot.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The language and locale specified of where the bot can be
   *          used.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The bot's build status. When the status is
   *             <code>ReadyExpressTesting</code> you can test the bot using the
   *          utterances defined for the intents and slot types. When the status is
   *             <code>Built</code>, the bot is ready for use and can be tested using
   *          any utterance.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * @public
   * <p>A timestamp indicating the date and time that the bot was last built
   *          for this locale.</p>
   */
  lastBuildSubmittedDateTime?: Date;
}

/**
 * @public
 * <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
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
 * @public
 * <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
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
 * @public
 * <p>Specifies attributes for sorting a list of built-in intents.</p>
 */
export interface BuiltInIntentSortBy {
  /**
   * @public
   * <p>The attribute to use to sort the list of built-in intents.</p>
   */
  attribute: BuiltInIntentSortAttribute | string | undefined;

  /**
   * @public
   * <p>The order to sort the list. You can specify ascending or descending
   *          order.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 * <p>Provides summary information about a built-in intent for the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInIntents.html"> ListBuiltInIntents </a> operation.</p>
 */
export interface BuiltInIntentSummary {
  /**
   * @public
   * <p>The signature of the built-in intent. Use this to specify the parent
   *          intent of a derived intent.</p>
   */
  intentSignature?: string;

  /**
   * @public
   * <p>The description of the intent.</p>
   */
  description?: string;
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
 * @public
 * <p>Specifies attributes for sorting a list of built-in slot
 *          types.</p>
 */
export interface BuiltInSlotTypeSortBy {
  /**
   * @public
   * <p>The attribute to use to sort the list of built-in intents.</p>
   */
  attribute: BuiltInSlotTypeSortAttribute | string | undefined;

  /**
   * @public
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
}

/**
 * @public
 * <p>Provides summary information about a built-in slot type for the
 *          <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInSlotTypes.html"> ListBuiltInSlotTypes </a>
 *          operation.</p>
 */
export interface BuiltInSlotTypeSummary {
  /**
   * @public
   * <p>The signature of the built-in slot type. Use this to specify the
   *          parent slot type of a derived slot type.</p>
   */
  slotTypeSignature?: string;

  /**
   * @public
   * <p>The description of the built-in slot type.</p>
   */
  description?: string;
}

/**
 * @public
 * <p>Describes a button to use on a response card used to gather slot
 *          values from a user.</p>
 */
export interface Button {
  /**
   * @public
   * <p>The text that appears on the button. Use this to tell the user what
   *          value is returned when they choose this button.</p>
   */
  text: string | undefined;

  /**
   * @public
   * <p>The value returned to Amazon Lex when the user chooses this button. This
   *          must be one of the slot values configured for the slot.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>The Amazon CloudWatch Logs log group where the text and metadata logs are
 *          delivered. The log group must exist before you enable logging.</p>
 */
export interface CloudWatchLogGroupLogDestination {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the log group where text and
   *          metadata logs are delivered.</p>
   */
  cloudWatchLogGroupArn: string | undefined;

  /**
   * @public
   * <p>The prefix of the log stream name within the log group that you
   *          specified </p>
   */
  logPrefix: string | undefined;
}

/**
 * @public
 * <p>Subslot type composition.</p>
 */
export interface SubSlotTypeComposition {
  /**
   * @public
   * <p>Name of a constituent sub slot inside a composite slot.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The unique identifier assigned to a slot type.
   *         This refers to either a built-in slot type or the unique slotTypeId of a custom slot type.</p>
   */
  slotTypeId: string | undefined;
}

/**
 * @public
 * <p>A composite slot is a combination of two or more slots
 *        that capture multiple pieces of information in a single user input.</p>
 */
export interface CompositeSlotTypeSetting {
  /**
   * @public
   * <p>Subslots in the composite slot.</p>
   */
  subSlots?: SubSlotTypeComposition[];
}

/**
 * @public
 * <p>Provides an expression that evaluates to true or false. </p>
 */
export interface Condition {
  /**
   * @public
   * <p>The expression string that is evaluated. </p>
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
 * @public
 * <p>Defines the action that the bot executes at runtime when the
 *          conversation reaches this step.</p>
 */
export interface DialogAction {
  /**
   * @public
   * <p>The action that the bot should execute. </p>
   */
  type: DialogActionType | string | undefined;

  /**
   * @public
   * <p>If the dialog action is <code>ElicitSlot</code>, defines the slot to
   *          elicit from the user.</p>
   */
  slotToElicit?: string;

  /**
   * @public
   * <p>When true the next message for the intent is not used.</p>
   */
  suppressNextMessage?: boolean;
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
 * @public
 * <p>The value to set in a slot.</p>
 */
export interface SlotValue {
  /**
   * @public
   * <p>The value that Amazon Lex determines for the slot. The
   *          actual value depends on the setting of the value selection strategy for
   *          the bot. You can choose to use the value entered by the user, or you
   *          can have Amazon Lex choose the first value in the
   *             <code>resolvedValues</code> list.</p>
   */
  interpretedValue?: string;
}

/**
 * @public
 * <p>A custom response string that Amazon Lex sends to your application. You
 *          define the content and structure the string.</p>
 */
export interface CustomPayload {
  /**
   * @public
   * <p>The string that is sent to your application.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>A card that is shown to the user by a messaging platform. You define
 *          the contents of the card, the card is displayed by the platform. </p>
 *          <p>When you use a response card, the response from the user is
 *          constrained to the text associated with a button on the card.</p>
 */
export interface ImageResponseCard {
  /**
   * @public
   * <p>The title to display on the response card. The format of the title
   *          is determined by the platform displaying the response card.</p>
   */
  title: string | undefined;

  /**
   * @public
   * <p>The subtitle to display on the response card. The format of the
   *          subtitle is determined by the platform displaying the response
   *          card.</p>
   */
  subtitle?: string;

  /**
   * @public
   * <p>The URL of an image to display on the response card. The image URL
   *          must be publicly available so that the platform displaying the response
   *          card has access to the image.</p>
   */
  imageUrl?: string;

  /**
   * @public
   * <p>A list of buttons that should be displayed on the response card. The
   *          arrangement of the buttons is determined by the platform that displays
   *          the button.</p>
   */
  buttons?: Button[];
}

/**
 * @public
 * <p>Defines an ASCII text message to send to the user.</p>
 */
export interface PlainTextMessage {
  /**
   * @public
   * <p>The message to send to the user.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Defines a Speech Synthesis Markup Language (SSML) prompt.</p>
 */
export interface SSMLMessage {
  /**
   * @public
   * <p>The SSML text that defines the prompt.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>The object that provides message text and its type.</p>
 */
export interface Message {
  /**
   * @public
   * <p>A message in plain text format.</p>
   */
  plainTextMessage?: PlainTextMessage;

  /**
   * @public
   * <p>A message in a custom format defined by the client
   *          application.</p>
   */
  customPayload?: CustomPayload;

  /**
   * @public
   * <p>A message in Speech Synthesis Markup Language (SSML).</p>
   */
  ssmlMessage?: SSMLMessage;

  /**
   * @public
   * <p>A message that defines a response card that the client application
   *          can show to the user.</p>
   */
  imageResponseCard?: ImageResponseCard;
}

/**
 * @public
 * <p>Provides one or more messages that Amazon Lex should send to the
 *          user.</p>
 */
export interface MessageGroup {
  /**
   * @public
   * <p>The primary message that Amazon Lex should send to the user.</p>
   */
  message: Message | undefined;

  /**
   * @public
   * <p>Message variations to send to the user. When variations are defined,
   *          Amazon Lex chooses the primary message or one of the variations to send to
   *          the user.</p>
   */
  variations?: Message[];
}

/**
 * @public
 * <p>Specifies a list of message groups that Amazon Lex uses to respond the
 *          user input.</p>
 */
export interface ResponseSpecification {
  /**
   * @public
   * <p>A collection of responses that Amazon Lex can send to the user. Amazon Lex
   *          chooses the actual response to send at runtime.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * @public
   * <p>Indicates whether the user can interrupt a speech response from
   *          Amazon Lex.</p>
   */
  allowInterrupt?: boolean;
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
 * @public
 * <p>The item listing the evaluation of intent level success or failure.</p>
 */
export interface ConversationLevelIntentClassificationResultItem {
  /**
   * @public
   * <p>The intent name used in the evaluation of intent level success or failure.</p>
   */
  intentName: string | undefined;

  /**
   * @public
   * <p>The number of times the specific intent is used in the evaluation of intent level
   *       success or failure.</p>
   */
  matchResult: TestResultMatchStatus | string | undefined;
}

/**
 * @public
 * <p>The conversation level details of the conversation used in the test set.</p>
 */
export interface ConversationLevelResultDetail {
  /**
   * @public
   * <p>The success or failure of the streaming of the conversation.</p>
   */
  endToEndResult: TestResultMatchStatus | string | undefined;

  /**
   * @public
   * <p>The speech transcription success or failure details of the conversation.</p>
   */
  speechTranscriptionResult?: TestResultMatchStatus | string;
}

/**
 * @public
 * <p>The slots used for the slot resolution in the conversation.</p>
 */
export interface ConversationLevelSlotResolutionResultItem {
  /**
   * @public
   * <p>The intents used in the slots list for the slot resolution details.</p>
   */
  intentName: string | undefined;

  /**
   * @public
   * <p>The slot name in the slots list for the slot resolution details.</p>
   */
  slotName: string | undefined;

  /**
   * @public
   * <p>The number of matching slots used in the slots listings for the slot resolution evaluation.</p>
   */
  matchResult: TestResultMatchStatus | string | undefined;
}

/**
 * @public
 * <p>The test result evaluation item at the conversation level.</p>
 */
export interface ConversationLevelTestResultItem {
  /**
   * @public
   * <p>The conversation Id of the test result evaluation item.</p>
   */
  conversationId: string | undefined;

  /**
   * @public
   * <p>The end-to-end success or failure of the test result evaluation item.</p>
   */
  endToEndResult: TestResultMatchStatus | string | undefined;

  /**
   * @public
   * <p>The speech transcription success or failure of the test result evaluation item.</p>
   */
  speechTranscriptionResult?: TestResultMatchStatus | string;

  /**
   * @public
   * <p>The intent classification of the test result evaluation item.</p>
   */
  intentClassificationResults: ConversationLevelIntentClassificationResultItem[] | undefined;

  /**
   * @public
   * <p>The slot success or failure of the test result evaluation item.</p>
   */
  slotResolutionResults: ConversationLevelSlotResolutionResultItem[] | undefined;
}

/**
 * @public
 * <p>The test set results data at the conversation level.</p>
 */
export interface ConversationLevelTestResults {
  /**
   * @public
   * <p>The item list in the test set results data at the conversation level.</p>
   */
  items: ConversationLevelTestResultItem[] | undefined;
}

/**
 * @public
 * <p>The selection to filter the test set results data at the conversation level.</p>
 */
export interface ConversationLevelTestResultsFilterBy {
  /**
   * @public
   * <p>The selection of matched or mismatched end-to-end status to filter test set results data
   *       at the conversation level.</p>
   */
  endToEndResult?: TestResultMatchStatus | string;
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
 * @public
 * <p>The selected data source to filter the conversation log.</p>
 */
export interface ConversationLogsDataSourceFilterBy {
  /**
   * @public
   * <p>The start time for the conversation log.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The end time for the conversation log.</p>
   */
  endTime: Date | undefined;

  /**
   * @public
   * <p>The selection to filter by input mode for the conversation logs. </p>
   */
  inputMode: ConversationLogsInputModeFilter | string | undefined;
}

/**
 * @public
 * <p>The data source that uses conversation logs.</p>
 */
export interface ConversationLogsDataSource {
  /**
   * @public
   * <p>The bot Id from the conversation logs.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The bot alias Id from the conversation logs.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The locale Id of the conversation log.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The filter for the data source of the conversation log.</p>
   */
  filter: ConversationLogsDataSourceFilterBy | undefined;
}

/**
 * @public
 * <p>Defines the Amazon CloudWatch Logs destination log group for
 *          conversation text logs.</p>
 */
export interface TextLogDestination {
  /**
   * @public
   * <p>Defines the Amazon CloudWatch Logs log group where text and metadata logs are
   *          delivered.</p>
   */
  cloudWatch: CloudWatchLogGroupLogDestination | undefined;
}

/**
 * @public
 * <p>Defines settings to enable text conversation logs.</p>
 */
export interface TextLogSetting {
  /**
   * @public
   * <p>Determines whether conversation logs should be stored for an
   *          alias.</p>
   */
  enabled: boolean | undefined;

  /**
   * @public
   * <p>Defines the Amazon CloudWatch Logs destination log group for
   *          conversation text logs.</p>
   */
  destination: TextLogDestination | undefined;
}

/**
 * @public
 * <p>Configures conversation logging that saves audio, text, and metadata
 *          for the conversations with your users.</p>
 */
export interface ConversationLogSettings {
  /**
   * @public
   * <p>The Amazon CloudWatch Logs settings for logging text and metadata.</p>
   */
  textLogSettings?: TextLogSetting[];

  /**
   * @public
   * <p>The Amazon S3 settings for logging audio to an S3 bucket.</p>
   */
  audioLogSettings?: AudioLogSetting[];
}

/**
 * @public
 */
export interface CreateBotRequest {
  /**
   * @public
   * <p>The name of the bot. The bot name must be unique in the account that
   *          creates the bot.</p>
   */
  botName: string | undefined;

  /**
   * @public
   * <p>A description of the bot. It appears in lists to help you identify a
   *          particular bot.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *          access the bot.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Provides information on additional privacy protections Amazon Lex should
   *          use with the bot's data.</p>
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * @public
   * <p>The time, in seconds, that Amazon Lex should keep information about a
   *          user's conversation with the bot. </p>
   *          <p>A user interaction remains active for the amount of time specified.
   *          If no conversation occurs during this time, the session expires and
   *          Amazon Lex deletes any data provided before the timeout.</p>
   *          <p>You can specify between 60 (1 minute) and 86,400 (24 hours)
   *          seconds.</p>
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * @public
   * <p>A list of tags to add to the bot. You can only add tags when you
   *          create a bot. You can't use the <code>UpdateBot</code> operation to
   *          update tags. To update tags, use the <code>TagResource</code>
   *          operation.</p>
   */
  botTags?: Record<string, string>;

  /**
   * @public
   * <p>A list of tags to add to the test alias for a bot. You can only add
   *          tags when you create a bot. You can't use the <code>UpdateAlias</code>
   *          operation to update tags. To update tags on the test alias, use the
   *             <code>TagResource</code> operation.</p>
   */
  testBotAliasTags?: Record<string, string>;

  /**
   * @public
   * <p>The type of a bot to create.</p>
   */
  botType?: BotType | string;

  /**
   * @public
   * <p>The list of bot members in a network to be created.</p>
   */
  botMembers?: BotMember[];
}

/**
 * @public
 */
export interface CreateBotResponse {
  /**
   * @public
   * <p>A unique identifier for a particular bot. You use this to identify
   *          the bot when you call other Amazon Lex API operations.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The name specified for the bot.</p>
   */
  botName?: string;

  /**
   * @public
   * <p>The description specified for the bot.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The IAM role specified for the bot.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The data privacy settings specified for the bot.</p>
   */
  dataPrivacy?: DataPrivacy;

  /**
   * @public
   * <p>The session idle time specified for the bot.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * @public
   * <p>Shows the current status of the bot. The bot is first in the
   *             <code>Creating</code> status. Once the bot is read for use, it
   *          changes to the <code>Available</code> status. After the bot is created,
   *          you can use the <code>DRAFT</code> version of the bot.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * @public
   * <p>A timestamp indicating the date and time that the bot was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>A list of tags associated with the bot.</p>
   */
  botTags?: Record<string, string>;

  /**
   * @public
   * <p>A list of tags associated with the test alias for the bot.</p>
   */
  testBotAliasTags?: Record<string, string>;

  /**
   * @public
   * <p>The type of a bot that was created.</p>
   */
  botType?: BotType | string;

  /**
   * @public
   * <p>The list of bots in a network that was created.</p>
   */
  botMembers?: BotMember[];
}

/**
 * @public
 * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
 *          user utterances.</p>
 */
export interface SentimentAnalysisSettings {
  /**
   * @public
   * <p>Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user
   *          utterances.</p>
   */
  detectSentiment: boolean | undefined;
}

/**
 * @public
 */
export interface CreateBotAliasRequest {
  /**
   * @public
   * <p>The alias to create. The name must be unique for the bot.</p>
   */
  botAliasName: string | undefined;

  /**
   * @public
   * <p>A description of the alias. Use this description to help identify
   *          the alias.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The version of the bot that this alias points to. You can use the
   *             <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html">UpdateBotAlias</a> operation to change the
   *          bot version associated with the alias.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>Maps configuration information to a specific locale. You can use
   *          this parameter to specify a specific Lambda function to run different
   *          functions in different locales.</p>
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

  /**
   * @public
   * <p>Specifies whether Amazon Lex logs text and audio for a conversation with
   *          the bot. When you enable conversation logs, text logs store text input,
   *          transcripts of audio input, and associated metadata in Amazon CloudWatch Logs. Audio
   *          logs store audio input in Amazon S3.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * @public
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * @public
   * <p>The unique identifier of the bot that the alias applies to.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>A list of tags to add to the bot alias. You can only add tags when
   *          you create an alias, you can't use the <code>UpdateBotAlias</code>
   *          operation to update the tags on a bot alias. To update tags, use the
   *             <code>TagResource</code> operation.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateBotAliasResponse {
  /**
   * @public
   * <p>The unique identifier of the bot alias.</p>
   */
  botAliasId?: string;

  /**
   * @public
   * <p>The name specified for the bot alias.</p>
   */
  botAliasName?: string;

  /**
   * @public
   * <p>The description specified for the bot alias.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The version of the bot associated with this alias.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>Configuration information for a specific locale.</p>
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

  /**
   * @public
   * <p>The conversation log settings specified for the alias.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * @public
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * @public
   * <p>The current status of the alias. The alias is first put into the
   *             <code>Creating</code> state. When the alias is ready to be used, it
   *          is put into the <code>Available</code> state. You can use the
   *             <code>DescribeBotAlias</code> operation to get the current state of
   *          an alias.</p>
   */
  botAliasStatus?: BotAliasStatus | string;

  /**
   * @public
   * <p>The unique identifier of the bot that this alias applies to.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>A Unix timestamp indicating the date and time that the bot alias was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>A list of tags associated with the bot alias.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateBotLocaleRequest {
  /**
   * @public
   * <p>The identifier of the bot to create the locale for.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot to create the locale for. This can only be
   *          the draft version of the bot.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale that the bot will be used
   *          in. The string must match one of the supported locales. All of the
   *          intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>A description of the bot locale. Use this to help identify the bot
   *          locale in lists.</p>
   */
  description?: string;

  /**
   * @public
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
   */
  nluIntentConfidenceThreshold: number | undefined;

  /**
   * @public
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;
}

/**
 * @public
 */
export interface CreateBotLocaleResponse {
  /**
   * @public
   * <p>The specified bot identifier.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The specified bot version.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The specified locale name.</p>
   */
  localeName?: string;

  /**
   * @public
   * <p>The specified locale identifier.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The specified description of the bot locale.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The specified confidence threshold for inserting the
   *             <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> intents.</p>
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * @public
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;

  /**
   * @public
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
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * @public
   * <p>A timestamp specifying the date and time that the bot locale was
   *          created.</p>
   */
  creationDateTime?: Date;
}

/**
 * @public
 */
export interface CreateBotVersionRequest {
  /**
   * @public
   * <p>The identifier of the bot to create the version for.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>A description of the version. Use the description to help identify
   *          the version in lists.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Specifies the locales that Amazon Lex adds to this version. You can
   *          choose the <code>Draft</code> version or any other previously published
   *          version for each locale. When you specify a source version, the locale
   *          data is copied from the source version to the new version.</p>
   */
  botVersionLocaleSpecification: Record<string, BotVersionLocaleDetails> | undefined;
}

/**
 * @public
 */
export interface CreateBotVersionResponse {
  /**
   * @public
   * <p>The bot identifier specified in the request.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The description of the version specified in the request.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The version number assigned to the version.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The source versions used for each locale in the new version.</p>
   */
  botVersionLocaleSpecification?: Record<string, BotVersionLocaleDetails>;

  /**
   * @public
   * <p>When you send a request to create or update a bot, Amazon Lex sets the
   *          status response element to <code>Creating</code>. After Amazon Lex builds
   *          the bot, it sets status to <code>Available</code>. If Amazon Lex can't build
   *          the bot, it sets status to <code>Failed</code>.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * @public
   * <p>A timestamp of the date and time that the version was
   *          created.</p>
   */
  creationDateTime?: Date;
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
 * @public
 * <p>Provides the parameters required for exporting a custom vocabulary.</p>
 */
export interface CustomVocabularyExportSpecification {
  /**
   * @public
   * <p>The identifier of the bot that contains the custom vocabulary to export.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot that contains the custom vocabulary to export.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The locale of the bot that contains the custom vocabulary to export.</p>
   */
  localeId: string | undefined;
}

/**
 * @public
 * <p>Contains information about the test set that is exported.</p>
 */
export interface TestSetExportSpecification {
  /**
   * @public
   * <p>The unique identifier of the test set.</p>
   */
  testSetId: string | undefined;
}

/**
 * @public
 * <p>Provides information about the bot or bot locale that you want to
 *          export. You can specify the <code>botExportSpecification</code> or the
 *             <code>botLocaleExportSpecification</code>, but not both.</p>
 */
export interface ExportResourceSpecification {
  /**
   * @public
   * <p>Parameters for exporting a bot.</p>
   */
  botExportSpecification?: BotExportSpecification;

  /**
   * @public
   * <p>Parameters for exporting a bot locale.</p>
   */
  botLocaleExportSpecification?: BotLocaleExportSpecification;

  /**
   * @public
   * <p>The parameters required to export a custom vocabulary.</p>
   */
  customVocabularyExportSpecification?: CustomVocabularyExportSpecification;

  /**
   * @public
   * <p>Specifications for the test set that is exported as a resource.</p>
   */
  testSetExportSpecification?: TestSetExportSpecification;
}

/**
 * @public
 */
export interface CreateExportRequest {
  /**
   * @public
   * <p>Specifies the type of resource to export, either a bot or a bot
   *          locale. You can only specify one type of resource to export.</p>
   */
  resourceSpecification: ExportResourceSpecification | undefined;

  /**
   * @public
   * <p>The file format of the bot or bot locale definition files.</p>
   */
  fileFormat: ImportExportFileFormat | string | undefined;

  /**
   * @public
   * <p>An password to use to encrypt the exported archive. Using a password
   *          is optional, but you should encrypt the archive to protect the data in
   *          transit between Amazon Lex and your local computer.</p>
   */
  filePassword?: string;
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
   * @public
   * <p>An identifier for a specific request to create an export.</p>
   */
  exportId?: string;

  /**
   * @public
   * <p>A description of the type of resource that was exported, either a
   *          bot or a bot locale.</p>
   */
  resourceSpecification?: ExportResourceSpecification;

  /**
   * @public
   * <p>The file format used for the bot or bot locale definition
   *          files.</p>
   */
  fileFormat?: ImportExportFileFormat | string;

  /**
   * @public
   * <p>The status of the export. When the status is <code>Completed</code>,
   *          you can use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">DescribeExport</a> operation to get the
   *          pre-signed S3 URL link to your exported bot or bot locale.</p>
   */
  exportStatus?: ExportStatus | string;

  /**
   * @public
   * <p>The date and time that the request to export a bot was
   *          created.</p>
   */
  creationDateTime?: Date;
}

/**
 * @public
 * <p>Settings that determine the Lambda function that Amazon Lex uses for
 *          processing user responses.</p>
 */
export interface DialogCodeHookSettings {
  /**
   * @public
   * <p>Enables the dialog code hook so that it processes user
   *          requests.</p>
   */
  enabled: boolean | undefined;
}

/**
 * @public
 * <p>Provides settings for a message that is sent to the user when a
 *          fulfillment Lambda function starts running.</p>
 */
export interface FulfillmentStartResponseSpecification {
  /**
   * @public
   * <p>The delay between when the Lambda fulfillment function starts running
   *          and the start message is played. If the Lambda function returns before
   *          the delay is over, the start message isn't played.</p>
   */
  delayInSeconds: number | undefined;

  /**
   * @public
   * <p>1 - 5 message groups that contain start messages. Amazon Lex chooses
   *          one of the messages to play to the user.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * @public
   * <p>Determines whether the user can interrupt the start message while it
   *          is playing.</p>
   */
  allowInterrupt?: boolean;
}

/**
 * @public
 * <p>Provides settings for a message that is sent periodically to the
 *          user while a fulfillment Lambda function is running.</p>
 */
export interface FulfillmentUpdateResponseSpecification {
  /**
   * @public
   * <p>The frequency that a message is sent to the user. When the period
   *          ends, Amazon Lex chooses a message from the message groups and plays it to
   *          the user. If the fulfillment Lambda returns before the first period
   *          ends, an update message is not played to the user.</p>
   */
  frequencyInSeconds: number | undefined;

  /**
   * @public
   * <p>1 - 5 message groups that contain update messages. Amazon Lex chooses
   *          one of the messages to play to the user.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * @public
   * <p>Determines whether the user can interrupt an update message while it
   *          is playing.</p>
   */
  allowInterrupt?: boolean;
}

/**
 * @public
 * <p>Provides information for updating the user on the progress of
 *          fulfilling an intent.</p>
 */
export interface FulfillmentUpdatesSpecification {
  /**
   * @public
   * <p>Determines whether fulfillment updates are sent to the user. When
   *          this field is true, updates are sent.</p>
   *          <p>If the <code>active</code> field is set to true, the
   *             <code>startResponse</code>, <code>updateResponse</code>, and
   *             <code>timeoutInSeconds</code> fields are required.</p>
   */
  active: boolean | undefined;

  /**
   * @public
   * <p>Provides configuration information for the message sent to users
   *          when the fulfillment Lambda functions starts running.</p>
   */
  startResponse?: FulfillmentStartResponseSpecification;

  /**
   * @public
   * <p>Provides configuration information for messages sent periodically to
   *          the user while the fulfillment Lambda function is running.</p>
   */
  updateResponse?: FulfillmentUpdateResponseSpecification;

  /**
   * @public
   * <p>The length of time that the fulfillment Lambda function should run
   *          before it times out.</p>
   */
  timeoutInSeconds?: number;
}

/**
 * @public
 * <p>A context that must be active for an intent to be
 *          selected by Amazon Lex.</p>
 */
export interface InputContext {
  /**
   * @public
   * <p>The name of the context.</p>
   */
  name: string | undefined;
}

/**
 * @public
 * <p>Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.</p>
 */
export interface ElicitationCodeHookInvocationSetting {
  /**
   * @public
   * <p>Indicates whether a Lambda function should be invoked
   *          for the dialog.</p>
   */
  enableCodeHookInvocation: boolean | undefined;

  /**
   * @public
   * <p>A label that indicates the dialog step from which the dialog code
   *          hook is happening.</p>
   */
  invocationLabel?: string;
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
 * @public
 * <p>Specifies the text input specifications.</p>
 */
export interface TextInputSpecification {
  /**
   * @public
   * <p>Time for which a bot waits before re-prompting a customer for text input.</p>
   */
  startTimeoutMs: number | undefined;
}

/**
 * @public
 * <p>Specifies the settings on a prompt attempt.</p>
 */
export interface PromptAttemptSpecification {
  /**
   * @public
   * <p>Indicates whether the user can interrupt a speech prompt attempt from the bot.</p>
   */
  allowInterrupt?: boolean;

  /**
   * @public
   * <p>Indicates the allowed input types of the prompt attempt.</p>
   */
  allowedInputTypes: AllowedInputTypes | undefined;

  /**
   * @public
   * <p>Specifies the settings on audio and DTMF input.</p>
   */
  audioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification;

  /**
   * @public
   * <p>Specifies the settings on text input.</p>
   */
  textInputSpecification?: TextInputSpecification;
}

/**
 * @public
 * <p>Specifies a list of message groups that Amazon Lex sends to a user to
 *          elicit a response.</p>
 */
export interface PromptSpecification {
  /**
   * @public
   * <p>A collection of messages that Amazon Lex can send to the user. Amazon Lex
   *          chooses the actual message to send at runtime.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * @public
   * <p>The maximum number of times the bot tries to elicit a response from
   *          the user using this prompt.</p>
   */
  maxRetries: number | undefined;

  /**
   * @public
   * <p>Indicates whether the user can interrupt a speech prompt from the
   *          bot.</p>
   */
  allowInterrupt?: boolean;

  /**
   * @public
   * <p>Indicates how a message is selected from a message group among retries.</p>
   */
  messageSelectionStrategy?: MessageSelectionStrategy | string;

  /**
   * @public
   * <p>Specifies the advanced settings on each attempt of the prompt.</p>
   */
  promptAttemptsSpecification?: Record<string, PromptAttemptSpecification>;
}

/**
 * @public
 * <p>Provides configuration information for the <code>AMAZON.KendraSearchIntent</code>
 *          intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra
 *          index and returns documents from the index that match the user's
 *          utterance.</p>
 */
export interface KendraConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the
   *          <code>AMAZON.KendraSearchIntent</code> intent to search. The index must be in the
   *          same account and Region as the Amazon Lex bot.</p>
   */
  kendraIndex: string | undefined;

  /**
   * @public
   * <p>Determines whether the <code>AMAZON.KendraSearchIntent</code> intent uses a
   *          custom query string to query the Amazon Kendra index.</p>
   */
  queryFilterStringEnabled?: boolean;

  /**
   * @public
   * <p>A query filter that Amazon Lex sends to Amazon Kendra to filter the response from
   *          a query. The filter is in the format defined by Amazon Kendra. For more
   *          information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering
   *          queries</a>.</p>
   */
  queryFilterString?: string;
}

/**
 * @public
 * <p>Describes a session context that is activated when an intent is
 *          fulfilled.</p>
 */
export interface OutputContext {
  /**
   * @public
   * <p>The name of the output context.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The amount of time, in seconds, that the output context should
   *          remain active. The time is figured from the first time the context is
   *          sent to the user.</p>
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * @public
   * <p>The number of conversation turns that the output context should
   *          remain active. The number of turns is counted from the first time that
   *          the context is sent to the user.</p>
   */
  turnsToLive: number | undefined;
}

/**
 * @public
 * <p>A sample utterance that invokes an intent or respond to a slot
 *          elicitation prompt.</p>
 */
export interface SampleUtterance {
  /**
   * @public
   * <p>The sample utterance that Amazon Lex uses to build its machine-learning
   *          model to recognize intents.</p>
   */
  utterance: string | undefined;
}

/**
 * @public
 */
export interface CreateResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A resource policy to add to the resource. The policy is a JSON
   *          structure that contains one or more statements that define the policy.
   *          The policy must follow the IAM syntax. For more information about the
   *          contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy
   *             reference </a>. </p>
   *          <p>If the policy isn't valid, Amazon Lex returns a validation
   *          exception.</p>
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface CreateResourcePolicyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy was attached to.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   */
  revisionId?: string;
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
 * @public
 * <p>The IAM principal that you allowing or denying access to an Amazon Lex
 *          action. You must provide a <code>service</code> or an <code>arn</code>,
 *          but not both in the same statement. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html"> AWS JSON policy elements: Principal </a>.</p>
 */
export interface Principal {
  /**
   * @public
   * <p>The name of the Amazon Web Services service that should allowed or denied access to
   *          an Amazon Lex action.</p>
   */
  service?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface CreateResourcePolicyStatementRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The name of the statement. The ID is the same as the
   *             <code>Sid</code> IAM property. The statement name must be unique
   *          within the policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">IAM
   *             JSON policy elements: Sid</a>. </p>
   */
  statementId: string | undefined;

  /**
   * @public
   * <p>Determines whether the statement allows or denies access to the
   *          resource.</p>
   */
  effect: Effect | string | undefined;

  /**
   * @public
   * <p>An IAM principal, such as an IAM user, IAM role,
   *          or Amazon Web Services services
   *          that is allowed or denied access to a resource. For more information,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">Amazon Web Services JSON policy elements: Principal</a>.</p>
   */
  principal: Principal[] | undefined;

  /**
   * @public
   * <p>The Amazon Lex action that this policy either allows or denies. The
   *          action must apply to the resource type of the specified ARN. For more
   *          information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html">
   *             Actions, resources, and condition keys for Amazon Lex V2</a>.</p>
   */
  action: string[] | undefined;

  /**
   * @public
   * <p>Specifies a condition when the policy is in effect. If the principal
   *          of the policy is a service principal, you must provide two condition
   *          blocks, one with a SourceAccount global condition key and one with a
   *          SourceArn global condition key.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM JSON policy elements: Condition </a>.</p>
   */
  condition?: Record<string, Record<string, string>>;

  /**
   * @public
   * <p>The identifier of the revision of the policy to edit. If this
   *          revision ID doesn't match the current revision ID, Amazon Lex throws an
   *          exception.</p>
   *          <p>If you don't specify a revision, Amazon Lex overwrites the contents of
   *          the policy with the new values.</p>
   */
  expectedRevisionId?: string;
}

/**
 * @public
 */
export interface CreateResourcePolicyStatementResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   */
  revisionId?: string;
}

/**
 * @public
 * <p>Indicates whether a slot can return multiple values.</p>
 */
export interface MultipleValuesSetting {
  /**
   * @public
   * <p>Indicates whether a slot can return multiple values. When
   *             <code>true</code>, the slot may return more than one value in a
   *          response. When <code>false</code>, the slot returns only a single
   *          value.</p>
   *          <p>Multi-value slots are only available in the en-US locale. If you set
   *          this value to <code>true</code> in any other locale, Amazon Lex throws a
   *             <code>ValidationException</code>.</p>
   *          <p>If the <code>allowMutlipleValues</code> is not set, the default
   *          value is <code>false</code>.</p>
   */
  allowMultipleValues?: boolean;
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
 * @public
 * <p>Determines whether Amazon Lex obscures slot values in conversation logs.
 *       </p>
 */
export interface ObfuscationSetting {
  /**
   * @public
   * <p>Value that determines whether Amazon Lex obscures slot values in
   *          conversation logs. The default is to obscure the values.</p>
   */
  obfuscationSettingType: ObfuscationSettingType | string | undefined;
}

/**
 * @public
 * <p>Specifies the default value to use when a user doesn't provide a
 *          value for a slot.</p>
 */
export interface SlotDefaultValue {
  /**
   * @public
   * <p>The default value to use when a user doesn't provide a value for a
   *          slot.</p>
   */
  defaultValue: string | undefined;
}

/**
 * @public
 * <p>Defines a list of values that Amazon Lex should use as the default value
 *          for a slot.</p>
 */
export interface SlotDefaultValueSpecification {
  /**
   * @public
   * <p>A list of default values. Amazon Lex chooses the default value to use in
   *          the order that they are presented in the list.</p>
   */
  defaultValueList: SlotDefaultValue[] | undefined;
}

/**
 * @public
 * <p>Defines the messages that Amazon Lex sends to a user to remind them that
 *          the bot is waiting for a response.</p>
 */
export interface StillWaitingResponseSpecification {
  /**
   * @public
   * <p>One or more message groups, each containing one or more messages,
   *          that define the prompts that Amazon Lex sends to the user.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * @public
   * <p>How often a message should be sent to the user. Minimum of 1 second,
   *          maximum of 5 minutes.</p>
   */
  frequencyInSeconds: number | undefined;

  /**
   * @public
   * <p>If Amazon Lex waits longer than this length of time for a response, it
   *          will stop sending messages.</p>
   */
  timeoutInSeconds: number | undefined;

  /**
   * @public
   * <p>Indicates that the user can interrupt the response by speaking while
   *          the message is being played.</p>
   */
  allowInterrupt?: boolean;
}

/**
 * @public
 * <p>Specifies the prompts that Amazon Lex uses while a bot is waiting for
 *          customer input. </p>
 */
export interface WaitAndContinueSpecification {
  /**
   * @public
   * <p>The response that Amazon Lex sends to indicate that the bot is waiting
   *          for the conversation to continue.</p>
   */
  waitingResponse: ResponseSpecification | undefined;

  /**
   * @public
   * <p>The response that Amazon Lex sends to indicate that the bot is ready to
   *          continue the conversation.</p>
   */
  continueResponse: ResponseSpecification | undefined;

  /**
   * @public
   * <p>A response that Amazon Lex sends periodically to the user to indicate
   *          that the bot is still waiting for input from the user.</p>
   */
  stillWaitingResponse?: StillWaitingResponseSpecification;

  /**
   * @public
   * <p>Specifies whether the bot will wait for a user to respond. When this
   *          field is false, wait and continue responses for a slot aren't used. If
   *          the <code>active</code> field isn't specified, the default is
   *          true.</p>
   */
  active?: boolean;
}

/**
 * @public
 * <p>Subslot elicitation settings.</p>
 *          <p>
 *             <code>DefaultValueSpecification</code> is a list of default values for a constituent sub slot in a composite slot. Default values are used when
 *         Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables,
 *         session attributes, and defined values. This is similar to <code>DefaultValueSpecification</code> for slots.</p>
 *          <p>
 *             <code>PromptSpecification</code> is the prompt that Amazon Lex uses to elicit the sub slot value from the user.
 *         This is similar to <code>PromptSpecification</code> for slots.</p>
 */
export interface SubSlotValueElicitationSetting {
  /**
   * @public
   * <p>Defines a list of values that Amazon Lex should use as the default value
   *          for a slot.</p>
   */
  defaultValueSpecification?: SlotDefaultValueSpecification;

  /**
   * @public
   * <p>Specifies a list of message groups that Amazon Lex sends to a user to
   *          elicit a response.</p>
   */
  promptSpecification: PromptSpecification | undefined;

  /**
   * @public
   * <p>If you know a specific pattern that users might respond to an Amazon Lex request for a sub slot value,
   *       you can provide those utterances to improve accuracy. This is optional. In most cases Amazon Lex is capable
   *       of understanding user utterances. This is similar to <code>SampleUtterances</code> for slots.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * @public
   * <p>Specifies the prompts that Amazon Lex uses while a bot is waiting for
   *          customer input. </p>
   */
  waitAndContinueSpecification?: WaitAndContinueSpecification;
}

/**
 * @public
 * <p>Subslot specifications.</p>
 */
export interface Specifications {
  /**
   * @public
   * <p>The unique identifier assigned to the slot type.</p>
   */
  slotTypeId: string | undefined;

  /**
   * @public
   * <p>Specifies the elicitation setting details for constituent sub slots of a composite slot.</p>
   */
  valueElicitationSetting: SubSlotValueElicitationSetting | undefined;
}

/**
 * @public
 * <p>Specifications for the constituent sub slots and the
 *         expression for the composite slot.</p>
 */
export interface SubSlotSetting {
  /**
   * @public
   * <p>The expression text for defining the constituent sub slots in the composite slot using logical AND and OR operators.</p>
   */
  expression?: string;

  /**
   * @public
   * <p>Specifications for the constituent sub slots of a composite slot.</p>
   */
  slotSpecifications?: Record<string, Specifications>;
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
 * <p>Describes the Amazon S3 bucket name and location for the grammar
 *             that is the source for the slot type.</p>
 */
export interface GrammarSlotTypeSource {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket that contains the grammar source.</p>
   */
  s3BucketName: string | undefined;

  /**
   * @public
   * <p>The path to the grammar in the Amazon S3 bucket.</p>
   */
  s3ObjectKey: string | undefined;

  /**
   * @public
   * <p>The KMS key required to decrypt the contents of the grammar, if any.</p>
   */
  kmsKeyArn?: string;
}

/**
 * @public
 * <p>Settings requried for a slot type based on a grammar that you provide.</p>
 */
export interface GrammarSlotTypeSetting {
  /**
   * @public
   * <p>The source of the grammar used to create the slot type.</p>
   */
  source?: GrammarSlotTypeSource;
}

/**
 * @public
 * <p>Provides information about the external source of the slot type's definition.</p>
 */
export interface ExternalSourceSetting {
  /**
   * @public
   * <p>Settings required for a slot type based on a grammar that you provide.</p>
   */
  grammarSlotTypeSetting?: GrammarSlotTypeSetting;
}

/**
 * @public
 * <p>Defines one of the values for a slot type.</p>
 */
export interface SampleValue {
  /**
   * @public
   * <p>The value that can be used for a slot type.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Each slot type can have a set of values. Each
 *             <code>SlotTypeValue</code> represents a value that the slot type can
 *          take.</p>
 */
export interface SlotTypeValue {
  /**
   * @public
   * <p>The value of the slot type entry.</p>
   */
  sampleValue?: SampleValue;

  /**
   * @public
   * <p>Additional values related to the slot type entry.</p>
   */
  synonyms?: SampleValue[];
}

/**
 * @public
 * <p>Provides a regular expression used to validate the value of a
 *          slot.</p>
 */
export interface SlotValueRegexFilter {
  /**
   * @public
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
 * @public
 * <p>Contains settings used by Amazon Lex to select a slot value.</p>
 */
export interface SlotValueSelectionSetting {
  /**
   * @public
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
   */
  resolutionStrategy: SlotValueResolutionStrategy | string | undefined;

  /**
   * @public
   * <p>A regular expression used to validate the value of a slot.</p>
   */
  regexFilter?: SlotValueRegexFilter;

  /**
   * @public
   * <p>Provides settings that enable advanced recognition settings for slot
   *          values. You can use this to enable using slot values as a custom
   *          vocabulary for recognizing user utterances.</p>
   */
  advancedRecognitionSetting?: AdvancedRecognitionSetting;
}

/**
 * @public
 */
export interface CreateSlotTypeRequest {
  /**
   * @public
   * <p>The name for the slot. A slot type name must be unique within the
   *          intent.</p>
   */
  slotTypeName: string | undefined;

  /**
   * @public
   * <p>A description of the slot type. Use the description to help identify
   *          the slot type in lists.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of <code>SlotTypeValue</code> objects that defines the values
   *          that the slot type can take. Each value can have a list of synonyms,
   *          additional values that help train the machine learning model about the
   *          values that it resolves for a slot.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * @public
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
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * @public
   * <p>The built-in slot type used as a parent of this slot type. When you
   *          define a parent slot type, the new slot type has the configuration of
   *          the parent slot type.</p>
   *          <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * @public
   * <p>The identifier of the bot associated with this slot type.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The identifier of the bot version associated with this slot
   *          type.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale that the slot type will be
   *          used in. The string must match one of the supported locales. All of the
   *          bots, intents, and slots used by the slot type must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>Sets the type of external information used to create the slot
   *          type.</p>
   */
  externalSourceSetting?: ExternalSourceSetting;

  /**
   * @public
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}

/**
 * @public
 */
export interface CreateSlotTypeResponse {
  /**
   * @public
   * <p>The unique identifier assigned to the slot type. Use this to
   *          identify the slot type in the <code>UpdateSlotType</code> and
   *             <code>DeleteSlotType</code> operations.</p>
   */
  slotTypeId?: string;

  /**
   * @public
   * <p>The name specified for the slot type.</p>
   */
  slotTypeName?: string;

  /**
   * @public
   * <p>The description specified for the slot type.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The list of values that the slot type can assume.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * @public
   * <p>The strategy that Amazon Lex uses to select a value from the list of
   *          possible values.</p>
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * @public
   * <p>The signature of the base slot type specified for the slot
   *          type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * @public
   * <p>The identifier for the bot associated with the slot type.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The version of the bot associated with the slot type.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The specified language and local specified for the slot type.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>A timestamp of the date and time that the slot type was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>The type of external information used to create the slot
   *          type.</p>
   */
  externalSourceSetting?: ExternalSourceSetting;

  /**
   * @public
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}

/**
 * @public
 * <p>Contains information about the bot alias used for the
 *  test set discrepancy report.</p>
 */
export interface TestSetDiscrepancyReportBotAliasTarget {
  /**
   * @public
   * <p>The unique identifier for the bot alias.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the bot associated with the bot alias.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the locale associated with the bot alias.</p>
   */
  localeId: string | undefined;
}

/**
 * @public
 * <p>Contains information about the resource used for the
 *  test set discrepancy report.</p>
 */
export interface TestSetDiscrepancyReportResourceTarget {
  /**
   * @public
   * <p>Contains information about the bot alias used as the resource for the
   *  test set discrepancy report.</p>
   */
  botAliasTarget?: TestSetDiscrepancyReportBotAliasTarget;
}

/**
 * @public
 */
export interface CreateTestSetDiscrepancyReportRequest {
  /**
   * @public
   * <p>The test set Id for the test set discrepancy report.</p>
   */
  testSetId: string | undefined;

  /**
   * @public
   * <p>The target bot for the test set discrepancy report.</p>
   */
  target: TestSetDiscrepancyReportResourceTarget | undefined;
}

/**
 * @public
 */
export interface CreateTestSetDiscrepancyReportResponse {
  /**
   * @public
   * <p>The unique identifier of the test set discrepancy report to describe.</p>
   */
  testSetDiscrepancyReportId?: string;

  /**
   * @public
   * <p>The creation date and time for the test set discrepancy report.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>The test set Id for the test set discrepancy report.</p>
   */
  testSetId?: string;

  /**
   * @public
   * <p>The target bot for the test set discrepancy report.</p>
   */
  target?: TestSetDiscrepancyReportResourceTarget;
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
   * @public
   * <p>An identifier for a unique import job. Use it when you call the
   *             <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartImport.html">StartImport</a> operation.</p>
   */
  importId?: string;

  /**
   * @public
   * <p>A pre-signed S3 write URL. Upload the zip archive file that contains
   *          the definition of your bot or bot locale.</p>
   */
  uploadUrl?: string;
}

/**
 * @public
 * <p>Provides the parameters required for importing a custom vocabulary.</p>
 */
export interface CustomVocabularyImportSpecification {
  /**
   * @public
   * <p>The identifier of the bot to import the custom vocabulary to.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot to import the custom vocabulary to.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the local to import the custom vocabulary to. The value must
   *             be <code>en_GB</code>.</p>
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
 * @public
 * <p>The object used for specifying the data range that the customer
 *             wants Amazon Lex to read through in the input transcripts.</p>
 */
export interface DateRangeFilter {
  /**
   * @public
   * <p>A timestamp indicating the start date for the date range
   *             filter.</p>
   */
  startDateTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp indicating the end date for the date range
   *             filter.</p>
   */
  endDateTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteBotRequest {
  /**
   * @public
   * <p>The identifier of the bot to delete. </p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>By default, Amazon Lex checks if any other resource, such as an alias or
   *          bot network, is using the bot version before it is deleted and throws a
   *          <code>ResourceInUseException</code> exception if the bot is
   *          being used by another resource. Set this parameter to <code>true</code>
   *          to skip this check and remove the bot even if it is being used by
   *          another resource.</p>
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * @public
 */
export interface DeleteBotResponse {
  /**
   * @public
   * <p>The unique identifier of the bot that Amazon Lex is deleting.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The current status of the bot. The status is <code>Deleting</code>
   *          while the bot and its associated resources are being deleted.</p>
   */
  botStatus?: BotStatus | string;
}

/**
 * @public
 */
export interface DeleteBotAliasRequest {
  /**
   * @public
   * <p>The unique identifier of the bot alias to delete.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the bot associated with the alias to
   *          delete.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>By default, Amazon Lex checks if any other resource, such as a bot network,
   *          is using the bot alias before it is deleted and throws a
   *          <code>ResourceInUseException</code> exception if the alias is
   *          being used by another resource. Set this parameter to <code>true</code>
   *          to skip this check and remove the alias even if it is being used by
   *          another resource.</p>
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * @public
 */
export interface DeleteBotAliasResponse {
  /**
   * @public
   * <p>The unique identifier of the bot alias to delete.</p>
   */
  botAliasId?: string;

  /**
   * @public
   * <p>The unique identifier of the bot that contains the alias to
   *          delete.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The current status of the alias. The status is <code>Deleting</code>
   *          while the alias is in the process of being deleted. Once the alias is
   *          deleted, it will no longer appear in the list of aliases returned by
   *          the <code>ListBotAliases</code> operation.</p>
   */
  botAliasStatus?: BotAliasStatus | string;
}

/**
 * @public
 */
export interface DeleteBotLocaleRequest {
  /**
   * @public
   * <p>The unique identifier of the bot that contains the locale.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot that contains the locale. </p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale that will be deleted. The
   *          string must match one of the supported locales. For more information,
   *          see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotLocaleResponse {
  /**
   * @public
   * <p>The identifier of the bot that contained the deleted locale.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The version of the bot that contained the deleted locale.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The language and locale of the deleted locale.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The status of deleting the bot locale. The locale first enters the
   *             <code>Deleting</code> status. Once the locale is deleted it no
   *          longer appears in the list of locales for the bot.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;
}

/**
 * @public
 */
export interface DeleteBotVersionRequest {
  /**
   * @public
   * <p>The identifier of the bot that contains the version.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot to delete.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>By default, Amazon Lex checks if any other resource, such as an alias or bot network,
   *          is using the bot version before it is deleted and throws a
   *          <code>ResourceInUseException</code> exception if the version is
   *          being used by another resource. Set this parameter to <code>true</code>
   *          to skip this check and remove the version even if it is being used by
   *          another resource.</p>
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * @public
 */
export interface DeleteBotVersionResponse {
  /**
   * @public
   * <p>The identifier of the bot that is being deleted.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The version of the bot that is being deleted.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The current status of the bot. </p>
   */
  botStatus?: BotStatus | string;
}

/**
 * @public
 */
export interface DeleteCustomVocabularyRequest {
  /**
   * @public
   * <p>The unique identifier of the bot to remove the custom
   *       vocabulary from.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot to remove the custom vocabulary
   *       from.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The locale identifier for the locale that contains the
   *       custom vocabulary to remove.</p>
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomVocabularyResponse {
  /**
   * @public
   * <p>The identifier of the bot that the custom vocabulary
   *       was removed from.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The version of the bot that the custom vocabulary
   *          was removed from.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The locale identifier for the locale that the
   *          custom vocabulary was removed from.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The status of removing the custom vocabulary.</p>
   */
  customVocabularyStatus?: CustomVocabularyStatus | string;
}

/**
 * @public
 */
export interface DeleteExportRequest {
  /**
   * @public
   * <p>The unique identifier of the export to delete.</p>
   */
  exportId: string | undefined;
}

/**
 * @public
 */
export interface DeleteExportResponse {
  /**
   * @public
   * <p>The unique identifier of the deleted export.</p>
   */
  exportId?: string;

  /**
   * @public
   * <p>The current status of the deletion. When the deletion is complete,
   *          the export will no longer be returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html">ListExports</a> operation and calls to the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">
   *             DescribeExport</a> operation with the export identifier will
   *          fail.</p>
   */
  exportStatus?: ExportStatus | string;
}

/**
 * @public
 */
export interface DeleteImportRequest {
  /**
   * @public
   * <p>The unique identifier of the import to delete.</p>
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
   * @public
   * <p>The unique identifier of the deleted import.</p>
   */
  importId?: string;

  /**
   * @public
   * <p>The current status of the deletion. When the deletion is complete,
   *          the import will no longer be returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html">ListImports</a> operation and calls to the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeImport.html">DescribeImport</a> operation with the import identifier will
   *          fail.</p>
   */
  importStatus?: ImportStatus | string;
}

/**
 * @public
 */
export interface DeleteIntentRequest {
  /**
   * @public
   * <p>The unique identifier of the intent to delete.</p>
   */
  intentId: string | undefined;

  /**
   * @public
   * <p>The identifier of the bot associated with the intent.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot associated with the intent.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale where the bot will be
   *          deleted. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that has the
   *          resource policy attached.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the revision to edit. If this ID doesn't match the
   *          current revision number, Amazon Lex returns an exception</p>
   *          <p>If you don't specify a revision ID, Amazon Lex will delete the current
   *          policy.</p>
   */
  expectedRevisionId?: string;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy was deleted from.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   */
  revisionId?: string;
}

/**
 * @public
 */
export interface DeleteResourcePolicyStatementRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The name of the statement (SID) to delete from the policy.</p>
   */
  statementId: string | undefined;

  /**
   * @public
   * <p>The identifier of the revision of the policy to delete the statement
   *          from. If this revision ID doesn't match the current revision ID, Amazon Lex
   *          throws an exception.</p>
   *          <p>If you don't specify a revision, Amazon Lex removes the current contents
   *          of the statement. </p>
   */
  expectedRevisionId?: string;
}

/**
 * @public
 */
export interface DeleteResourcePolicyStatementResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy statement was removed from.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   */
  revisionId?: string;
}

/**
 * @public
 */
export interface DeleteSlotRequest {
  /**
   * @public
   * <p>The identifier of the slot to delete. </p>
   */
  slotId: string | undefined;

  /**
   * @public
   * <p>The identifier of the bot associated with the slot to delete.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot associated with the slot to delete.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale that the slot will be
   *          deleted from. The string must match one of the supported locales. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the intent associated with the slot.</p>
   */
  intentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlotTypeRequest {
  /**
   * @public
   * <p>The identifier of the slot type to delete.</p>
   */
  slotTypeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the bot associated with the slot type.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot associated with the slot type.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale that the slot type will be
   *          deleted from. The string must match one of the supported locales. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>By default, the <code>DeleteSlotType</code> operations throws a
   *             <code>ResourceInUseException</code> exception if you try to delete a
   *          slot type used by a slot. Set the <code>skipResourceInUseCheck</code>
   *          parameter to <code>true</code> to skip this check and remove the slot
   *          type even if a slot uses it.</p>
   */
  skipResourceInUseCheck?: boolean;
}

/**
 * @public
 */
export interface DeleteTestSetRequest {
  /**
   * @public
   * <p>The test set Id of the test set to be deleted.</p>
   */
  testSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUtterancesRequest {
  /**
   * @public
   * <p>The unique identifier of the bot that contains the
   *          utterances.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale where the utterances were
   *          collected. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported
   *          languages</a>.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The unique identifier of the session with the user. The ID is
   *          returned in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeText.html">RecognizeText</a> and <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeUtterance.html">RecognizeUtterance</a> operations.</p>
   */
  sessionId?: string;
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
   * @public
   * <p>The unique identifier of the bot to describe.</p>
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotResponse {
  /**
   * @public
   * <p>The unique identifier of the bot.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The name of the bot.</p>
   */
  botName?: string;

  /**
   * @public
   * <p>The description of the bot. </p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *          access the bot.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>Settings for managing data privacy of the bot and its conversations
   *          with users.</p>
   */
  dataPrivacy?: DataPrivacy;

  /**
   * @public
   * <p>The maximum time in seconds that Amazon Lex retains the data gathered in
   *          a conversation.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * @public
   * <p>The current status of the bot. When the status is
   *             <code>Available</code> the bot is ready to be used in conversations
   *          with users.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * @public
   * <p>A timestamp of the date and time that the bot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>A timestamp of the date and time that the bot was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>The type of the bot that was described.</p>
   */
  botType?: BotType | string;

  /**
   * @public
   * <p>The list of bots in the network that was described.</p>
   */
  botMembers?: BotMember[];

  /**
   * @public
   * <p>If the <code>botStatus</code> is <code>Failed</code>, this contains
   *          a list of reasons that the bot couldn't be built.</p>
   */
  failureReasons?: string[];
}

/**
 * @public
 */
export interface DescribeBotAliasRequest {
  /**
   * @public
   * <p>The identifier of the bot alias to describe.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The identifier of the bot associated with the bot alias to
   *          describe.</p>
   */
  botId: string | undefined;
}

/**
 * @public
 * <p>A network of bots.</p>
 */
export interface ParentBotNetwork {
  /**
   * @public
   * <p>The identifier of the network of bots assigned by Amazon Lex.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the network of bots.</p>
   */
  botVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotAliasResponse {
  /**
   * @public
   * <p>The identifier of the bot alias.</p>
   */
  botAliasId?: string;

  /**
   * @public
   * <p>The name of the bot alias.</p>
   */
  botAliasName?: string;

  /**
   * @public
   * <p>The description of the bot alias.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The version of the bot associated with the bot alias.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The locale settings that are unique to the alias.</p>
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

  /**
   * @public
   * <p>Specifics of how Amazon Lex logs text and audio conversations with the
   *          bot associated with the alias.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * @public
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * @public
   * <p>A list of events that affect a bot alias. For example, an event is
   *          recorded when the version that the alias points to changes.</p>
   */
  botAliasHistoryEvents?: BotAliasHistoryEvent[];

  /**
   * @public
   * <p>The current status of the alias. When the alias is
   *             <code>Available</code>, the alias is ready for use with your
   *          bot.</p>
   */
  botAliasStatus?: BotAliasStatus | string;

  /**
   * @public
   * <p>The identifier of the bot associated with the bot alias.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>A timestamp of the date and time that the alias was created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>A timestamp of the date and time that the alias was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>A list of the networks to which the bot alias you described belongs.</p>
   */
  parentBotNetworks?: ParentBotNetwork[];
}

/**
 * @public
 */
export interface DescribeBotLocaleRequest {
  /**
   * @public
   * <p>The identifier of the bot associated with the locale.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot associated with the
   *          locale.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the locale to describe. The string must
   *          match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>. </p>
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotLocaleResponse {
  /**
   * @public
   * <p>The identifier of the bot associated with the locale.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The version of the bot associated with the
   *          locale.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The unique identifier of the described locale.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The name of the locale.</p>
   */
  localeName?: string;

  /**
   * @public
   * <p>The description of the locale.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The confidence threshold where Amazon Lex inserts the
   *             <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> intents in the list of
   *          possible intents for an utterance.</p>
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * @public
   * <p>The Amazon Polly voice Amazon Lex uses for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;

  /**
   * @public
   * <p>The number of intents defined for the locale.</p>
   */
  intentsCount?: number;

  /**
   * @public
   * <p>The number of slot types defined for the locale.</p>
   */
  slotTypesCount?: number;

  /**
   * @public
   * <p>The status of the bot. If the status is <code>Failed</code>, the
   *          reasons for the failure are listed in the <code>failureReasons</code>
   *          field.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * @public
   * <p>if <code>botLocaleStatus</code> is <code>Failed</code>, Amazon Lex
   *          explains why it failed to build the bot.</p>
   */
  failureReasons?: string[];

  /**
   * @public
   * <p>The date and time that the locale was created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the locale was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the locale was last submitted for
   *          building.</p>
   */
  lastBuildSubmittedDateTime?: Date;

  /**
   * @public
   * <p>History of changes, such as when a locale is used in an alias, that
   *          have taken place for the locale.</p>
   */
  botLocaleHistoryEvents?: BotLocaleHistoryEvent[];

  /**
   * @public
   * <p>Recommended actions to take to resolve an error in the
   *             <code>failureReasons</code> field.</p>
   */
  recommendedActions?: string[];
}

/**
 * @public
 */
export interface DescribeBotRecommendationRequest {
  /**
   * @public
   * <p>The unique identifier of the bot associated with the bot
   *          recommendation.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot associated with the bot
   *          recommendation.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale of the bot recommendation
   *          to describe. The string must match one of the supported locales. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the bot recommendation to describe.</p>
   */
  botRecommendationId: string | undefined;
}

/**
 * @public
 * <p>The object representing the passwords that were used to encrypt the
 *             data related to the bot recommendation, as well as the KMS key ARN used
 *             to encrypt the associated metadata.</p>
 */
export interface EncryptionSetting {
  /**
   * @public
   * <p>The KMS key ARN used to encrypt the metadata associated with the bot
   *             recommendation.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
   * <p>The password used to encrypt the recommended bot recommendation
   *             file.</p>
   */
  botLocaleExportPassword?: string;

  /**
   * @public
   * <p>The password used to encrypt the associated transcript file.</p>
   */
  associatedTranscriptsPassword?: string;
}

/**
 * @public
 * <p>The object that contains a path format that will be applied when
 *             Amazon Lex reads the transcript file in the bucket you provide. Specify this
 *             object if you only want Lex to read a subset of files in your Amazon S3
 *             bucket.</p>
 */
export interface PathFormat {
  /**
   * @public
   * <p>A list of Amazon S3 prefixes that points to sub-folders in the Amazon S3
   *             bucket. Specify this list if you only want Lex to read the files under
   *             this set of sub-folders.</p>
   */
  objectPrefixes?: string[];
}

/**
 * @public
 * <p>The object that contains transcript filter details that are
 *             associated with a bot recommendation.</p>
 */
export interface LexTranscriptFilter {
  /**
   * @public
   * <p>The object that contains a date range filter that will be applied to
   *             the transcript. Specify this object if you want Amazon Lex to only read the
   *             files that are within the date range.</p>
   */
  dateRangeFilter?: DateRangeFilter;
}

/**
 * @public
 * <p>The object representing the filter that Amazon Lex will use to select the
 *             appropriate transcript.</p>
 */
export interface TranscriptFilter {
  /**
   * @public
   * <p>The object representing the filter that Amazon Lex will use to select the
   *             appropriate transcript when the transcript format is the Amazon Lex
   *             format.</p>
   */
  lexTranscriptFilter?: LexTranscriptFilter;
}

/**
 * @public
 * @enum
 */
export const TranscriptFormat = {
  Lex: "Lex",
} as const;

/**
 * @public
 */
export type TranscriptFormat = (typeof TranscriptFormat)[keyof typeof TranscriptFormat];

/**
 * @public
 * <p>The object representing the Amazon S3 bucket containing the transcript,
 *             as well as the associated metadata.</p>
 */
export interface S3BucketTranscriptSource {
  /**
   * @public
   * <p>The name of the bucket containing the transcript and the associated
   *             metadata.</p>
   */
  s3BucketName: string | undefined;

  /**
   * @public
   * <p>The object that contains a path format that will be applied when
   *             Amazon Lex reads the transcript file in the bucket you provide. Specify this
   *             object if you only want Lex to read a subset of files in your Amazon S3
   *             bucket.</p>
   */
  pathFormat?: PathFormat;

  /**
   * @public
   * <p>The format of the transcript content. Currently, Genie only supports
   *             the Amazon Lex transcript format.</p>
   */
  transcriptFormat: TranscriptFormat | string | undefined;

  /**
   * @public
   * <p>The object that contains the filter which will be applied when Amazon Lex
   *             reads through the Amazon S3 bucket. Specify this object if you want Amazon Lex to
   *             read only a subset of the Amazon S3 bucket based on the filter you
   *             provide.</p>
   */
  transcriptFilter?: TranscriptFilter;

  /**
   * @public
   * <p>The ARN of the KMS key that customer use to encrypt their Amazon S3
   *             bucket. Only use this field if your bucket is encrypted using a
   *             customer managed KMS key.</p>
   */
  kmsKeyArn?: string;
}

/**
 * @public
 * <p>Indicates the setting of the location where the transcript is
 *             stored.</p>
 */
export interface TranscriptSourceSetting {
  /**
   * @public
   * <p>Indicates the setting of the Amazon S3 bucket where the transcript is
   *             stored.</p>
   */
  s3BucketTranscriptSource?: S3BucketTranscriptSource;
}

/**
 * @public
 */
export interface DescribeBotRecommendationResponse {
  /**
   * @public
   * <p>The identifier of the bot associated with the bot
   *          recommendation.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The version of the bot associated with the bot
   *          recommendation.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The identifier of the language and locale of the bot recommendation
   *          to describe.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The status of the bot recommendation. If the status is Failed, then
   *          the reasons for the failure are listed in the failureReasons field.
   *       </p>
   */
  botRecommendationStatus?: BotRecommendationStatus | string;

  /**
   * @public
   * <p>The identifier of the bot recommendation being described.</p>
   */
  botRecommendationId?: string;

  /**
   * @public
   * <p>If botRecommendationStatus is Failed, Amazon Lex explains why.</p>
   */
  failureReasons?: string[];

  /**
   * @public
   * <p>The date and time that the bot recommendation was created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the bot recommendation was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>The object representing the Amazon S3 bucket containing the transcript,
   *          as well as the associated metadata.</p>
   */
  transcriptSourceSetting?: TranscriptSourceSetting;

  /**
   * @public
   * <p>The object representing the passwords that were used to encrypt the
   *          data related to the bot recommendation results, as well as the KMS key
   *          ARN used to encrypt the associated metadata.</p>
   */
  encryptionSetting?: EncryptionSetting;

  /**
   * @public
   * <p>The object representing the URL of the bot definition, the URL of
   *          the associated transcript and a statistical summary of the bot
   *          recommendation results.</p>
   */
  botRecommendationResults?: BotRecommendationResults;
}

/**
 * @public
 */
export interface DescribeBotVersionRequest {
  /**
   * @public
   * <p>The identifier of the bot containing the version to return metadata
   *          for.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot to return metadata for.</p>
   */
  botVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotVersionResponse {
  /**
   * @public
   * <p>The identifier of the bot that contains the version.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The name of the bot that contains the version.</p>
   */
  botName?: string;

  /**
   * @public
   * <p>The version of the bot that was described.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The description specified for the bot.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *          access the bot version.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>Data privacy settings for the bot version.</p>
   */
  dataPrivacy?: DataPrivacy;

  /**
   * @public
   * <p>The number of seconds that a session with the bot remains active
   *          before it is discarded by Amazon Lex.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * @public
   * <p>The current status of the bot. When the status is
   *             <code>Available</code>, the bot version is ready for use.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * @public
   * <p>If the <code>botStatus</code> is <code>Failed</code>, this contains
   *          a list of reasons that the version couldn't be built.</p>
   */
  failureReasons?: string[];

  /**
   * @public
   * <p>A timestamp of the date and time that the bot version was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>A list of the networks to which the bot version you described belongs.</p>
   */
  parentBotNetworks?: ParentBotNetwork[];

  /**
   * @public
   * <p>The type of the bot in the version that was described.</p>
   */
  botType?: BotType | string;

  /**
   * @public
   * <p>The members of bot network in the version that was described.</p>
   */
  botMembers?: BotMember[];
}

/**
 * @public
 */
export interface DescribeCustomVocabularyMetadataRequest {
  /**
   * @public
   * <p>The unique identifier of the bot that contains the custom vocabulary.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The bot version of the bot to return metadata for.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The locale to return the custom vocabulary information for.
   *       The locale must be <code>en_GB</code>.</p>
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomVocabularyMetadataResponse {
  /**
   * @public
   * <p>The identifier of the bot that contains the custom vocabulary.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The version of the bot that contains the custom vocabulary to describe.</p>
   */
  botVersion?: string;

  /**
   * @public
   * <p>The locale that contains the custom vocabulary to describe.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The status of the custom vocabulary. If the status is
   *       <code>Ready</code> the custom vocabulary is ready to use.</p>
   */
  customVocabularyStatus?: CustomVocabularyStatus | string;

  /**
   * @public
   * <p>The date and time that the custom vocabulary was created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the custom vocabulary was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface DescribeExportRequest {
  /**
   * @public
   * <p>The unique identifier of the export to describe.</p>
   */
  exportId: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportResponse {
  /**
   * @public
   * <p>The unique identifier of the described export.</p>
   */
  exportId?: string;

  /**
   * @public
   * <p>The bot, bot ID, and optional locale ID of the exported bot or bot
   *          locale.</p>
   */
  resourceSpecification?: ExportResourceSpecification;

  /**
   * @public
   * <p>The file format used in the files that describe the resource.
   *       </p>
   */
  fileFormat?: ImportExportFileFormat | string;

  /**
   * @public
   * <p>The status of the export. When the status is <code>Complete</code>
   *          the export archive file is available for download.</p>
   */
  exportStatus?: ExportStatus | string;

  /**
   * @public
   * <p>If the <code>exportStatus</code> is failed, contains one or more
   *          reasons why the export could not be completed.</p>
   */
  failureReasons?: string[];

  /**
   * @public
   * <p>A pre-signed S3 URL that points to the bot or bot locale archive.
   *          The URL is only available for 5 minutes after calling the
   *             <code>DescribeExport</code> operation.</p>
   */
  downloadUrl?: string;

  /**
   * @public
   * <p>The date and time that the export was created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>The last date and time that the export was updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface DescribeImportRequest {
  /**
   * @public
   * <p>The unique identifier of the import to describe.</p>
   */
  importId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MergeStrategy = {
  Append: "Append",
  FailOnConflict: "FailOnConflict",
  Overwrite: "Overwrite",
} as const;

/**
 * @public
 */
export type MergeStrategy = (typeof MergeStrategy)[keyof typeof MergeStrategy];

/**
 * @public
 * <p>Contains information about the Amazon S3 location from which the test set is imported.</p>
 */
export interface TestSetImportInputLocation {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket.</p>
   */
  s3BucketName: string | undefined;

  /**
   * @public
   * <p>The path inside the Amazon S3 bucket pointing to the test-set CSV file.</p>
   */
  s3Path: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TestSetModality = {
  Audio: "Audio",
  Text: "Text",
} as const;

/**
 * @public
 */
export type TestSetModality = (typeof TestSetModality)[keyof typeof TestSetModality];

/**
 * @public
 * <p>Contains information about the location in which the test set is stored.</p>
 */
export interface TestSetStorageLocation {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket in which the test set is stored.</p>
   */
  s3BucketName: string | undefined;

  /**
   * @public
   * <p>The path inside the Amazon S3 bucket where the test set is stored.</p>
   */
  s3Path: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service
   *  (KMS) key for encrypting the test set.</p>
   */
  kmsKeyArn?: string;
}

/**
 * @public
 * <p>Contains information about the test set that is imported.</p>
 */
export interface TestSetImportResourceSpecification {
  /**
   * @public
   * <p>The name of the test set.</p>
   */
  testSetName: string | undefined;

  /**
   * @public
   * <p>The description of the test set.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that has
   *  permission to access the test set.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Contains information about the location that Amazon Lex uses to store the test-set.</p>
   */
  storageLocation: TestSetStorageLocation | undefined;

  /**
   * @public
   * <p>Contains information about the input location from where test-set should be imported.</p>
   */
  importInputLocation: TestSetImportInputLocation | undefined;

  /**
   * @public
   * <p>Specifies whether the test-set being imported contains written or spoken data.</p>
   */
  modality: TestSetModality | string | undefined;

  /**
   * @public
   * <p>A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't use the <code>UpdateTestSet</code> operation to update tags. To update tags, use the <code>TagResource</code> operation.</p>
   */
  testSetTags?: Record<string, string>;
}

/**
 * @public
 * <p>Provides information about the bot or bot locale that you want to
 *          import. You can specify the <code>botImportSpecification</code> or the
 *             <code>botLocaleImportSpecification</code>, but not both.</p>
 */
export interface ImportResourceSpecification {
  /**
   * @public
   * <p>Parameters for importing a bot.</p>
   */
  botImportSpecification?: BotImportSpecification;

  /**
   * @public
   * <p>Parameters for importing a bot locale.</p>
   */
  botLocaleImportSpecification?: BotLocaleImportSpecification;

  /**
   * @public
   * <p>Provides the parameters required for importing a custom vocabulary.</p>
   */
  customVocabularyImportSpecification?: CustomVocabularyImportSpecification;

  /**
   * @public
   * <p>Specifications for the test set that is imported.</p>
   */
  testSetImportResourceSpecification?: TestSetImportResourceSpecification;
}

/**
 * @public
 */
export interface DescribeImportResponse {
  /**
   * @public
   * <p>The unique identifier of the described import.</p>
   */
  importId?: string;

  /**
   * @public
   * <p>The specifications of the imported bot, bot locale, or custom
   *          vocabulary.</p>
   */
  resourceSpecification?: ImportResourceSpecification;

  /**
   * @public
   * <p>The unique identifier that Amazon Lex assigned to the resource created by
   *          the import.</p>
   */
  importedResourceId?: string;

  /**
   * @public
   * <p>The name of the imported resource.</p>
   */
  importedResourceName?: string;

  /**
   * @public
   * <p>The strategy used when there was a name conflict between the
   *          imported resource and an existing resource. When the merge strategy is
   *             <code>FailOnConflict</code> existing resources are not overwritten
   *          and the import fails.</p>
   */
  mergeStrategy?: MergeStrategy | string;

  /**
   * @public
   * <p>The status of the import process. When the status is
   *             <code>Completed</code> the resource is imported and ready for
   *          use.</p>
   */
  importStatus?: ImportStatus | string;

  /**
   * @public
   * <p>If the <code>importStatus</code> field is <code>Failed</code>, this
   *          provides one or more reasons for the failure.</p>
   */
  failureReasons?: string[];

  /**
   * @public
   * <p>The date and time that the import was created.</p>
   */
  creationDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the import was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface DescribeIntentRequest {
  /**
   * @public
   * <p>The identifier of the intent to describe.</p>
   */
  intentId: string | undefined;

  /**
   * @public
   * <p>The identifier of the bot associated with the intent.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot associated with the intent.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale of the intent to describe.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

/**
 * @public
 * <p>Sets the priority that Amazon Lex should use when eliciting slot values
 *          from a user.</p>
 */
export interface SlotPriority {
  /**
   * @public
   * <p>The priority that Amazon Lex should apply to the slot.</p>
   */
  priority: number | undefined;

  /**
   * @public
   * <p>The unique identifier of the slot.</p>
   */
  slotId: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The JSON structure that contains the resource policy. For more
   *          information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy
   *             reference </a>.</p>
   */
  policy?: string;

  /**
   * @public
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   */
  revisionId?: string;
}

/**
 * @public
 */
export interface DescribeSlotRequest {
  /**
   * @public
   * <p>The unique identifier for the slot.</p>
   */
  slotId: string | undefined;

  /**
   * @public
   * <p>The identifier of the bot associated with the slot.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot associated with the slot.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale of the slot to describe.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the intent that contains the slot.</p>
   */
  intentId: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlotTypeRequest {
  /**
   * @public
   * <p>The identifier of the slot type.</p>
   */
  slotTypeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the bot associated with the slot type.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The version of the bot associated with the slot type.</p>
   */
  botVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the language and locale of the slot type to
   *          describe. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

/**
 * @internal
 */
export const CreateExportRequestFilterSensitiveLog = (obj: CreateExportRequest): any => ({
  ...obj,
  ...(obj.filePassword && { filePassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EncryptionSettingFilterSensitiveLog = (obj: EncryptionSetting): any => ({
  ...obj,
  ...(obj.botLocaleExportPassword && { botLocaleExportPassword: SENSITIVE_STRING }),
  ...(obj.associatedTranscriptsPassword && { associatedTranscriptsPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeBotRecommendationResponseFilterSensitiveLog = (obj: DescribeBotRecommendationResponse): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});
