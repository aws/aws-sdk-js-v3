// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopEdgePackagingJobRequest } from "../models/models_4";
import { de_StopEdgePackagingJobCommand, se_StopEdgePackagingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopEdgePackagingJobCommand}.
 */
export interface StopEdgePackagingJobCommandInput extends StopEdgePackagingJobRequest {}
/**
 * @public
 *
 * The output of {@link StopEdgePackagingJobCommand}.
 */
export interface StopEdgePackagingJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Request to stop an edge packaging job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StopEdgePackagingJobRequest
 *   EdgePackagingJobName: "STRING_VALUE", // required
 * };
 * const command = new StopEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopEdgePackagingJobCommandInput - {@link StopEdgePackagingJobCommandInput}
 * @returns {@link StopEdgePackagingJobCommandOutput}
 * @see {@link StopEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link StopEdgePackagingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class StopEdgePackagingJobCommand extends $Command
  .classBuilder<
    StopEdgePackagingJobCommandInput,
    StopEdgePackagingJobCommandOutput,
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
  .s("SageMaker", "StopEdgePackagingJob", {})
  .n("SageMakerClient", "StopEdgePackagingJobCommand")
  .f(void 0, void 0)
  .ser(se_StopEdgePackagingJobCommand)
  .de(de_StopEdgePackagingJobCommand)
  .build() {}
