// smithy-typescript generated code
import { getPredictEndpointPlugin } from "@aws-sdk/middleware-sdk-machinelearning";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { PredictInput, PredictOutput } from "../models/models_0";
import { de_PredictCommand, se_PredictCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PredictCommand}.
 */
export interface PredictCommandInput extends PredictInput {}
/**
 * @public
 *
 * The output of {@link PredictCommand}.
 */
export interface PredictCommandOutput extends PredictOutput, __MetadataBearer {}

/**
 * <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p>
 *         <p>
 *             <b>Note:</b> Not all response parameters will be populated. Whether a
 *           response parameter is populated depends on the type of model requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, PredictCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, PredictCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // PredictInput
 *   MLModelId: "STRING_VALUE", // required
 *   Record: { // Record // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PredictEndpoint: "STRING_VALUE", // required
 * };
 * const command = new PredictCommand(input);
 * const response = await client.send(command);
 * // { // PredictOutput
 * //   Prediction: { // Prediction
 * //     predictedLabel: "STRING_VALUE",
 * //     predictedValue: Number("float"),
 * //     predictedScores: { // ScoreValuePerLabelMap
 * //       "<keys>": Number("float"),
 * //     },
 * //     details: { // DetailsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PredictCommandInput - {@link PredictCommandInput}
 * @returns {@link PredictCommandOutput}
 * @see {@link PredictCommandInput} for command's `input` shape.
 * @see {@link PredictCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>.</p>
 *
 * @throws {@link PredictorNotMountedException} (client fault)
 *  <p>The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>.</p>
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
export class PredictCommand extends $Command
  .classBuilder<
    PredictCommandInput,
    PredictCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getPredictEndpointPlugin(config),
    ];
  })
  .s("AmazonML_20141212", "Predict", {})
  .n("MachineLearningClient", "PredictCommand")
  .f(void 0, void 0)
  .ser(se_PredictCommand)
  .de(de_PredictCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PredictInput;
      output: PredictOutput;
    };
    sdk: {
      input: PredictCommandInput;
      output: PredictCommandOutput;
    };
  };
}
