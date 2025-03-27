// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopHumanLoopRequest, StopHumanLoopResponse } from "../models/models_0";
import { de_StopHumanLoopCommand, se_StopHumanLoopCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerA2IRuntimeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopHumanLoopCommand}.
 */
export interface StopHumanLoopCommandInput extends StopHumanLoopRequest {}
/**
 * @public
 *
 * The output of {@link StopHumanLoopCommand}.
 */
export interface StopHumanLoopCommandOutput extends StopHumanLoopResponse, __MetadataBearer {}

/**
 * <p>Stops the specified human loop.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, StopHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, StopHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const input = { // StopHumanLoopRequest
 *   HumanLoopName: "STRING_VALUE", // required
 * };
 * const command = new StopHumanLoopCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopHumanLoopCommandInput - {@link StopHumanLoopCommandInput}
 * @returns {@link StopHumanLoopCommandOutput}
 * @see {@link StopHumanLoopCommandInput} for command's `input` shape.
 * @see {@link StopHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for SageMakerA2IRuntimeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same AWS Region as your request, and try your request again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded
 *       the
 *       maximum number of requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The
 *       request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link SageMakerA2IRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerA2IRuntime service.</p>
 *
 *
 * @public
 */
export class StopHumanLoopCommand extends $Command
  .classBuilder<
    StopHumanLoopCommandInput,
    StopHumanLoopCommandOutput,
    SageMakerA2IRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerA2IRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerA2IRuntime", "StopHumanLoop", {})
  .n("SageMakerA2IRuntimeClient", "StopHumanLoopCommand")
  .f(void 0, void 0)
  .ser(se_StopHumanLoopCommand)
  .de(de_StopHumanLoopCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopHumanLoopRequest;
      output: {};
    };
    sdk: {
      input: StopHumanLoopCommandInput;
      output: StopHumanLoopCommandOutput;
    };
  };
}
