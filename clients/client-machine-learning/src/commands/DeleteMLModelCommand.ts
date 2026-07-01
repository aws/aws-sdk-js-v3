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
 * <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p>
 *         <p>After using the <code>DeleteMLModel</code> operation, you can use the
 *           <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p>
 *
 *         <p>
 *             <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
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
