// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEvaluationInput, DeleteEvaluationOutput } from "../models/models_0";
import { DeleteEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEvaluationCommand}.
 */
export interface DeleteEvaluationCommandInput extends DeleteEvaluationInput {}
/**
 * @public
 *
 * The output of {@link DeleteEvaluationCommand}.
 */
export interface DeleteEvaluationCommandOutput extends DeleteEvaluationOutput, __MetadataBearer {}

/**
 * Assigns the `DELETED` status to an `Evaluation`, rendering it unusable.
 *
 * After invoking the `DeleteEvaluation` operation, you can use the `GetEvaluation` operation to verify that the status of the `Evaluation` changed to `DELETED`.
 *
 * **Caution:** The results of the `DeleteEvaluation` operation are irreversible.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // DeleteEvaluationInput
 *   EvaluationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEvaluationOutput
 * //   EvaluationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteEvaluationCommandInput - {@link DeleteEvaluationCommandInput}
 * @returns {@link DeleteEvaluationCommandOutput}
 * @see {@link DeleteEvaluationCommandInput} for command's `input` shape.
 * @see {@link DeleteEvaluationCommandOutput} for command's `response` shape.
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
export class DeleteEvaluationCommand extends command<DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEvaluation",
  DeleteEvaluation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEvaluationInput;
      output: DeleteEvaluationOutput;
    };
    sdk: {
      input: DeleteEvaluationCommandInput;
      output: DeleteEvaluationCommandOutput;
    };
  };
}
