// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBatchPredictionInput, UpdateBatchPredictionOutput } from "../models/models_0";
import { UpdateBatchPrediction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBatchPredictionCommand}.
 */
export interface UpdateBatchPredictionCommandInput extends UpdateBatchPredictionInput {}
/**
 * @public
 *
 * The output of {@link UpdateBatchPredictionCommand}.
 */
export interface UpdateBatchPredictionCommandOutput extends UpdateBatchPredictionOutput, __MetadataBearer {}

/**
 * <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p>
 *         <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // UpdateBatchPredictionInput
 *   BatchPredictionId: "STRING_VALUE", // required
 *   BatchPredictionName: "STRING_VALUE", // required
 * };
 * const command = new UpdateBatchPredictionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBatchPredictionOutput
 * //   BatchPredictionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBatchPredictionCommandInput - {@link UpdateBatchPredictionCommandInput}
 * @returns {@link UpdateBatchPredictionCommandOutput}
 * @see {@link UpdateBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link UpdateBatchPredictionCommandOutput} for command's `response` shape.
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
export class UpdateBatchPredictionCommand extends command<UpdateBatchPredictionCommandInput, UpdateBatchPredictionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBatchPrediction",
  UpdateBatchPrediction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBatchPredictionInput;
      output: UpdateBatchPredictionOutput;
    };
    sdk: {
      input: UpdateBatchPredictionCommandInput;
      output: UpdateBatchPredictionCommandOutput;
    };
  };
}
