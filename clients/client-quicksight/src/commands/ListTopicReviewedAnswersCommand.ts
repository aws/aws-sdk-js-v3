// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTopicReviewedAnswersRequest } from "../models/models_4";
import { ListTopicReviewedAnswersResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListTopicReviewedAnswers } from "../schemas/schemas_1_Topic";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTopicReviewedAnswersCommand}.
 */
export interface ListTopicReviewedAnswersCommandInput extends ListTopicReviewedAnswersRequest {}
/**
 * @public
 *
 * The output of {@link ListTopicReviewedAnswersCommand}.
 */
export interface ListTopicReviewedAnswersCommandOutput extends ListTopicReviewedAnswersResponse, __MetadataBearer {}

/**
 * <p>Lists all reviewed answers for a Q Topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTopicReviewedAnswersCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTopicReviewedAnswersCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListTopicReviewedAnswersRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 * };
 * const command = new ListTopicReviewedAnswersCommand(input);
 * const response = await client.send(command);
 * // { // ListTopicReviewedAnswersResponse
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   Answers: [ // TopicReviewedAnswers
 * //     { // TopicReviewedAnswer
 * //       Arn: "STRING_VALUE",
 * //       AnswerId: "STRING_VALUE", // required
 * //       DatasetArn: "STRING_VALUE", // required
 * //       Question: "STRING_VALUE", // required
 * //       Mir: { // TopicIR
 * //         Metrics: [ // TopicIRMetricList
 * //           { // TopicIRMetric
 * //             MetricId: { // Identifier
 * //               Identity: "STRING_VALUE", // required
 * //             },
 * //             Function: { // AggFunction
 * //               Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //               AggregationFunctionParameters: { // AggFunctionParamMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               Period: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //               PeriodField: "STRING_VALUE",
 * //             },
 * //             Operands: [ // OperandList
 * //               {
 * //                 Identity: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             ComparisonMethod: { // TopicIRComparisonMethod
 * //               Type: "DIFF" || "PERC_DIFF" || "DIFF_AS_PERC" || "POP_CURRENT_DIFF_AS_PERC" || "POP_CURRENT_DIFF" || "POP_OVERTIME_DIFF_AS_PERC" || "POP_OVERTIME_DIFF" || "PERCENT_OF_TOTAL" || "RUNNING_SUM" || "MOVING_AVERAGE",
 * //               Period: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //               WindowSize: Number("int"),
 * //             },
 * //             Expression: "STRING_VALUE",
 * //             CalculatedFieldReferences: [ // CalculatedFieldReferenceList
 * //               {
 * //                 Identity: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 * //             DisplayFormatOptions: { // DisplayFormatOptions
 * //               UseBlankCellFormat: true || false,
 * //               BlankCellFormat: "STRING_VALUE",
 * //               DateFormat: "STRING_VALUE",
 * //               DecimalSeparator: "COMMA" || "DOT",
 * //               GroupingSeparator: "STRING_VALUE",
 * //               UseGrouping: true || false,
 * //               FractionDigits: Number("int"),
 * //               Prefix: "STRING_VALUE",
 * //               Suffix: "STRING_VALUE",
 * //               UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS" || "LAKHS" || "CRORES",
 * //               NegativeFormat: { // NegativeFormat
 * //                 Prefix: "STRING_VALUE",
 * //                 Suffix: "STRING_VALUE",
 * //               },
 * //               CurrencySymbol: "STRING_VALUE",
 * //             },
 * //             NamedEntity: { // NamedEntityRef
 * //               NamedEntityName: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         GroupByList: [ // TopicIRGroupByList
 * //           { // TopicIRGroupBy
 * //             FieldName: {
 * //               Identity: "STRING_VALUE", // required
 * //             },
 * //             TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //             Sort: { // TopicSortClause
 * //               Operand: {
 * //                 Identity: "STRING_VALUE", // required
 * //               },
 * //               SortDirection: "ASCENDING" || "DESCENDING",
 * //             },
 * //             DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 * //             DisplayFormatOptions: {
 * //               UseBlankCellFormat: true || false,
 * //               BlankCellFormat: "STRING_VALUE",
 * //               DateFormat: "STRING_VALUE",
 * //               DecimalSeparator: "COMMA" || "DOT",
 * //               GroupingSeparator: "STRING_VALUE",
 * //               UseGrouping: true || false,
 * //               FractionDigits: Number("int"),
 * //               Prefix: "STRING_VALUE",
 * //               Suffix: "STRING_VALUE",
 * //               UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS" || "LAKHS" || "CRORES",
 * //               NegativeFormat: {
 * //                 Prefix: "STRING_VALUE",
 * //                 Suffix: "STRING_VALUE",
 * //               },
 * //               CurrencySymbol: "STRING_VALUE",
 * //             },
 * //             NamedEntity: {
 * //               NamedEntityName: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         Filters: [ // TopicIRFilterList
 * //           [ // TopicIRFilterEntry
 * //             { // TopicIRFilterOption
 * //               FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 * //               FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 * //               OperandField: "<Identifier>",
 * //               Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 * //               Constant: { // TopicConstantValue
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 Value: "STRING_VALUE",
 * //                 Minimum: "STRING_VALUE",
 * //                 Maximum: "STRING_VALUE",
 * //                 ValueList: [ // CollectiveConstantEntryList
 * //                   { // CollectiveConstantEntry
 * //                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               Inverse: true || false,
 * //               NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 * //               Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //               AggregationFunctionParameters: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               AggregationPartitionBy: [ // AggregationPartitionByList
 * //                 { // AggregationPartitionBy
 * //                   FieldName: "STRING_VALUE",
 * //                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                 },
 * //               ],
 * //               Range: {
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 Value: "STRING_VALUE",
 * //                 Minimum: "STRING_VALUE",
 * //                 Maximum: "STRING_VALUE",
 * //                 ValueList: [
 * //                   {
 * //                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               Inclusive: true || false,
 * //               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //               LastNextOffset: {
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 Value: "STRING_VALUE",
 * //                 Minimum: "STRING_VALUE",
 * //                 Maximum: "STRING_VALUE",
 * //                 ValueList: [
 * //                   {
 * //                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               AggMetrics: [ // FilterAggMetricsList
 * //                 { // FilterAggMetrics
 * //                   MetricOperand: "<Identifier>",
 * //                   Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //                   SortDirection: "ASCENDING" || "DESCENDING",
 * //                 },
 * //               ],
 * //               TopBottomLimit: {
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 Value: "STRING_VALUE",
 * //                 Minimum: "STRING_VALUE",
 * //                 Maximum: "STRING_VALUE",
 * //                 ValueList: [
 * //                   {
 * //                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               SortDirection: "ASCENDING" || "DESCENDING",
 * //               Anchor: { // Anchor
 * //                 AnchorType: "TODAY",
 * //                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                 Offset: Number("int"),
 * //               },
 * //             },
 * //           ],
 * //         ],
 * //         Sort: {
 * //           Operand: "<Identifier>",
 * //           SortDirection: "ASCENDING" || "DESCENDING",
 * //         },
 * //         ContributionAnalysis: { // TopicIRContributionAnalysis
 * //           Factors: [ // ContributionAnalysisFactorsList
 * //             { // ContributionAnalysisFactor
 * //               FieldName: "STRING_VALUE",
 * //             },
 * //           ],
 * //           TimeRanges: { // ContributionAnalysisTimeRanges
 * //             StartRange: {
 * //               FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 * //               FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 * //               OperandField: "<Identifier>",
 * //               Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 * //               Constant: {
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 Value: "STRING_VALUE",
 * //                 Minimum: "STRING_VALUE",
 * //                 Maximum: "STRING_VALUE",
 * //                 ValueList: [
 * //                   {
 * //                     ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //               Inverse: true || false,
 * //               NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 * //               Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //               AggregationFunctionParameters: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               AggregationPartitionBy: [
 * //                 {
 * //                   FieldName: "STRING_VALUE",
 * //                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                 },
 * //               ],
 * //               Range: "<TopicConstantValue>",
 * //               Inclusive: true || false,
 * //               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //               LastNextOffset: "<TopicConstantValue>",
 * //               AggMetrics: [
 * //                 {
 * //                   MetricOperand: "<Identifier>",
 * //                   Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //                   SortDirection: "ASCENDING" || "DESCENDING",
 * //                 },
 * //               ],
 * //               TopBottomLimit: "<TopicConstantValue>",
 * //               SortDirection: "ASCENDING" || "DESCENDING",
 * //               Anchor: {
 * //                 AnchorType: "TODAY",
 * //                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                 Offset: Number("int"),
 * //               },
 * //             },
 * //             EndRange: {
 * //               FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 * //               FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 * //               OperandField: "<Identifier>",
 * //               Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 * //               Constant: "<TopicConstantValue>",
 * //               Inverse: true || false,
 * //               NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 * //               Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //               AggregationFunctionParameters: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               AggregationPartitionBy: [
 * //                 {
 * //                   FieldName: "STRING_VALUE",
 * //                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                 },
 * //               ],
 * //               Range: "<TopicConstantValue>",
 * //               Inclusive: true || false,
 * //               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //               LastNextOffset: "<TopicConstantValue>",
 * //               AggMetrics: [
 * //                 {
 * //                   MetricOperand: "<Identifier>",
 * //                   Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //                   SortDirection: "ASCENDING" || "DESCENDING",
 * //                 },
 * //               ],
 * //               TopBottomLimit: "<TopicConstantValue>",
 * //               SortDirection: "ASCENDING" || "DESCENDING",
 * //               Anchor: {
 * //                 AnchorType: "TODAY",
 * //                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                 Offset: Number("int"),
 * //               },
 * //             },
 * //           },
 * //           Direction: "INCREASE" || "DECREASE" || "NEUTRAL",
 * //           SortType: "ABSOLUTE_DIFFERENCE" || "CONTRIBUTION_PERCENTAGE" || "DEVIATION_FROM_EXPECTED" || "PERCENTAGE_DIFFERENCE",
 * //         },
 * //         Visual: { // VisualOptions
 * //           type: "STRING_VALUE",
 * //         },
 * //       },
 * //       PrimaryVisual: { // TopicVisual
 * //         VisualId: "STRING_VALUE",
 * //         Role: "PRIMARY" || "COMPLIMENTARY" || "MULTI_INTENT" || "FALLBACK" || "FRAGMENT",
 * //         Ir: {
 * //           Metrics: [
 * //             {
 * //               MetricId: "<Identifier>",
 * //               Function: {
 * //                 Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //                 AggregationFunctionParameters: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 Period: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //                 PeriodField: "STRING_VALUE",
 * //               },
 * //               Operands: [
 * //                 "<Identifier>",
 * //               ],
 * //               ComparisonMethod: {
 * //                 Type: "DIFF" || "PERC_DIFF" || "DIFF_AS_PERC" || "POP_CURRENT_DIFF_AS_PERC" || "POP_CURRENT_DIFF" || "POP_OVERTIME_DIFF_AS_PERC" || "POP_OVERTIME_DIFF" || "PERCENT_OF_TOTAL" || "RUNNING_SUM" || "MOVING_AVERAGE",
 * //                 Period: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //                 WindowSize: Number("int"),
 * //               },
 * //               Expression: "STRING_VALUE",
 * //               CalculatedFieldReferences: [
 * //                 "<Identifier>",
 * //               ],
 * //               DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 * //               DisplayFormatOptions: {
 * //                 UseBlankCellFormat: true || false,
 * //                 BlankCellFormat: "STRING_VALUE",
 * //                 DateFormat: "STRING_VALUE",
 * //                 DecimalSeparator: "COMMA" || "DOT",
 * //                 GroupingSeparator: "STRING_VALUE",
 * //                 UseGrouping: true || false,
 * //                 FractionDigits: Number("int"),
 * //                 Prefix: "STRING_VALUE",
 * //                 Suffix: "STRING_VALUE",
 * //                 UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS" || "LAKHS" || "CRORES",
 * //                 NegativeFormat: {
 * //                   Prefix: "STRING_VALUE",
 * //                   Suffix: "STRING_VALUE",
 * //                 },
 * //                 CurrencySymbol: "STRING_VALUE",
 * //               },
 * //               NamedEntity: {
 * //                 NamedEntityName: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           GroupByList: [
 * //             {
 * //               FieldName: "<Identifier>",
 * //               TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //               Sort: "<TopicSortClause>",
 * //               DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 * //               DisplayFormatOptions: {
 * //                 UseBlankCellFormat: true || false,
 * //                 BlankCellFormat: "STRING_VALUE",
 * //                 DateFormat: "STRING_VALUE",
 * //                 DecimalSeparator: "COMMA" || "DOT",
 * //                 GroupingSeparator: "STRING_VALUE",
 * //                 UseGrouping: true || false,
 * //                 FractionDigits: Number("int"),
 * //                 Prefix: "STRING_VALUE",
 * //                 Suffix: "STRING_VALUE",
 * //                 UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS" || "LAKHS" || "CRORES",
 * //                 NegativeFormat: {
 * //                   Prefix: "STRING_VALUE",
 * //                   Suffix: "STRING_VALUE",
 * //                 },
 * //                 CurrencySymbol: "STRING_VALUE",
 * //               },
 * //               NamedEntity: {
 * //                 NamedEntityName: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           Filters: [
 * //             [
 * //               {
 * //                 FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 * //                 FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 * //                 OperandField: "<Identifier>",
 * //                 Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 * //                 Constant: "<TopicConstantValue>",
 * //                 Inverse: true || false,
 * //                 NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 * //                 Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //                 AggregationFunctionParameters: "<AggFunctionParamMap>",
 * //                 AggregationPartitionBy: [
 * //                   {
 * //                     FieldName: "STRING_VALUE",
 * //                     TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                   },
 * //                 ],
 * //                 Range: "<TopicConstantValue>",
 * //                 Inclusive: true || false,
 * //                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                 LastNextOffset: "<TopicConstantValue>",
 * //                 AggMetrics: [
 * //                   {
 * //                     MetricOperand: "<Identifier>",
 * //                     Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //                     SortDirection: "ASCENDING" || "DESCENDING",
 * //                   },
 * //                 ],
 * //                 TopBottomLimit: "<TopicConstantValue>",
 * //                 SortDirection: "ASCENDING" || "DESCENDING",
 * //                 Anchor: {
 * //                   AnchorType: "TODAY",
 * //                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                   Offset: Number("int"),
 * //                 },
 * //               },
 * //             ],
 * //           ],
 * //           Sort: "<TopicSortClause>",
 * //           ContributionAnalysis: {
 * //             Factors: [
 * //               {
 * //                 FieldName: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TimeRanges: {
 * //               StartRange: {
 * //                 FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER" || "TOP_BOTTOM_FILTER" || "EQUALS" || "RANK_LIMIT_FILTER" || "ACCEPT_ALL_FILTER",
 * //                 FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 * //                 OperandField: "<Identifier>",
 * //                 Function: "CONTAINS" || "EXACT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS_STRING" || "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 * //                 Constant: "<TopicConstantValue>",
 * //                 Inverse: true || false,
 * //                 NullFilter: "ALL_VALUES" || "NON_NULLS_ONLY" || "NULLS_ONLY",
 * //                 Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //                 AggregationFunctionParameters: "<AggFunctionParamMap>",
 * //                 AggregationPartitionBy: [
 * //                   {
 * //                     FieldName: "STRING_VALUE",
 * //                     TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                   },
 * //                 ],
 * //                 Range: "<TopicConstantValue>",
 * //                 Inclusive: true || false,
 * //                 TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                 LastNextOffset: "<TopicConstantValue>",
 * //                 AggMetrics: [
 * //                   {
 * //                     MetricOperand: "<Identifier>",
 * //                     Function: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "PTD_SUM" || "PTD_MIN" || "PTD_MAX" || "PTD_COUNT" || "PTD_DISTINCT_COUNT" || "PTD_AVERAGE" || "COLUMN" || "CUSTOM",
 * //                     SortDirection: "ASCENDING" || "DESCENDING",
 * //                   },
 * //                 ],
 * //                 TopBottomLimit: "<TopicConstantValue>",
 * //                 SortDirection: "ASCENDING" || "DESCENDING",
 * //                 Anchor: {
 * //                   AnchorType: "TODAY",
 * //                   TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //                   Offset: Number("int"),
 * //                 },
 * //               },
 * //               EndRange: "<TopicIRFilterOption>",
 * //             },
 * //             Direction: "INCREASE" || "DECREASE" || "NEUTRAL",
 * //             SortType: "ABSOLUTE_DIFFERENCE" || "CONTRIBUTION_PERCENTAGE" || "DEVIATION_FROM_EXPECTED" || "PERCENTAGE_DIFFERENCE",
 * //           },
 * //           Visual: {
 * //             type: "STRING_VALUE",
 * //           },
 * //         },
 * //         SupportingVisuals: [ // TopicVisuals
 * //           {
 * //             VisualId: "STRING_VALUE",
 * //             Role: "PRIMARY" || "COMPLIMENTARY" || "MULTI_INTENT" || "FALLBACK" || "FRAGMENT",
 * //             Ir: "<TopicIR>",
 * //             SupportingVisuals: [
 * //               "<TopicVisual>",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       Template: { // TopicTemplate
 * //         TemplateType: "STRING_VALUE",
 * //         Slots: [ // Slots
 * //           { // Slot
 * //             SlotId: "STRING_VALUE",
 * //             VisualId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTopicReviewedAnswersCommandInput - {@link ListTopicReviewedAnswersCommandInput}
 * @returns {@link ListTopicReviewedAnswersCommandOutput}
 * @see {@link ListTopicReviewedAnswersCommandInput} for command's `input` shape.
 * @see {@link ListTopicReviewedAnswersCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
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
export class ListTopicReviewedAnswersCommand extends $Command
  .classBuilder<
    ListTopicReviewedAnswersCommandInput,
    ListTopicReviewedAnswersCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListTopicReviewedAnswers", {})
  .n("QuickSightClient", "ListTopicReviewedAnswersCommand")
  .sc(ListTopicReviewedAnswers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTopicReviewedAnswersRequest;
      output: ListTopicReviewedAnswersResponse;
    };
    sdk: {
      input: ListTopicReviewedAnswersCommandInput;
      output: ListTopicReviewedAnswersCommandOutput;
    };
  };
}
