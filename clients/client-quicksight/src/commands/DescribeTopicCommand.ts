// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DescribeTopicRequest,
  DescribeTopicResponse,
  DescribeTopicResponseFilterSensitiveLog,
} from "../models/models_3";
import { de_DescribeTopicCommand, se_DescribeTopicCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 *
 * The input for {@link DescribeTopicCommand}.
 */
export interface DescribeTopicCommandInput extends DescribeTopicRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTopicCommand}.
 */
export interface DescribeTopicCommandOutput extends DescribeTopicResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTopicCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTopicCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTopicRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTopicResponse
 * //   Arn: "STRING_VALUE",
 * //   TopicId: "STRING_VALUE",
 * //   Topic: { // TopicDetails
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DataSets: [ // Datasets
 * //       { // DatasetMetadata
 * //         DatasetArn: "STRING_VALUE", // required
 * //         DatasetName: "STRING_VALUE",
 * //         DatasetDescription: "STRING_VALUE",
 * //         DataAggregation: { // DataAggregation
 * //           DatasetRowDateGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //           DefaultDateColumnName: "STRING_VALUE",
 * //         },
 * //         Filters: [ // TopicFilters
 * //           { // TopicFilter
 * //             FilterDescription: "STRING_VALUE",
 * //             FilterClass: "ENFORCED_VALUE_FILTER" || "CONDITIONAL_VALUE_FILTER" || "NAMED_VALUE_FILTER",
 * //             FilterName: "STRING_VALUE", // required
 * //             FilterSynonyms: [ // Synonyms
 * //               "STRING_VALUE",
 * //             ],
 * //             OperandFieldName: "STRING_VALUE", // required
 * //             FilterType: "CATEGORY_FILTER" || "NUMERIC_EQUALITY_FILTER" || "NUMERIC_RANGE_FILTER" || "DATE_RANGE_FILTER" || "RELATIVE_DATE_FILTER",
 * //             CategoryFilter: { // TopicCategoryFilter
 * //               CategoryFilterFunction: "EXACT" || "CONTAINS",
 * //               CategoryFilterType: "CUSTOM_FILTER" || "CUSTOM_FILTER_LIST" || "FILTER_LIST",
 * //               Constant: { // TopicCategoryFilterConstant
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 SingularConstant: "STRING_VALUE",
 * //                 CollectiveConstant: { // CollectiveConstant
 * //                   ValueList: [ // StringList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               Inverse: true || false,
 * //             },
 * //             NumericEqualityFilter: { // TopicNumericEqualityFilter
 * //               Constant: { // TopicSingularFilterConstant
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 SingularConstant: "STRING_VALUE",
 * //               },
 * //               Aggregation: "NO_AGGREGATION" || "SUM" || "AVERAGE" || "COUNT" || "DISTINCT_COUNT" || "MAX" || "MEDIAN" || "MIN" || "STDEV" || "STDEVP" || "VAR" || "VARP",
 * //             },
 * //             NumericRangeFilter: { // TopicNumericRangeFilter
 * //               Inclusive: true || false,
 * //               Constant: { // TopicRangeFilterConstant
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 RangeConstant: { // RangeConstant
 * //                   Minimum: "STRING_VALUE",
 * //                   Maximum: "STRING_VALUE",
 * //                 },
 * //               },
 * //               Aggregation: "NO_AGGREGATION" || "SUM" || "AVERAGE" || "COUNT" || "DISTINCT_COUNT" || "MAX" || "MEDIAN" || "MIN" || "STDEV" || "STDEVP" || "VAR" || "VARP",
 * //             },
 * //             DateRangeFilter: { // TopicDateRangeFilter
 * //               Inclusive: true || false,
 * //               Constant: {
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 RangeConstant: {
 * //                   Minimum: "STRING_VALUE",
 * //                   Maximum: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             RelativeDateFilter: { // TopicRelativeDateFilter
 * //               TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //               RelativeDateFilterFunction: "PREVIOUS" || "THIS" || "LAST" || "NEXT" || "NOW",
 * //               Constant: {
 * //                 ConstantType: "SINGULAR" || "RANGE" || "COLLECTIVE",
 * //                 SingularConstant: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         Columns: [ // TopicColumns
 * //           { // TopicColumn
 * //             ColumnName: "STRING_VALUE", // required
 * //             ColumnFriendlyName: "STRING_VALUE",
 * //             ColumnDescription: "STRING_VALUE",
 * //             ColumnSynonyms: [
 * //               "STRING_VALUE",
 * //             ],
 * //             ColumnDataRole: "DIMENSION" || "MEASURE",
 * //             Aggregation: "SUM" || "MAX" || "MIN" || "COUNT" || "DISTINCT_COUNT" || "AVERAGE",
 * //             IsIncludedInTopic: true || false,
 * //             DisableIndexing: true || false,
 * //             ComparativeOrder: { // ComparativeOrder
 * //               UseOrdering: "GREATER_IS_BETTER" || "LESSER_IS_BETTER" || "SPECIFIED",
 * //               SpecifedOrder: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               TreatUndefinedSpecifiedValues: "LEAST" || "MOST",
 * //             },
 * //             SemanticType: { // SemanticType
 * //               TypeName: "STRING_VALUE",
 * //               SubTypeName: "STRING_VALUE",
 * //               TypeParameters: { // TypeParameters
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               TruthyCellValue: "STRING_VALUE",
 * //               TruthyCellValueSynonyms: [ // SensitiveStringList
 * //                 "STRING_VALUE",
 * //               ],
 * //               FalseyCellValue: "STRING_VALUE",
 * //               FalseyCellValueSynonyms: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //             AllowedAggregations: [ // AuthorSpecifiedAggregations
 * //               "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX" || "MEDIAN" || "SUM" || "AVERAGE" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE",
 * //             ],
 * //             NotAllowedAggregations: [
 * //               "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX" || "MEDIAN" || "SUM" || "AVERAGE" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE",
 * //             ],
 * //             DefaultFormatting: { // DefaultFormatting
 * //               DisplayFormat: "AUTO" || "PERCENT" || "CURRENCY" || "NUMBER" || "DATE" || "STRING",
 * //               DisplayFormatOptions: { // DisplayFormatOptions
 * //                 UseBlankCellFormat: true || false,
 * //                 BlankCellFormat: "STRING_VALUE",
 * //                 DateFormat: "STRING_VALUE",
 * //                 DecimalSeparator: "COMMA" || "DOT",
 * //                 GroupingSeparator: "STRING_VALUE",
 * //                 UseGrouping: true || false,
 * //                 FractionDigits: Number("int"),
 * //                 Prefix: "STRING_VALUE",
 * //                 Suffix: "STRING_VALUE",
 * //                 UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 * //                 NegativeFormat: { // NegativeFormat
 * //                   Prefix: "STRING_VALUE",
 * //                   Suffix: "STRING_VALUE",
 * //                 },
 * //                 CurrencySymbol: "STRING_VALUE",
 * //               },
 * //             },
 * //             NeverAggregateInFilter: true || false,
 * //             CellValueSynonyms: [ // CellValueSynonyms
 * //               { // CellValueSynonym
 * //                 CellValue: "STRING_VALUE",
 * //                 Synonyms: "<StringList>",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         CalculatedFields: [ // TopicCalculatedFields
 * //           { // TopicCalculatedField
 * //             CalculatedFieldName: "STRING_VALUE", // required
 * //             CalculatedFieldDescription: "STRING_VALUE",
 * //             Expression: "STRING_VALUE", // required
 * //             CalculatedFieldSynonyms: [
 * //               "STRING_VALUE",
 * //             ],
 * //             IsIncludedInTopic: true || false,
 * //             DisableIndexing: true || false,
 * //             ColumnDataRole: "DIMENSION" || "MEASURE",
 * //             TimeGranularity: "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK" || "MONTH" || "QUARTER" || "YEAR",
 * //             DefaultFormatting: {
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
 * //                 UnitScaler: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 * //                 NegativeFormat: {
 * //                   Prefix: "STRING_VALUE",
 * //                   Suffix: "STRING_VALUE",
 * //                 },
 * //                 CurrencySymbol: "STRING_VALUE",
 * //               },
 * //             },
 * //             Aggregation: "SUM" || "MAX" || "MIN" || "COUNT" || "DISTINCT_COUNT" || "AVERAGE",
 * //             ComparativeOrder: {
 * //               UseOrdering: "GREATER_IS_BETTER" || "LESSER_IS_BETTER" || "SPECIFIED",
 * //               SpecifedOrder: "<StringList>",
 * //               TreatUndefinedSpecifiedValues: "LEAST" || "MOST",
 * //             },
 * //             SemanticType: {
 * //               TypeName: "STRING_VALUE",
 * //               SubTypeName: "STRING_VALUE",
 * //               TypeParameters: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               TruthyCellValue: "STRING_VALUE",
 * //               TruthyCellValueSynonyms: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               FalseyCellValue: "STRING_VALUE",
 * //               FalseyCellValueSynonyms: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             AllowedAggregations: [
 * //               "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX" || "MEDIAN" || "SUM" || "AVERAGE" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE",
 * //             ],
 * //             NotAllowedAggregations: [
 * //               "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX" || "MEDIAN" || "SUM" || "AVERAGE" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE",
 * //             ],
 * //             NeverAggregateInFilter: true || false,
 * //             CellValueSynonyms: [
 * //               {
 * //                 CellValue: "STRING_VALUE",
 * //                 Synonyms: "<StringList>",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         NamedEntities: [ // TopicNamedEntities
 * //           { // TopicNamedEntity
 * //             EntityName: "STRING_VALUE", // required
 * //             EntityDescription: "STRING_VALUE",
 * //             EntitySynonyms: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SemanticEntityType: { // SemanticEntityType
 * //               TypeName: "STRING_VALUE",
 * //               SubTypeName: "STRING_VALUE",
 * //               TypeParameters: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //             Definition: [ // NamedEntityDefinitions
 * //               { // NamedEntityDefinition
 * //                 FieldName: "STRING_VALUE",
 * //                 PropertyName: "STRING_VALUE",
 * //                 PropertyRole: "PRIMARY" || "ID",
 * //                 PropertyUsage: "INHERIT" || "DIMENSION" || "MEASURE",
 * //                 Metric: { // NamedEntityDefinitionMetric
 * //                   Aggregation: "SUM" || "MIN" || "MAX" || "COUNT" || "AVERAGE" || "DISTINCT_COUNT" || "STDEV" || "STDEVP" || "VAR" || "VARP" || "PERCENTILE" || "MEDIAN" || "CUSTOM",
 * //                   AggregationFunctionParameters: { // AggregationFunctionParameters
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeTopicCommandInput - {@link DescribeTopicCommandInput}
 * @returns {@link DescribeTopicCommandOutput}
 * @see {@link DescribeTopicCommandInput} for command's `input` shape.
 * @see {@link DescribeTopicCommandOutput} for command's `response` shape.
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
 */
export class DescribeTopicCommand extends $Command<
  DescribeTopicCommandInput,
  DescribeTopicCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeTopicCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTopicCommandInput, DescribeTopicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTopicCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeTopicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeTopicResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTopicCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTopicCommandOutput> {
    return de_DescribeTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
