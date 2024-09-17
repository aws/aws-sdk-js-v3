// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteOptimizationJobRequest } from "../models/models_2";
import { de_DeleteOptimizationJobCommand, se_DeleteOptimizationJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @public
 */
export class DeleteOptimizationJobCommand extends $Command
  .classBuilder<
    DeleteOptimizationJobCommandInput,
    DeleteOptimizationJobCommandOutput,
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
  .s("SageMaker", "DeleteOptimizationJob", {})
  .n("SageMakerClient", "DeleteOptimizationJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOptimizationJobCommand)
  .de(de_DeleteOptimizationJobCommand)
  .build() {
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
