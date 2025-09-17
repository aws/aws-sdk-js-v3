// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateEvaluationInput, CreateEvaluationOutput } from "../models/models_0";
import { de_CreateEvaluationCommand, se_CreateEvaluationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEvaluationCommand}.
 */
export interface CreateEvaluationCommandInput extends CreateEvaluationInput {}
/**
 * @public
 *
 * The output of {@link CreateEvaluationCommand}.
 */
export interface CreateEvaluationCommandOutput extends CreateEvaluationOutput, __MetadataBearer {}

/**
 * <p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code>
 *           for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a
 *             summary so that you know how effective the <code>MLModel</code> functions on the test
 *           data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>.
 *
 *         </p>
 *         <p>
 *             <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately
 *             returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use,
 *             Amazon ML sets the status to <code>COMPLETED</code>.
 *         </p>
 *         <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // CreateEvaluationInput
 *   EvaluationId: "STRING_VALUE", // required
 *   EvaluationName: "STRING_VALUE",
 *   MLModelId: "STRING_VALUE", // required
 *   EvaluationDataSourceId: "STRING_VALUE", // required
 * };
 * const command = new CreateEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // CreateEvaluationOutput
 * //   EvaluationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEvaluationCommandInput - {@link CreateEvaluationCommandInput}
 * @returns {@link CreateEvaluationCommandOutput}
 * @see {@link CreateEvaluationCommandInput} for command's `input` shape.
 * @see {@link CreateEvaluationCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 *
 * @public
 */
export class CreateEvaluationCommand extends $Command
  .classBuilder<
    CreateEvaluationCommandInput,
    CreateEvaluationCommandOutput,
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
  .s("AmazonML_20141212", "CreateEvaluation", {})
  .n("MachineLearningClient", "CreateEvaluationCommand")
  .f(void 0, void 0)
  .ser(se_CreateEvaluationCommand)
  .de(de_CreateEvaluationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEvaluationInput;
      output: CreateEvaluationOutput;
    };
    sdk: {
      input: CreateEvaluationCommandInput;
      output: CreateEvaluationCommandOutput;
    };
  };
}
