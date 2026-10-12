// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetDataQualityResultV2Request, BatchGetDataQualityResultV2Response } from "../models/models_0";
import { BatchGetDataQualityResultV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetDataQualityResultV2Command}.
 */
export interface BatchGetDataQualityResultV2CommandInput extends BatchGetDataQualityResultV2Request {}
/**
 * @public
 *
 * The output of {@link BatchGetDataQualityResultV2Command}.
 */
export interface BatchGetDataQualityResultV2CommandOutput extends BatchGetDataQualityResultV2Response, __MetadataBearer {}

/**
 * <p>Retrieves a list of data quality results for the specified result IDs. You can specify up to 100 result IDs in a single request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetDataQualityResultV2Command } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetDataQualityResultV2Command } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchGetDataQualityResultV2Request
 *   ResultIds: [ // DataQualityResultV2IdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetDataQualityResultV2Command(input);
 * const response = await client.send(command);
 * // { // BatchGetDataQualityResultV2Response
 * //   Results: [ // DataQualityResultV2List // required
 * //     { // DataQualityResultV2Item
 * //       ResultId: "STRING_VALUE", // required
 * //       DataSource: { // DataSource
 * //         GlueTable: { // GlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: { // GlueTableAdditionalOptions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         DataQualityGlueTable: { // DataQualityGlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           PreProcessingQuery: "STRING_VALUE",
 * //         },
 * //       },
 * //       Dimensions: { // PublishDataQualityResultDimensions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Tags: { // PublishDataQualityResultTags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ExecutionStartedOn: new Date("TIMESTAMP"),
 * //       ExecutionCompletedOn: new Date("TIMESTAMP"),
 * //       ResultPublishedOn: new Date("TIMESTAMP"),
 * //       Score: Number("double"),
 * //       RuleResults: [ // DataQualityRuleResults
 * //         { // DataQualityRuleResult
 * //           Name: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           EvaluationMessage: "STRING_VALUE",
 * //           Result: "PASS" || "FAIL" || "ERROR",
 * //           EvaluatedMetrics: { // EvaluatedMetricsMap
 * //             "<keys>": Number("double"),
 * //           },
 * //           EvaluatedRule: "STRING_VALUE",
 * //           RuleMetrics: { // RuleMetricsMap
 * //             "<keys>": Number("double"),
 * //           },
 * //           Labels: { // Labels
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       AnalyzerResults: [ // DataQualityAnalyzerResults
 * //         { // DataQualityAnalyzerResult
 * //           Name: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           EvaluationMessage: "STRING_VALUE",
 * //           EvaluatedMetrics: {
 * //             "<keys>": Number("double"),
 * //           },
 * //           EvaluatedDistributions: { // EvaluatedDistributionsMap
 * //             "<keys>": { // DistributionData
 * //               BinEdges: [ // BinEdges
 * //                 "STRING_VALUE",
 * //               ],
 * //               Count: [ // Count
 * //                 Number("int"),
 * //               ],
 * //               DataType: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       Observations: [ // DataQualityObservations
 * //         { // DataQualityObservation
 * //           Description: "STRING_VALUE",
 * //           MetricBasedObservation: { // MetricBasedObservation
 * //             MetricName: "STRING_VALUE",
 * //             StatisticId: "STRING_VALUE",
 * //             MetricValues: { // DataQualityMetricValues
 * //               ActualValue: Number("double"),
 * //               ExpectedValue: Number("double"),
 * //               LowerLimit: Number("double"),
 * //               UpperLimit: Number("double"),
 * //             },
 * //             NewRules: [ // NewRules
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       EvaluationContext: "STRING_VALUE",
 * //       Descriptors: { // PublishDataQualityResultDescriptors
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       AggregatedMetrics: { // DataQualityAggregatedMetrics
 * //         TotalRowsProcessed: Number("double"),
 * //         TotalRowsPassed: Number("double"),
 * //         TotalRowsFailed: Number("double"),
 * //         TotalRulesProcessed: Number("double"),
 * //         TotalRulesPassed: Number("double"),
 * //         TotalRulesFailed: Number("double"),
 * //       },
 * //       RulesetName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ResultsNotFound: [ // DataQualityResultV2IdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetDataQualityResultV2CommandInput - {@link BatchGetDataQualityResultV2CommandInput}
 * @returns {@link BatchGetDataQualityResultV2CommandOutput}
 * @see {@link BatchGetDataQualityResultV2CommandInput} for command's `input` shape.
 * @see {@link BatchGetDataQualityResultV2CommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class BatchGetDataQualityResultV2Command extends command<BatchGetDataQualityResultV2CommandInput, BatchGetDataQualityResultV2CommandOutput>(
  _ep0,
  _mw0,
  "BatchGetDataQualityResultV2",
  BatchGetDataQualityResultV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetDataQualityResultV2Request;
      output: BatchGetDataQualityResultV2Response;
    };
    sdk: {
      input: BatchGetDataQualityResultV2CommandInput;
      output: BatchGetDataQualityResultV2CommandOutput;
    };
  };
}
