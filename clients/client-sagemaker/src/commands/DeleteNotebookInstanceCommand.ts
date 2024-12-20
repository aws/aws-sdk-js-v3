// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNotebookInstanceInput } from "../models/models_2";
import { de_DeleteNotebookInstanceCommand, se_DeleteNotebookInstanceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNotebookInstanceCommand}.
 */
export interface DeleteNotebookInstanceCommandInput extends DeleteNotebookInstanceInput {}
/**
 * @public
 *
 * The output of {@link DeleteNotebookInstanceCommand}.
 */
export interface DeleteNotebookInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p> Deletes an SageMaker AI notebook instance. Before you can delete a notebook
 *             instance, you must call the <code>StopNotebookInstance</code> API. </p>
 *          <important>
 *             <p>When you delete a notebook instance, you lose all of your data. SageMaker AI removes the ML compute instance, and deletes the ML storage volume and the
 *                 network interface associated with the notebook instance. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteNotebookInstanceInput
 *   NotebookInstanceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotebookInstanceCommandInput - {@link DeleteNotebookInstanceCommandInput}
 * @returns {@link DeleteNotebookInstanceCommandOutput}
 * @see {@link DeleteNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DeleteNotebookInstanceCommand extends $Command
  .classBuilder<
    DeleteNotebookInstanceCommandInput,
    DeleteNotebookInstanceCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DeleteNotebookInstance", {})
  .n("SageMakerClient", "DeleteNotebookInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNotebookInstanceCommand)
  .de(de_DeleteNotebookInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotebookInstanceInput;
      output: {};
    };
    sdk: {
      input: DeleteNotebookInstanceCommandInput;
      output: DeleteNotebookInstanceCommandOutput;
    };
  };
}
