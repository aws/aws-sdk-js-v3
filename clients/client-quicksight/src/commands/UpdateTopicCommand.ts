// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTopicRequest, UpdateTopicRequestFilterSensitiveLog, UpdateTopicResponse } from "../models/models_5";
import { de_UpdateTopicCommand, se_UpdateTopicCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTopicCommand}.
 */
export interface UpdateTopicCommandInput extends UpdateTopicRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTopicCommand}.
 */
export interface UpdateTopicCommandOutput extends UpdateTopicResponse, __MetadataBearer {}

/**
 * <p>Updates a topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTopicCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTopicCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateTopicRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   Topic: { // TopicDetails
 *     Name: "STRING_VALUE",
 *     Description: "STRING_VALUE",
 *     UserExperienceVersion: "LEGACY" || "NEW_READER_EXPERIENCE",
 *     DataSets: [ // Datasets
 *       { // DatasetMetadata
 *         DatasetArn: "STRING_VALUE", // required
 *         DatasetName: "STRING_VALUE",
 *         DatasetDescription: "STRING_VALUE",
 *         DataAggregation: { // DataAggregation
 *           DatasetRowDateGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *           DefaultDateColumnName: "STRING_VALUE",
 *         },
 *         Filters: [ // TopicFilters
 *           { // TopicFilter
 *             FilterDescription: "STRING_VALUE",
 *             FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 *             FilterName: "STRING_VALUE", // required
 *             FilterSynonyms: [ // Synonyms
 *               "STRING_VALUE",
 *             ],
 *             OperandFieldName: "STRING_VALUE", // required
 *             FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER",
 *             CategoryFilter: { // TopicCategoryFilter
 *               CategoryFilterFunction: "EXACT" || "CONTAINS",
 *               CategoryFilterType: "CUSTOM_FILTER" || "CUSTOM_FILTER_LIST" || "FILTER_LIST",
 *               Constant: { // TopicCategoryFilterConstant
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 SingularConstant: "STRING_VALUE",
 *                 CollectiveConstant: { // CollectiveConstant
 *                   ValueList: [ // StringList
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *               },
 *               Inverse: true || false,
 *             },
 *             NumericEqualityFilter: { // TopicNumericEqualityFilter
 *               Constant: { // TopicSingularFilterConstant
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 SingularConstant: "STRING_VALUE",
 *               },
 *               Aggregation: "NO_AGGREGATION" || "SUM" || "AVERAGE" || "COUNT" || "DISTINCT_COUNT" || "MAX" || "MEDIAN" || "MIN" || "STDEV" || "STDEVP" || "VAR" || "VARP",
 *             },
 *             NumericRangeFilter: { // TopicNumericRangeFilter
 *               Inclusive: true || false,
 *               Constant: { // TopicRangeFilterConstant
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 RangeConstant: { // RangeConstant
 *                   Minimum: "STRING_VALUE",
 *                   Maximum: "STRING_VALUE",
 *                 },
 *               },
 *               Aggregation: "NO_AGGREGATION" || "SUM" || "AVERAGE" || "COUNT" || "DISTINCT_COUNT" || "MAX" || "MEDIAN" || "MIN" || "STDEV" || "STDEVP" || "VAR" || "VARP",
 *             },
 *             DateRangeFilter: { // TopicDateRangeFilter
 *               Inclusive: true || false,
 *               Constant: {
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 RangeConstant: {
 *                   Minimum: "STRING_VALUE",
 *                   Maximum: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *             RelativeDateFilter: { // TopicRelativeDateFilter
 *               TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *               RelativeDateFilterFunction: "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 *               Constant: {
 *                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 *                 SingularConstant: "STRING_VALUE",
 *               },
 *             },
 *           },
 *         ],
 *         Columns: [ // TopicColumns
 *           { // TopicColumn
 *             ColumnName: "STRING_VALUE", // required
 *             ColumnFriendlyName: "STRING_VALUE",
 *             ColumnDescription: "STRING_VALUE",
 *             ColumnSynonyms: [
 *               "STRING_VALUE",
 *             ],
 *             ColumnDataRole: "DIMENSION" || "MEASURE",
 *             Aggregation: "SUM" || "MAX" || "MIN" || "COUNT" || "DISTINCT_COUNT" || "AVERAGE" || "MEDIAN" || "STDEV" || "STDEVP" || "VAR" || "VARP",
 *             IsIncludedInTopic: true || false,
 *             DisableIndexing: true || false,
 *             ComparativeOrder: { // ComparativeOrder
 *               UseOrdering: "GREATER_IS_BETTER" || "LESSER_IS_BETTER" || "SPECIFIED",
 *               SpecifedOrder: [
 *                 "STRING_VALUE",
 *               ],
 *               TreatUndefinedSpecifiedValues: "LEAST" || "MOST",
 *             },
 *             SemanticType: { // SemanticType
 *               TypeName: "STRING_VALUE",
 *               SubTypeName: "STRING_VALUE",
 *               TypeParameters: { // TypeParameters
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               TruthyCellValue: "STRING_VALUE",
 *               TruthyCellValueSynonyms: [ // SensitiveStringList
 *                 "STRING_VALUE",
 *               ],
 *               FalseyCellValue: "STRING_VALUE",
 *               FalseyCellValueSynonyms: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *             AllowedAggregations: [ // AuthorSpecifiedAggregations
 *               "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX" || "MEDIAN" || "SUM" || "AVERAGE" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE",
 *             ],
 *             NotAllowedAggregations: [
 *               "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX" || "MEDIAN" || "SUM" || "AVERAGE" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE",
 *             ],
 *             DefaultFormatting: { // DefaultFormatting
 *               DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 *               DisplayFormatOptions: { // DisplayFormatOptions
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
 *                 NegativeFormat: { // NegativeFormat
 *                   Prefix: "STRING_VALUE",
 *                   Suffix: "STRING_VALUE",
 *                 },
 *                 CurrencySymbol: "STRING_VALUE",
 *               },
 *             },
 *             NeverAggregateInFilter: true || false,
 *             CellValueSynonyms: [ // CellValueSynonyms
 *               { // CellValueSynonym
 *                 CellValue: "STRING_VALUE",
 *                 Synonyms: "<StringList>",
 *               },
 *             ],
 *             NonAdditive: true || false,
 *           },
 *         ],
 *         CalculatedFields: [ // TopicCalculatedFields
 *           { // TopicCalculatedField
 *             CalculatedFieldName: "STRING_VALUE", // required
 *             CalculatedFieldDescription: "STRING_VALUE",
 *             Expression: "STRING_VALUE", // required
 *             CalculatedFieldSynonyms: [
 *               "STRING_VALUE",
 *             ],
 *             IsIncludedInTopic: true || false,
 *             DisableIndexing: true || false,
 *             ColumnDataRole: "DIMENSION" || "MEASURE",
 *             TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 *             DefaultFormatting: {
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
 *             },
 *             Aggregation: "SUM" || "MAX" || "MIN" || "COUNT" || "DISTINCT_COUNT" || "AVERAGE" || "MEDIAN" || "STDEV" || "STDEVP" || "VAR" || "VARP",
 *             ComparativeOrder: {
 *               UseOrdering: "GREATER_IS_BETTER" || "LESSER_IS_BETTER" || "SPECIFIED",
 *               SpecifedOrder: "<StringList>",
 *               TreatUndefinedSpecifiedValues: "LEAST" || "MOST",
 *             },
 *             SemanticType: {
 *               TypeName: "STRING_VALUE",
 *               SubTypeName: "STRING_VALUE",
 *               TypeParameters: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               TruthyCellValue: "STRING_VALUE",
 *               TruthyCellValueSynonyms: [
 *                 "STRING_VALUE",
 *               ],
 *               FalseyCellValue: "STRING_VALUE",
 *               FalseyCellValueSynonyms: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             AllowedAggregations: [
 *               "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX" || "MEDIAN" || "SUM" || "AVERAGE" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE",
 *             ],
 *             NotAllowedAggregations: [
 *               "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX" || "MEDIAN" || "SUM" || "AVERAGE" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE",
 *             ],
 *             NeverAggregateInFilter: true || false,
 *             CellValueSynonyms: [
 *               {
 *                 CellValue: "STRING_VALUE",
 *                 Synonyms: "<StringList>",
 *               },
 *             ],
 *             NonAdditive: true || false,
 *           },
 *         ],
 *         NamedEntities: [ // TopicNamedEntities
 *           { // TopicNamedEntity
 *             EntityName: "STRING_VALUE", // required
 *             EntityDescription: "STRING_VALUE",
 *             EntitySynonyms: [
 *               "STRING_VALUE",
 *             ],
 *             SemanticEntityType: { // SemanticEntityType
 *               TypeName: "STRING_VALUE",
 *               SubTypeName: "STRING_VALUE",
 *               TypeParameters: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *             Definition: [ // NamedEntityDefinitions
 *               { // NamedEntityDefinition
 *                 FieldName: "STRING_VALUE",
 *                 PropertyName: "STRING_VALUE",
 *                 PropertyRole: "PRIMARY" || "ID",
 *                 PropertyUsage: "INHERIT" || "DIMENSION" || "MEASURE",
 *                 Metric: { // NamedEntityDefinitionMetric
 *                   Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "CUSTOM",
 *                   AggregationFunctionParameters: { // AggregationFunctionParameters
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *     ConfigOptions: { // TopicConfigOptions
 *       QBusinessInsightsEnabled: true || false,
 *     },
 *   },
 *   CustomInstructions: { // CustomInstructions
 *     CustomInstructionsString: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateTopicCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTopicResponse
 * //   TopicId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   RefreshArn: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateTopicCommandInput - {@link UpdateTopicCommandInput}
 * @returns {@link UpdateTopicCommandOutput}
 * @see {@link UpdateTopicCommandInput} for command's `input` shape.
 * @see {@link UpdateTopicCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class UpdateTopicCommand extends $Command
  .classBuilder<
    UpdateTopicCommandInput,
    UpdateTopicCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "UpdateTopic", {})
  .n("QuickSightClient", "UpdateTopicCommand")
  .f(UpdateTopicRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateTopicCommand)
  .de(de_UpdateTopicCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTopicRequest;
      output: UpdateTopicResponse;
    };
    sdk: {
      input: UpdateTopicCommandInput;
      output: UpdateTopicCommandOutput;
    };
  };
}
