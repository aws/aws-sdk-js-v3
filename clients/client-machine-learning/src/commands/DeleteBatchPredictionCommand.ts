// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBatchPredictionInput, DeleteBatchPredictionOutput } from "../models/models_0";
import { DeleteBatchPrediction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBatchPredictionCommand}.
 */
export interface DeleteBatchPredictionCommandInput extends DeleteBatchPredictionInput {}
/**
 * @public
 *
 * The output of {@link DeleteBatchPredictionCommand}.
 */
export interface DeleteBatchPredictionCommandOutput extends DeleteBatchPredictionOutput, __MetadataBearer {}

/**
 * Assigns the DELETED status to a `BatchPrediction`, rendering it unusable.
 *
 * After using the `DeleteBatchPrediction` operation, you can use the GetBatchPrediction operation to verify that the status of the `BatchPrediction` changed to DELETED.
 *
 *
 *
 * **Caution:** The result of the `DeleteBatchPrediction` operation is irreversible.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // DeleteBatchPredictionInput
 *   BatchPredictionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBatchPredictionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBatchPredictionOutput
 * //   BatchPredictionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBatchPredictionCommandInput - {@link DeleteBatchPredictionCommandInput}
 * @returns {@link DeleteBatchPredictionCommandOutput}
 * @see {@link DeleteBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link DeleteBatchPredictionCommandOutput} for command's `response` shape.
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
export class DeleteBatchPredictionCommand extends command<DeleteBatchPredictionCommandInput, DeleteBatchPredictionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBatchPrediction",
  DeleteBatchPrediction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBatchPredictionInput;
      output: DeleteBatchPredictionOutput;
    };
    sdk: {
      input: DeleteBatchPredictionCommandInput;
      output: DeleteBatchPredictionCommandOutput;
    };
  };
}
