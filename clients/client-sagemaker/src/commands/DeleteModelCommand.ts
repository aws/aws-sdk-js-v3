// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteModelInput } from "../models/models_2";
import { DeleteModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteModelCommand}.
 */
export interface DeleteModelCommandInput extends DeleteModelInput {}
/**
 * @public
 *
 * The output of {@link DeleteModelCommand}.
 */
export interface DeleteModelCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that was created in SageMaker when you called the <code>CreateModel</code> API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteModelInput
 *   ModelName: "STRING_VALUE", // required
 * };
 * const command = new DeleteModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteModelCommandInput - {@link DeleteModelCommandInput}
 * @returns {@link DeleteModelCommandOutput}
 * @see {@link DeleteModelCommandInput} for command's `input` shape.
 * @see {@link DeleteModelCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteModelCommand extends command<DeleteModelCommandInput, DeleteModelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteModel",
  DeleteModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteModelInput;
      output: {};
    };
    sdk: {
      input: DeleteModelCommandInput;
      output: DeleteModelCommandOutput;
    };
  };
}
