// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOptimizationJobRequest } from "../models/models_2";
import { DeleteOptimizationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOptimizationJobCommand}.
 */
export interface DeleteOptimizationJobCommandInput extends DeleteOptimizationJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOptimizationJobCommand}.
 */
export interface DeleteOptimizationJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an optimization job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteOptimizationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteOptimizationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteOptimizationJobRequest
 *   OptimizationJobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteOptimizationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOptimizationJobCommandInput - {@link DeleteOptimizationJobCommandInput}
 * @returns {@link DeleteOptimizationJobCommandOutput}
 * @see {@link DeleteOptimizationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteOptimizationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteOptimizationJobCommand extends command<DeleteOptimizationJobCommandInput, DeleteOptimizationJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOptimizationJob",
  DeleteOptimizationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOptimizationJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteOptimizationJobCommandInput;
      output: DeleteOptimizationJobCommandOutput;
    };
  };
}
