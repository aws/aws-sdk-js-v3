// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopOptimizationJobRequest } from "../models/models_5";
import { de_StopOptimizationJobCommand, se_StopOptimizationJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopOptimizationJobCommand}.
 */
export interface StopOptimizationJobCommandInput extends StopOptimizationJobRequest {}
/**
 * @public
 *
 * The output of {@link StopOptimizationJobCommand}.
 */
export interface StopOptimizationJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Ends a running inference optimization job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopOptimizationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopOptimizationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopOptimizationJobRequest
 *   OptimizationJobName: "STRING_VALUE", // required
 * };
 * const command = new StopOptimizationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopOptimizationJobCommandInput - {@link StopOptimizationJobCommandInput}
 * @returns {@link StopOptimizationJobCommandOutput}
 * @see {@link StopOptimizationJobCommandInput} for command's `input` shape.
 * @see {@link StopOptimizationJobCommandOutput} for command's `response` shape.
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
export class StopOptimizationJobCommand extends $Command
  .classBuilder<
    StopOptimizationJobCommandInput,
    StopOptimizationJobCommandOutput,
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
  .s("SageMaker", "StopOptimizationJob", {})
  .n("SageMakerClient", "StopOptimizationJobCommand")
  .f(void 0, void 0)
  .ser(se_StopOptimizationJobCommand)
  .de(de_StopOptimizationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopOptimizationJobRequest;
      output: {};
    };
    sdk: {
      input: StopOptimizationJobCommandInput;
      output: StopOptimizationJobCommandOutput;
    };
  };
}
