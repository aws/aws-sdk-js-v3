// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopTransformJobRequest } from "../models/models_5";
import { de_StopTransformJobCommand, se_StopTransformJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopTransformJobCommand}.
 */
export interface StopTransformJobCommandInput extends StopTransformJobRequest {}
/**
 * @public
 *
 * The output of {@link StopTransformJobCommand}.
 */
export interface StopTransformJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a batch transform job.</p>
 *          <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job
 *             changes to <code>Stopping</code>. After Amazon SageMaker
 *             stops
 *             the job, the status is set to <code>Stopped</code>. When you stop a batch transform job before
 *             it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTransformJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StopTransformJobRequest
 *   TransformJobName: "STRING_VALUE", // required
 * };
 * const command = new StopTransformJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTransformJobCommandInput - {@link StopTransformJobCommandInput}
 * @returns {@link StopTransformJobCommandOutput}
 * @see {@link StopTransformJobCommandInput} for command's `input` shape.
 * @see {@link StopTransformJobCommandOutput} for command's `response` shape.
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
export class StopTransformJobCommand extends $Command
  .classBuilder<
    StopTransformJobCommandInput,
    StopTransformJobCommandOutput,
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
  .s("SageMaker", "StopTransformJob", {})
  .n("SageMakerClient", "StopTransformJobCommand")
  .f(void 0, void 0)
  .ser(se_StopTransformJobCommand)
  .de(de_StopTransformJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTransformJobRequest;
      output: {};
    };
    sdk: {
      input: StopTransformJobCommandInput;
      output: StopTransformJobCommandOutput;
    };
  };
}
