// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchCreateTopicReviewedAnswerResponse } from "../models/models_2";
import type { BatchCreateTopicReviewedAnswerRequest } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { BatchCreateTopicReviewedAnswer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateTopicReviewedAnswerCommand}.
 */
export interface BatchCreateTopicReviewedAnswerCommandInput extends BatchCreateTopicReviewedAnswerRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateTopicReviewedAnswerCommand}.
 */
export interface BatchCreateTopicReviewedAnswerCommandOutput
  extends BatchCreateTopicReviewedAnswerResponse,
    __MetadataBearer {}

/**
 * <p>Creates new reviewed answers for a Q Topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, BatchCreateTopicReviewedAnswerCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, BatchCreateTopicReviewedAnswerCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // BatchCreateTopicReviewedAnswerRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   Answers: [ // CreateTopicReviewedAnswers // required
 *     { // CreateTopicReviewedAnswer
 *       AnswerId: "STRING_VALUE", // required
 *       DatasetArn: "STRING_VALUE", // required
 *       Question: "STRING_VALUE", // required
 *       Mir: { // TopicIR
 *         Metrics: [ // TopicIRMetricList
 *           { // TopicIRMetric
 *             MetricId: { // Identifier
 *               Identity: "STRING_VALUE", // required
 *             },
 *             Function: { // AggFunction
 *               Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *               AggregationFunctionParameters: { // AggFunctionParamMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               Period: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *               PeriodField: "STRING_VALUE",
 *             },
 *             Operands: [ // OperandList
 *               {
 *                 Identity: "STRING_VALUE", // required
 *               },
 *             ],
 *             ComparisonMethod: { // TopicIRComparisonMethod
 *               Type: "DIFF" || "PERC_DIFF" || "DIFF_AS_PERC" || "POP_CURRENT_DIFF_AS_PERC" || "POP_CURRENT_DIFF" || "POP_OVERTIME_DIFF_AS_PERC" || "POP_OVERTIME_DIFF" || "PERCENT_OF_TOTAL" || "RUNNING_SUM" || "MOVING_AVERAGE",
 *               Period: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *               WindowSize: Number("int"),
 *             },
 *             Expression: "STRING_VALUE",
 *             CalculatedFieldReferences: [ // CalculatedFieldReferenceList
 *               {
 *                 Identity: "STRING_VALUE", // required
 *               },
 *             ],
 *             DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 *             DisplayFormatOptions: { // DisplayFormatOptions
 *               UseBlankCellFormat: true || false,
 *               BlankCellFormat: "STRING_VALUE",
 *               DateFormat: "STRING_VALUE",
 *               DecimalSeparator: "COMMA" || "DOT",
 *               GroupingSeparator: "STRING_VALUE",
 *               UseGrouping: true || false,
 *               FractionDigits: Number("int"),
 *               Prefix: "STRING_VALUE",
 *               Suffix: "STRING_VALUE",
 *               UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS" || "LAKHS" || "CRORES",
 *               NegativeFormat: { // NegativeFormat
 *                 Prefix: "STRING_VALUE",
 *                 Suffix: "STRING_VALUE",
 *               },
 *               CurrencySymbol: "STRING_VALUE",
 *             },
 *             NamedEntity: { // NamedEntityRef
 *               NamedEntityName: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         GroupByList: [ // TopicIRGroupByList
 *           { // TopicIRGroupBy
 *             FieldName: {
 *               Identity: "STRING_VALUE", // required
 *             },
 *             TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *             Sort: { // TopicSortClause
 *               Operand: {
 *                 Identity: "STRING_VALUE", // required
 *               },
 *               SortDirection: "ASCENDING" || "DESCENDING",
 *             },
 *             DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 *             DisplayFormatOptions: {
 *               UseBlankCellFormat: true || false,
 *               BlankCellFormat: "STRING_VALUE",
 *               DateFormat: "STRING_VALUE",
 *               DecimalSeparator: "COMMA" || "DOT",
 *               GroupingSeparator: "STRING_VALUE",
 *               UseGrouping: true || false,
 *               FractionDigits: Number("int"),
 *               Prefix: "STRING_VALUE",
 *               Suffix: "STRING_VALUE",
 *               UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS" || "LAKHS" || "CRORES",
 *               NegativeFormat: {
 *                 Prefix: "STRING_VALUE",
 *                 Suffix: "STRING_VALUE",
 *               },
 *               CurrencySymbol: "STRING_VALUE",
 *             },
 *             NamedEntity: {
 *               NamedEntityName: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         Filters: [ // TopicIRFilterList
 *           [ // TopicIRFilterEntry
 *             { // TopicIRFilterOption
 *               FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 *               FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 *               OperandField: "<Identifier>",
 *               Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 *               Constant: { // TopicConstantValue
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 Value: "STRING_VALUE",
 *                 Minimum: "STRING_VALUE",
 *                 Maximum: "STRING_VALUE",
 *                 ValueList: [ // CollectiveConstantEntryList
 *                   { // CollectiveConstantEntry
 *                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                     Value: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *               Inverse: true || false,
 *               NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 *               Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *               AggregationFunctionParameters: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               AggregationPartitionBy: [ // AggregationPartitionByList
 *                 { // AggregationPartitionBy
 *                   FieldName: "STRING_VALUE",
 *                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                 },
 *               ],
 *               Range: {
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 Value: "STRING_VALUE",
 *                 Minimum: "STRING_VALUE",
 *                 Maximum: "STRING_VALUE",
 *                 ValueList: [
 *                   {
 *                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                     Value: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *               Inclusive: true || false,
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *               LastNextOffset: {
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 Value: "STRING_VALUE",
 *                 Minimum: "STRING_VALUE",
 *                 Maximum: "STRING_VALUE",
 *                 ValueList: [
 *                   {
 *                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                     Value: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *               AggMetrics: [ // FilterAggMetricsList
 *                 { // FilterAggMetrics
 *                   MetricOperand: "<Identifier>",
 *                   Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *                   SortDirection: "ASCENDING" || "DESCENDING",
 *                 },
 *               ],
 *               TopBottomLimit: {
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 Value: "STRING_VALUE",
 *                 Minimum: "STRING_VALUE",
 *                 Maximum: "STRING_VALUE",
 *                 ValueList: [
 *                   {
 *                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                     Value: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *               SortDirection: "ASCENDING" || "DESCENDING",
 *               Anchor: { // Anchor
 *                 AnchorType: "TODAY",
 *                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                 Offset: Number("int"),
 *               },
 *             },
 *           ],
 *         ],
 *         Sort: {
 *           Operand: "<Identifier>",
 *           SortDirection: "ASCENDING" || "DESCENDING",
 *         },
 *         ContributionAnalysis: { // TopicIRContributionAnalysis
 *           Factors: [ // ContributionAnalysisFactorsList
 *             { // ContributionAnalysisFactor
 *               FieldName: "STRING_VALUE",
 *             },
 *           ],
 *           TimeRanges: { // ContributionAnalysisTimeRanges
 *             StartRange: {
 *               FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 *               FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 *               OperandField: "<Identifier>",
 *               Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 *               Constant: {
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 Value: "STRING_VALUE",
 *                 Minimum: "STRING_VALUE",
 *                 Maximum: "STRING_VALUE",
 *                 ValueList: [
 *                   {
 *                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                     Value: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *               Inverse: true || false,
 *               NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 *               Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *               AggregationFunctionParameters: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               AggregationPartitionBy: [
 *                 {
 *                   FieldName: "STRING_VALUE",
 *                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                 },
 *               ],
 *               Range: "<TopicConstantValue>",
 *               Inclusive: true || false,
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *               LastNextOffset: "<TopicConstantValue>",
 *               AggMetrics: [
 *                 {
 *                   MetricOperand: "<Identifier>",
 *                   Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *                   SortDirection: "ASCENDING" || "DESCENDING",
 *                 },
 *               ],
 *               TopBottomLimit: "<TopicConstantValue>",
 *               SortDirection: "ASCENDING" || "DESCENDING",
 *               Anchor: {
 *                 AnchorType: "TODAY",
 *                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                 Offset: Number("int"),
 *               },
 *             },
 *             EndRange: {
 *               FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 *               FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 *               OperandField: "<Identifier>",
 *               Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 *               Constant: "<TopicConstantValue>",
 *               Inverse: true || false,
 *               NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 *               Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *               AggregationFunctionParameters: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               AggregationPartitionBy: [
 *                 {
 *                   FieldName: "STRING_VALUE",
 *                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                 },
 *               ],
 *               Range: "<TopicConstantValue>",
 *               Inclusive: true || false,
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *               LastNextOffset: "<TopicConstantValue>",
 *               AggMetrics: [
 *                 {
 *                   MetricOperand: "<Identifier>",
 *                   Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *                   SortDirection: "ASCENDING" || "DESCENDING",
 *                 },
 *               ],
 *               TopBottomLimit: "<TopicConstantValue>",
 *               SortDirection: "ASCENDING" || "DESCENDING",
 *               Anchor: {
 *                 AnchorType: "TODAY",
 *                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                 Offset: Number("int"),
 *               },
 *             },
 *           },
 *           Direction: "INCREASE" || "DECREASE" || "NEUTRAL",
 *           SortType: "ABSOLUTE_DIFFERENCE" || "CONTRIBUTION_PERCENTAGE" || "DEVIATION_FROM_EXPECTED" || "PERCENTAGE_DIFFERENCE",
 *         },
 *         Visual: { // VisualOptions
 *           type: "STRING_VALUE",
 *         },
 *       },
 *       PrimaryVisual: { // TopicVisual
 *         VisualId: "STRING_VALUE",
 *         Role: "PRIMARY" || "COMPLIMENTARY" || "MULTI_INTENT" || "FALLBACK" || "FRAGMENT",
 *         Ir: {
 *           Metrics: [
 *             {
 *               MetricId: "<Identifier>",
 *               Function: {
 *                 Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *                 AggregationFunctionParameters: {
 *                   "<keys>": "STRING_VALUE",
 *                 },
 *                 Period: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *                 PeriodField: "STRING_VALUE",
 *               },
 *               Operands: [
 *                 "<Identifier>",
 *               ],
 *               ComparisonMethod: {
 *                 Type: "DIFF" || "PERC_DIFF" || "DIFF_AS_PERC" || "POP_CURRENT_DIFF_AS_PERC" || "POP_CURRENT_DIFF" || "POP_OVERTIME_DIFF_AS_PERC" || "POP_OVERTIME_DIFF" || "PERCENT_OF_TOTAL" || "RUNNING_SUM" || "MOVING_AVERAGE",
 *                 Period: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *                 WindowSize: Number("int"),
 *               },
 *               Expression: "STRING_VALUE",
 *               CalculatedFieldReferences: [
 *                 "<Identifier>",
 *               ],
 *               DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 *               DisplayFormatOptions: {
 *                 UseBlankCellFormat: true || false,
 *                 BlankCellFormat: "STRING_VALUE",
 *                 DateFormat: "STRING_VALUE",
 *                 DecimalSeparator: "COMMA" || "DOT",
 *                 GroupingSeparator: "STRING_VALUE",
 *                 UseGrouping: true || false,
 *                 FractionDigits: Number("int"),
 *                 Prefix: "STRING_VALUE",
 *                 Suffix: "STRING_VALUE",
 *                 UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS" || "LAKHS" || "CRORES",
 *                 NegativeFormat: {
 *                   Prefix: "STRING_VALUE",
 *                   Suffix: "STRING_VALUE",
 *                 },
 *                 CurrencySymbol: "STRING_VALUE",
 *               },
 *               NamedEntity: {
 *                 NamedEntityName: "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           GroupByList: [
 *             {
 *               FieldName: "<Identifier>",
 *               TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *               Sort: "<TopicSortClause>",
 *               DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 *               DisplayFormatOptions: {
 *                 UseBlankCellFormat: true || false,
 *                 BlankCellFormat: "STRING_VALUE",
 *                 DateFormat: "STRING_VALUE",
 *                 DecimalSeparator: "COMMA" || "DOT",
 *                 GroupingSeparator: "STRING_VALUE",
 *                 UseGrouping: true || false,
 *                 FractionDigits: Number("int"),
 *                 Prefix: "STRING_VALUE",
 *                 Suffix: "STRING_VALUE",
 *                 UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS" || "LAKHS" || "CRORES",
 *                 NegativeFormat: {
 *                   Prefix: "STRING_VALUE",
 *                   Suffix: "STRING_VALUE",
 *                 },
 *                 CurrencySymbol: "STRING_VALUE",
 *               },
 *               NamedEntity: {
 *                 NamedEntityName: "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           Filters: [
 *             [
 *               {
 *                 FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 *                 FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 *                 OperandField: "<Identifier>",
 *                 Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 *                 Constant: "<TopicConstantValue>",
 *                 Inverse: true || false,
 *                 NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 *                 Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *                 AggregationFunctionParameters: "<AggFunctionParamMap>",
 *                 AggregationPartitionBy: [
 *                   {
 *                     FieldName: "STRING_VALUE",
 *                     TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                   },
 *                 ],
 *                 Range: "<TopicConstantValue>",
 *                 Inclusive: true || false,
 *                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                 LastNextOffset: "<TopicConstantValue>",
 *                 AggMetrics: [
 *                   {
 *                     MetricOperand: "<Identifier>",
 *                     Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *                     SortDirection: "ASCENDING" || "DESCENDING",
 *                   },
 *                 ],
 *                 TopBottomLimit: "<TopicConstantValue>",
 *                 SortDirection: "ASCENDING" || "DESCENDING",
 *                 Anchor: {
 *                   AnchorType: "TODAY",
 *                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                   Offset: Number("int"),
 *                 },
 *               },
 *             ],
 *           ],
 *           Sort: "<TopicSortClause>",
 *           ContributionAnalysis: {
 *             Factors: [
 *               {
 *                 FieldName: "STRING_VALUE",
 *               },
 *             ],
 *             TimeRanges: {
 *               StartRange: {
 *                 FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 *                 FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 *                 OperandField: "<Identifier>",
 *                 Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 *                 Constant: "<TopicConstantValue>",
 *                 Inverse: true || false,
 *                 NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 *                 Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *                 AggregationFunctionParameters: "<AggFunctionParamMap>",
 *                 AggregationPartitionBy: [
 *                   {
 *                     FieldName: "STRING_VALUE",
 *                     TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                   },
 *                 ],
 *                 Range: "<TopicConstantValue>",
 *                 Inclusive: true || false,
 *                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                 LastNextOffset: "<TopicConstantValue>",
 *                 AggMetrics: [
 *                   {
 *                     MetricOperand: "<Identifier>",
 *                     Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 *                     SortDirection: "ASCENDING" || "DESCENDING",
 *                   },
 *                 ],
 *                 TopBottomLimit: "<TopicConstantValue>",
 *                 SortDirection: "ASCENDING" || "DESCENDING",
 *                 Anchor: {
 *                   AnchorType: "TODAY",
 *                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                   Offset: Number("int"),
 *                 },
 *               },
 *               EndRange: "<TopicIRFilterOption>",
 *             },
 *             Direction: "INCREASE" || "DECREASE" || "NEUTRAL",
 *             SortType: "ABSOLUTE_DIFFERENCE" || "CONTRIBUTION_PERCENTAGE" || "DEVIATION_FROM_EXPECTED" || "PERCENTAGE_DIFFERENCE",
 *           },
 *           Visual: {
 *             type: "STRING_VALUE",
 *           },
 *         },
 *         SupportingVisuals: [ // TopicVisuals
 *           {
 *             VisualId: "STRING_VALUE",
 *             Role: "PRIMARY" || "COMPLIMENTARY" || "MULTI_INTENT" || "FALLBACK" || "FRAGMENT",
 *             Ir: "<TopicIR>",
 *             SupportingVisuals: [
 *               "<TopicVisual>",
 *             ],
 *           },
 *         ],
 *       },
 *       Template: { // TopicTemplate
 *         TemplateType: "STRING_VALUE",
 *         Slots: [ // Slots
 *           { // Slot
 *             SlotId: "STRING_VALUE",
 *             VisualId: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchCreateTopicReviewedAnswerCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateTopicReviewedAnswerResponse
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   SucceededAnswers: [ // SucceededTopicReviewedAnswers
 * //     { // SucceededTopicReviewedAnswer
 * //       AnswerId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   InvalidAnswers: [ // InvalidTopicReviewedAnswers
 * //     { // InvalidTopicReviewedAnswer
 * //       AnswerId: "STRING_VALUE",
 * //       Error: "INTERNAL_ERROR" || "MISSING_ANSWER" || "DATASET_DOES_NOT_EXIST" || "INVALID_DATASET_ARN" || "DUPLICATED_ANSWER" || "INVALID_DATA" || "MISSING_REQUIRED_FIELDS",
 * //     },
 * //   ],
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BatchCreateTopicReviewedAnswerCommandInput - {@link BatchCreateTopicReviewedAnswerCommandInput}
 * @returns {@link BatchCreateTopicReviewedAnswerCommandOutput}
 * @see {@link BatchCreateTopicReviewedAnswerCommandInput} for command's `input` shape.
 * @see {@link BatchCreateTopicReviewedAnswerCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class BatchCreateTopicReviewedAnswerCommand extends $Command
  .classBuilder<
    BatchCreateTopicReviewedAnswerCommandInput,
    BatchCreateTopicReviewedAnswerCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "BatchCreateTopicReviewedAnswer", {})
  .n("QuickSightClient", "BatchCreateTopicReviewedAnswerCommand")
  .sc(BatchCreateTopicReviewedAnswer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateTopicReviewedAnswerRequest;
      output: BatchCreateTopicReviewedAnswerResponse;
    };
    sdk: {
      input: BatchCreateTopicReviewedAnswerCommandInput;
      output: BatchCreateTopicReviewedAnswerCommandOutput;
    };
  };
}
