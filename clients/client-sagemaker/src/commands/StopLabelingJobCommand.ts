// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopLabelingJobRequest } from "../models/models_4";
import { de_StopLabelingJobCommand, se_StopLabelingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopLabelingJobCommand}.
 */
export interface StopLabelingJobCommandInput extends StopLabelingJobRequest {}
/**
 * @public
 *
 * The output of {@link StopLabelingJobCommand}.
 */
export interface StopLabelingJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a running labeling job. A job that is stopped cannot be restarted. Any results
 *             obtained before the job is stopped are placed in the Amazon S3 output bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopLabelingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopLabelingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StopLabelingJobRequest
 *   LabelingJobName: "STRING_VALUE", // required
 * };
 * const command = new StopLabelingJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopLabelingJobCommandInput - {@link StopLabelingJobCommandInput}
 * @returns {@link StopLabelingJobCommandOutput}
 * @see {@link StopLabelingJobCommandInput} for command's `input` shape.
 * @see {@link StopLabelingJobCommandOutput} for command's `response` shape.
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
export class StopLabelingJobCommand extends $Command
  .classBuilder<
    StopLabelingJobCommandInput,
    StopLabelingJobCommandOutput,
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
  .s("SageMaker", "StopLabelingJob", {})
  .n("SageMakerClient", "StopLabelingJobCommand")
  .f(void 0, void 0)
  .ser(se_StopLabelingJobCommand)
  .de(de_StopLabelingJobCommand)
  .build() {}
