// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetDataQualityResultRequest,
  GetDataQualityResultResponse,
  GetDataQualityResultResponseFilterSensitiveLog,
} from "../models/models_2";
import { de_GetDataQualityResultCommand, se_GetDataQualityResultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityResultCommand}.
 */
export interface GetDataQualityResultCommandInput extends GetDataQualityResultRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityResultCommand}.
 */
export interface GetDataQualityResultCommandOutput extends GetDataQualityResultResponse, __MetadataBearer {}

/**
 * <p>Retrieves the result of a data quality rule evaluation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityResultCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityResultCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDataQualityResultRequest
 *   ResultId: "STRING_VALUE", // required
 * };
 * const command = new GetDataQualityResultCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityResultResponse
 * //   ResultId: "STRING_VALUE",
 * //   ProfileId: "STRING_VALUE",
 * //   Score: Number("double"),
 * //   DataSource: { // DataSource
 * //     GlueTable: { // GlueTable
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       CatalogId: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //       AdditionalOptions: { // GlueTableAdditionalOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   RulesetName: "STRING_VALUE",
 * //   EvaluationContext: "STRING_VALUE",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   JobName: "STRING_VALUE",
 * //   JobRunId: "STRING_VALUE",
 * //   RulesetEvaluationRunId: "STRING_VALUE",
 * //   RuleResults: [ // DataQualityRuleResults
 * //     { // DataQualityRuleResult
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EvaluationMessage: "STRING_VALUE",
 * //       Result: "PASS" || "FAIL" || "ERROR",
 * //       EvaluatedMetrics: { // EvaluatedMetricsMap
 * //         "<keys>": Number("double"),
 * //       },
 * //       EvaluatedRule: "STRING_VALUE",
 * //     },
 * //   ],
 * //   AnalyzerResults: [ // DataQualityAnalyzerResults
 * //     { // DataQualityAnalyzerResult
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EvaluationMessage: "STRING_VALUE",
 * //       EvaluatedMetrics: {
 * //         "<keys>": Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   Observations: [ // DataQualityObservations
 * //     { // DataQualityObservation
 * //       Description: "STRING_VALUE",
 * //       MetricBasedObservation: { // MetricBasedObservation
 * //         MetricName: "STRING_VALUE",
 * //         StatisticId: "STRING_VALUE",
 * //         MetricValues: { // DataQualityMetricValues
 * //           ActualValue: Number("double"),
 * //           ExpectedValue: Number("double"),
 * //           LowerLimit: Number("double"),
 * //           UpperLimit: Number("double"),
 * //         },
 * //         NewRules: [ // NewRules
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDataQualityResultCommandInput - {@link GetDataQualityResultCommandInput}
 * @returns {@link GetDataQualityResultCommandOutput}
 * @see {@link GetDataQualityResultCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityResultCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @public
 */
export class GetDataQualityResultCommand extends $Command
  .classBuilder<
    GetDataQualityResultCommandInput,
    GetDataQualityResultCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetDataQualityResult", {})
  .n("GlueClient", "GetDataQualityResultCommand")
  .f(void 0, GetDataQualityResultResponseFilterSensitiveLog)
  .ser(se_GetDataQualityResultCommand)
  .de(de_GetDataQualityResultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataQualityResultRequest;
      output: GetDataQualityResultResponse;
    };
    sdk: {
      input: GetDataQualityResultCommandInput;
      output: GetDataQualityResultCommandOutput;
    };
  };
}
