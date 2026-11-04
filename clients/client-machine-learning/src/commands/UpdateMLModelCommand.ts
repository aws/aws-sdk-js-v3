// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMLModelInput, UpdateMLModelOutput } from "../models/models_0";
import { UpdateMLModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMLModelCommand}.
 */
export interface UpdateMLModelCommandInput extends UpdateMLModelInput {}
/**
 * @public
 *
 * The output of {@link UpdateMLModelCommand}.
 */
export interface UpdateMLModelCommandOutput extends UpdateMLModelOutput, __MetadataBearer {}

/**
 * Updates the `MLModelName` and the `ScoreThreshold` of an `MLModel`.
 *
 * You can use the `GetMLModel` operation to view the contents of the updated data element.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // UpdateMLModelInput
 *   MLModelId: "STRING_VALUE", // required
 *   MLModelName: "STRING_VALUE",
 *   ScoreThreshold: Number("float"),
 * };
 * const command = new UpdateMLModelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMLModelOutput
 * //   MLModelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMLModelCommandInput - {@link UpdateMLModelCommandInput}
 * @returns {@link UpdateMLModelCommandOutput}
 * @see {@link UpdateMLModelCommandInput} for command's `input` shape.
 * @see {@link UpdateMLModelCommandOutput} for command's `response` shape.
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
export class UpdateMLModelCommand extends command<UpdateMLModelCommandInput, UpdateMLModelCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMLModel",
  UpdateMLModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMLModelInput;
      output: UpdateMLModelOutput;
    };
    sdk: {
      input: UpdateMLModelCommandInput;
      output: UpdateMLModelCommandOutput;
    };
  };
}
