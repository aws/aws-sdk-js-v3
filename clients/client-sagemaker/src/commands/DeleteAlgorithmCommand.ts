// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAlgorithmInput } from "../models/models_2";
import { de_DeleteAlgorithmCommand, se_DeleteAlgorithmCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAlgorithmCommand}.
 */
export interface DeleteAlgorithmCommandInput extends DeleteAlgorithmInput {}
/**
 * @public
 *
 * The output of {@link DeleteAlgorithmCommand}.
 */
export interface DeleteAlgorithmCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified algorithm from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAlgorithmCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAlgorithmCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteAlgorithmInput
 *   AlgorithmName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAlgorithmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAlgorithmCommandInput - {@link DeleteAlgorithmCommandInput}
 * @returns {@link DeleteAlgorithmCommandOutput}
 * @see {@link DeleteAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DeleteAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteAlgorithmCommand extends $Command
  .classBuilder<
    DeleteAlgorithmCommandInput,
    DeleteAlgorithmCommandOutput,
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
  .s("SageMaker", "DeleteAlgorithm", {})
  .n("SageMakerClient", "DeleteAlgorithmCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAlgorithmCommand)
  .de(de_DeleteAlgorithmCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAlgorithmInput;
      output: {};
    };
    sdk: {
      input: DeleteAlgorithmCommandInput;
      output: DeleteAlgorithmCommandOutput;
    };
  };
}
