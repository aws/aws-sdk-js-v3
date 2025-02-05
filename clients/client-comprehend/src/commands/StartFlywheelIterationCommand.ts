// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartFlywheelIterationRequest, StartFlywheelIterationResponse } from "../models/models_0";
import { de_StartFlywheelIterationCommand, se_StartFlywheelIterationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartFlywheelIterationCommand}.
 */
export interface StartFlywheelIterationCommandInput extends StartFlywheelIterationRequest {}
/**
 * @public
 *
 * The output of {@link StartFlywheelIterationCommand}.
 */
export interface StartFlywheelIterationCommandOutput extends StartFlywheelIterationResponse, __MetadataBearer {}

/**
 * <p>Start the flywheel iteration.This operation uses any new datasets to train a new model version.
 *       For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartFlywheelIterationCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartFlywheelIterationCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ComprehendClient(config);
 * const input = { // StartFlywheelIterationRequest
 *   FlywheelArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartFlywheelIterationCommand(input);
 * const response = await client.send(command);
 * // { // StartFlywheelIterationResponse
 * //   FlywheelArn: "STRING_VALUE",
 * //   FlywheelIterationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFlywheelIterationCommandInput - {@link StartFlywheelIterationCommandInput}
 * @returns {@link StartFlywheelIterationCommandOutput}
 * @see {@link StartFlywheelIterationCommandInput} for command's `input` shape.
 * @see {@link StartFlywheelIterationCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 * @public
 */
export class StartFlywheelIterationCommand extends $Command
  .classBuilder<
    StartFlywheelIterationCommandInput,
    StartFlywheelIterationCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "StartFlywheelIteration", {})
  .n("ComprehendClient", "StartFlywheelIterationCommand")
  .f(void 0, void 0)
  .ser(se_StartFlywheelIterationCommand)
  .de(de_StartFlywheelIterationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFlywheelIterationRequest;
      output: StartFlywheelIterationResponse;
    };
    sdk: {
      input: StartFlywheelIterationCommandInput;
      output: StartFlywheelIterationCommandOutput;
    };
  };
}
