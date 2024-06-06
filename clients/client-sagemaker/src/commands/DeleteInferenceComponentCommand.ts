// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInferenceComponentInput } from "../models/models_2";
import { de_DeleteInferenceComponentCommand, se_DeleteInferenceComponentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @public
 */
export class DeleteInferenceComponentCommand extends $Command
  .classBuilder<
    DeleteInferenceComponentCommandInput,
    DeleteInferenceComponentCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DeleteInferenceComponent", {})
  .n("SageMakerClient", "DeleteInferenceComponentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInferenceComponentCommand)
  .de(de_DeleteInferenceComponentCommand)
  .build() {}
