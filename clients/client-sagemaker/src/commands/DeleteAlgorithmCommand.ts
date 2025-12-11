// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAlgorithmInput } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteAlgorithm } from "../schemas/schemas_0";

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
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
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
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteAlgorithm", {})
  .n("SageMakerClient", "DeleteAlgorithmCommand")
  .sc(DeleteAlgorithm)
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
