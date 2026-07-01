// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInferenceComponentInput } from "../models/models_2";
import { DeleteInferenceComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInferenceComponentCommand}.
 */
export interface DeleteInferenceComponentCommandInput extends DeleteInferenceComponentInput {}
/**
 * @public
 *
 * The output of {@link DeleteInferenceComponentCommand}.
 */
export interface DeleteInferenceComponentCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an inference component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteInferenceComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteInferenceComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteInferenceComponentInput
 *   InferenceComponentName: "STRING_VALUE", // required
 * };
 * const command = new DeleteInferenceComponentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInferenceComponentCommandInput - {@link DeleteInferenceComponentCommandInput}
 * @returns {@link DeleteInferenceComponentCommandOutput}
 * @see {@link DeleteInferenceComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteInferenceComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteInferenceComponentCommand extends command<DeleteInferenceComponentCommandInput, DeleteInferenceComponentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInferenceComponent",
  DeleteInferenceComponent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInferenceComponentInput;
      output: {};
    };
    sdk: {
      input: DeleteInferenceComponentCommandInput;
      output: DeleteInferenceComponentCommandOutput;
    };
  };
}
