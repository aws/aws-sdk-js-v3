// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartConfigurationRecorderRequest } from "../models/models_1";
import { de_StartConfigurationRecorderCommand, se_StartConfigurationRecorderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartConfigurationRecorderCommand}.
 */
export interface StartConfigurationRecorderCommandInput extends StartConfigurationRecorderRequest {}
/**
 * @public
 *
 * The output of {@link StartConfigurationRecorderCommand}.
 */
export interface StartConfigurationRecorderCommandOutput extends __MetadataBearer {}

/**
 * <p>Starts recording configurations of the Amazon Web Services resources you have
 * 			selected to record in your Amazon Web Services account.</p>
 *          <p>You must have created at least one delivery channel to
 * 			successfully start the configuration recorder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // StartConfigurationRecorderRequest
 *   ConfigurationRecorderName: "STRING_VALUE", // required
 * };
 * const command = new StartConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartConfigurationRecorderCommandInput - {@link StartConfigurationRecorderCommandInput}
 * @returns {@link StartConfigurationRecorderCommandOutput}
 * @see {@link StartConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link StartConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoAvailableDeliveryChannelException} (client fault)
 *  <p>There is no delivery channel available to record
 * 			configurations.</p>
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
export class StartConfigurationRecorderCommand extends $Command
  .classBuilder<
    StartConfigurationRecorderCommandInput,
    StartConfigurationRecorderCommandOutput,
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
  .s("StarlingDoveService", "StartConfigurationRecorder", {})
  .n("ConfigServiceClient", "StartConfigurationRecorderCommand")
  .f(void 0, void 0)
  .ser(se_StartConfigurationRecorderCommand)
  .de(de_StartConfigurationRecorderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartConfigurationRecorderRequest;
      output: {};
    };
    sdk: {
      input: StartConfigurationRecorderCommandInput;
      output: StartConfigurationRecorderCommandOutput;
    };
  };
}
