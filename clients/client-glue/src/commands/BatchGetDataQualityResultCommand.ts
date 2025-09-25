// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetDataQualityResultRequest, BatchGetDataQualityResultResponse } from "../models/models_0";
import { BatchGetDataQualityResult } from "../schemas/schemas_21_Quality";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetDataQualityResultCommand}.
 */
export interface BatchGetDataQualityResultCommandInput extends BatchGetDataQualityResultRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetDataQualityResultCommand}.
 */
export interface BatchGetDataQualityResultCommandOutput extends BatchGetDataQualityResultResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of data quality results for the specified result IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetDataQualityResultCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetDataQualityResultCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchGetDataQualityResultRequest
 *   ResultIds: [ // DataQualityResultIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetDataQualityResultCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDataQualityResultResponse
 * //   Results: [ // DataQualityResultsList // required
 * //     { // DataQualityResult
 * //       ResultId: "STRING_VALUE",
 * //       ProfileId: "STRING_VALUE",
 * //       Score: Number("double"),
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
 * //       RulesetName: "STRING_VALUE",
 * //       EvaluationContext: "STRING_VALUE",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       JobName: "STRING_VALUE",
 * //       JobRunId: "STRING_VALUE",
 * //       RulesetEvaluationRunId: "STRING_VALUE",
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
 * //       AggregatedMetrics: { // DataQualityAggregatedMetrics
 * //         TotalRowsProcessed: Number("double"),
 * //         TotalRowsPassed: Number("double"),
 * //         TotalRowsFailed: Number("double"),
 * //         TotalRulesProcessed: Number("double"),
 * //         TotalRulesPassed: Number("double"),
 * //         TotalRulesFailed: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   ResultsNotFound: [ // DataQualityResultIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetDataQualityResultCommandInput - {@link BatchGetDataQualityResultCommandInput}
 * @returns {@link BatchGetDataQualityResultCommandOutput}
 * @see {@link BatchGetDataQualityResultCommandInput} for command's `input` shape.
 * @see {@link BatchGetDataQualityResultCommandOutput} for command's `response` shape.
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
export class BatchGetDataQualityResultCommand extends $Command
  .classBuilder<
    BatchGetDataQualityResultCommandInput,
    BatchGetDataQualityResultCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "BatchGetDataQualityResult", {})
  .n("GlueClient", "BatchGetDataQualityResultCommand")
  .sc(BatchGetDataQualityResult)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetDataQualityResultRequest;
      output: BatchGetDataQualityResultResponse;
    };
    sdk: {
      input: BatchGetDataQualityResultCommandInput;
      output: BatchGetDataQualityResultCommandOutput;
    };
  };
}
