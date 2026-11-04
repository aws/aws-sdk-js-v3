// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMLModelInput, DeleteMLModelOutput } from "../models/models_0";
import { DeleteMLModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMLModelCommand}.
 */
export interface DeleteMLModelCommandInput extends DeleteMLModelInput {}
/**
 * @public
 *
 * The output of {@link DeleteMLModelCommand}.
 */
export interface DeleteMLModelCommandOutput extends DeleteMLModelOutput, __MetadataBearer {}

/**
 * Assigns the `DELETED` status to an `MLModel`, rendering it unusable.
 *
 * After using the `DeleteMLModel` operation, you can use the `GetMLModel` operation to verify that the status of the `MLModel` changed to DELETED.
 *
 *
 *
 * **Caution:** The result of the `DeleteMLModel` operation is irreversible.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // DeleteMLModelInput
 *   MLModelId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMLModelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMLModelOutput
 * //   MLModelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMLModelCommandInput - {@link DeleteMLModelCommandInput}
 * @returns {@link DeleteMLModelCommandOutput}
 * @see {@link DeleteMLModelCommandInput} for command's `input` shape.
 * @see {@link DeleteMLModelCommandOutput} for command's `response` shape.
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
export class DeleteMLModelCommand extends command<DeleteMLModelCommandInput, DeleteMLModelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMLModel",
  DeleteMLModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMLModelInput;
      output: DeleteMLModelOutput;
    };
    sdk: {
      input: DeleteMLModelCommandInput;
      output: DeleteMLModelCommandOutput;
    };
  };
}
