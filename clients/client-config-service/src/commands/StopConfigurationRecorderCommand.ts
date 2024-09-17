// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopConfigurationRecorderRequest } from "../models/models_1";
import { de_StopConfigurationRecorderCommand, se_StopConfigurationRecorderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopConfigurationRecorderCommand}.
 */
export interface StopConfigurationRecorderCommandInput extends StopConfigurationRecorderRequest {}
/**
 * @public
 *
 * The output of {@link StopConfigurationRecorderCommand}.
 */
export interface StopConfigurationRecorderCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StopConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StopConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // StopConfigurationRecorderRequest
 *   ConfigurationRecorderName: "STRING_VALUE", // required
 * };
 * const command = new StopConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopConfigurationRecorderCommandInput - {@link StopConfigurationRecorderCommandInput}
 * @returns {@link StopConfigurationRecorderCommandOutput}
 * @see {@link StopConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link StopConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigurationRecorderException} (client fault)
 *  <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class StopConfigurationRecorderCommand extends $Command
  .classBuilder<
    StopConfigurationRecorderCommandInput,
    StopConfigurationRecorderCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "StopConfigurationRecorder", {})
  .n("ConfigServiceClient", "StopConfigurationRecorderCommand")
  .f(void 0, void 0)
  .ser(se_StopConfigurationRecorderCommand)
  .de(de_StopConfigurationRecorderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopConfigurationRecorderRequest;
      output: {};
    };
    sdk: {
      input: StopConfigurationRecorderCommandInput;
      output: StopConfigurationRecorderCommandOutput;
    };
  };
}
