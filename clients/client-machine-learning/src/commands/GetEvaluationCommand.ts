// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetEvaluationInput, GetEvaluationOutput } from "../models/models_0";
import { GetEvaluation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEvaluationCommand}.
 */
export interface GetEvaluationCommandInput extends GetEvaluationInput {}
/**
 * @public
 *
 * The output of {@link GetEvaluationCommand}.
 */
export interface GetEvaluationCommandOutput extends GetEvaluationOutput, __MetadataBearer {}

/**
 * <p>Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // GetEvaluationInput
 *   EvaluationId: "STRING_VALUE", // required
 * };
 * const command = new GetEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // GetEvaluationOutput
 * //   EvaluationId: "STRING_VALUE",
 * //   MLModelId: "STRING_VALUE",
 * //   EvaluationDataSourceId: "STRING_VALUE",
 * //   InputDataLocationS3: "STRING_VALUE",
 * //   CreatedByIamUser: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //   PerformanceMetrics: { // PerformanceMetrics
 * //     Properties: { // PerformanceMetricsProperties
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   LogUri: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   ComputeTime: Number("long"),
 * //   FinishedAt: new Date("TIMESTAMP"),
 * //   StartedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEvaluationCommandInput - {@link GetEvaluationCommandInput}
 * @returns {@link GetEvaluationCommandOutput}
 * @see {@link GetEvaluationCommandInput} for command's `input` shape.
 * @see {@link GetEvaluationCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource cannot be located.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 *
 * @public
 */
export class GetEvaluationCommand extends $Command
  .classBuilder<
    GetEvaluationCommandInput,
    GetEvaluationCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonML_20141212", "GetEvaluation", {})
  .n("MachineLearningClient", "GetEvaluationCommand")
  .sc(GetEvaluation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEvaluationInput;
      output: GetEvaluationOutput;
    };
    sdk: {
      input: GetEvaluationCommandInput;
      output: GetEvaluationCommandOutput;
    };
  };
}
