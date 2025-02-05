// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { StopResourceRequest } from "../models/models_0";
import { de_StopResourceCommand, se_StopResourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopResourceCommand}.
 */
export interface StopResourceCommandInput extends StopResourceRequest {}
/**
 * @public
 *
 * The output of {@link StopResourceCommand}.
 */
export interface StopResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a resource.</p>
 *          <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and
 *             <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been
 *          stopped.</p>
 *          <p>This operation can be applied to the following resources (and their corresponding child
 *          resources):</p>
 *          <ul>
 *             <li>
 *                <p>Dataset Import Job</p>
 *             </li>
 *             <li>
 *                <p>Predictor Job</p>
 *             </li>
 *             <li>
 *                <p>Forecast Job</p>
 *             </li>
 *             <li>
 *                <p>Forecast Export Job</p>
 *             </li>
 *             <li>
 *                <p>Predictor Backtest Export Job</p>
 *             </li>
 *             <li>
 *                <p>Explainability Job</p>
 *             </li>
 *             <li>
 *                <p>Explainability Export Job</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, StopResourceCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, StopResourceCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ForecastClient(config);
 * const input = { // StopResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new StopResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopResourceCommandInput - {@link StopResourceCommandInput}
 * @returns {@link StopResourceCommandOutput}
 * @see {@link StopResourceCommandInput} for command's `input` shape.
 * @see {@link StopResourceCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 * @public
 */
export class StopResourceCommand extends $Command
  .classBuilder<
    StopResourceCommandInput,
    StopResourceCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecast", "StopResource", {})
  .n("ForecastClient", "StopResourceCommand")
  .f(void 0, void 0)
  .ser(se_StopResourceCommand)
  .de(de_StopResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopResourceRequest;
      output: {};
    };
    sdk: {
      input: StopResourceCommandInput;
      output: StopResourceCommandOutput;
    };
  };
}
