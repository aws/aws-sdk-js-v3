// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopAutoMLJobRequest } from "../models/models_5";
import { de_StopAutoMLJobCommand, se_StopAutoMLJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopAutoMLJobCommand}.
 */
export interface StopAutoMLJobCommandInput extends StopAutoMLJobRequest {}
/**
 * @public
 *
 * The output of {@link StopAutoMLJobCommand}.
 */
export interface StopAutoMLJobCommandOutput extends __MetadataBearer {}

/**
 * <p>A method for forcing a running job to shut down.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StopAutoMLJobRequest
 *   AutoMLJobName: "STRING_VALUE", // required
 * };
 * const command = new StopAutoMLJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAutoMLJobCommandInput - {@link StopAutoMLJobCommandInput}
 * @returns {@link StopAutoMLJobCommandOutput}
 * @see {@link StopAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link StopAutoMLJobCommandOutput} for command's `response` shape.
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
export class StopAutoMLJobCommand extends $Command
  .classBuilder<
    StopAutoMLJobCommandInput,
    StopAutoMLJobCommandOutput,
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
  .s("SageMaker", "StopAutoMLJob", {})
  .n("SageMakerClient", "StopAutoMLJobCommand")
  .f(void 0, void 0)
  .ser(se_StopAutoMLJobCommand)
  .de(de_StopAutoMLJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopAutoMLJobRequest;
      output: {};
    };
    sdk: {
      input: StopAutoMLJobCommandInput;
      output: StopAutoMLJobCommandOutput;
    };
  };
}
