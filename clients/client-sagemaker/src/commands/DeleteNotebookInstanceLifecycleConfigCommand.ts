// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNotebookInstanceLifecycleConfigInput } from "../models/models_2";
import {
  de_DeleteNotebookInstanceLifecycleConfigCommand,
  se_DeleteNotebookInstanceLifecycleConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class DeleteNotebookInstanceLifecycleConfigCommand extends $Command
  .classBuilder<
    DeleteNotebookInstanceLifecycleConfigCommandInput,
    DeleteNotebookInstanceLifecycleConfigCommandOutput,
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
  .s("SageMaker", "DeleteNotebookInstanceLifecycleConfig", {})
  .n("SageMakerClient", "DeleteNotebookInstanceLifecycleConfigCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNotebookInstanceLifecycleConfigCommand)
  .de(de_DeleteNotebookInstanceLifecycleConfigCommand)
  .build() {
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
