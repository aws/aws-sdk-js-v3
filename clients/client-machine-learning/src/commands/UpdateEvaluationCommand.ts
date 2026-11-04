// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEvaluationInput, UpdateEvaluationOutput } from "../models/models_0";
import { UpdateEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the `EvaluationName` of an `Evaluation`.
 *
 * You can use the `GetEvaluation` operation to view the contents of the updated data element.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
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
 *
 * An error on the server occurred when trying to process a request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * An error on the client occurred. Typically, the cause is an invalid input value.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource cannot be located.
 *
 * @throws {@link MachineLearningServiceException}
 *
 * Base exception class for all service exceptions from MachineLearning service.
 *
 * @public
 */
export class UpdateEvaluationCommand extends command<UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEvaluation",
  UpdateEvaluation$
) {
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
