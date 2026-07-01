// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNotebookInstanceLifecycleConfigInput } from "../models/models_2";
import { DeleteNotebookInstanceLifecycleConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNotebookInstanceLifecycleConfigCommand}.
 */
export interface DeleteNotebookInstanceLifecycleConfigCommandInput extends DeleteNotebookInstanceLifecycleConfigInput {}
/**
 * @public
 *
 * The output of {@link DeleteNotebookInstanceLifecycleConfigCommand}.
 */
export interface DeleteNotebookInstanceLifecycleConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a notebook instance lifecycle configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteNotebookInstanceLifecycleConfigInput
 *   NotebookInstanceLifecycleConfigName: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotebookInstanceLifecycleConfigCommandInput - {@link DeleteNotebookInstanceLifecycleConfigCommandInput}
 * @returns {@link DeleteNotebookInstanceLifecycleConfigCommandOutput}
 * @see {@link DeleteNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteNotebookInstanceLifecycleConfigCommand extends command<DeleteNotebookInstanceLifecycleConfigCommandInput, DeleteNotebookInstanceLifecycleConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNotebookInstanceLifecycleConfig",
  DeleteNotebookInstanceLifecycleConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotebookInstanceLifecycleConfigInput;
      output: {};
    };
    sdk: {
      input: DeleteNotebookInstanceLifecycleConfigCommandInput;
      output: DeleteNotebookInstanceLifecycleConfigCommandOutput;
    };
  };
}
