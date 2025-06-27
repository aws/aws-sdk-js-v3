// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateEvaluationInput, UpdateEvaluationOutput } from "../models/models_0";
import { de_UpdateEvaluationCommand, se_UpdateEvaluationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEvaluationCommand}.
 */
export interface UpdateEvaluationCommandInput extends UpdateEvaluationInput {}
/**
 * @public
 *
 * The output of {@link UpdateEvaluationCommand}.
 */
export interface UpdateEvaluationCommandOutput extends UpdateEvaluationOutput, __MetadataBearer {}

/**
 * <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p>
 *         <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // UpdateEvaluationInput
 *   EvaluationId: "STRING_VALUE", // required
 *   EvaluationName: "STRING_VALUE", // required
 * };
 * const command = new UpdateEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEvaluationOutput
 * //   EvaluationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEvaluationCommandInput - {@link UpdateEvaluationCommandInput}
 * @returns {@link UpdateEvaluationCommandOutput}
 * @see {@link UpdateEvaluationCommandInput} for command's `input` shape.
 * @see {@link UpdateEvaluationCommandOutput} for command's `response` shape.
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
export class UpdateEvaluationCommand extends $Command
  .classBuilder<
    UpdateEvaluationCommandInput,
    UpdateEvaluationCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonML_20141212", "UpdateEvaluation", {})
  .n("MachineLearningClient", "UpdateEvaluationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEvaluationCommand)
  .de(de_UpdateEvaluationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEvaluationInput;
      output: UpdateEvaluationOutput;
    };
    sdk: {
      input: UpdateEvaluationCommandInput;
      output: UpdateEvaluationCommandOutput;
    };
  };
}
