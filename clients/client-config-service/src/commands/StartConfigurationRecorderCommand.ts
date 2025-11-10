// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartConfigurationRecorderRequest } from "../models/models_1";
import { StartConfigurationRecorder } from "../schemas/schemas_0";

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
 * <p>Starts the customer managed configuration recorder. The customer managed configuration recorder will begin recording configuration changes for the resource types you specify.</p>
 *          <p>You must have created a delivery channel to
 * 			successfully start the customer managed configuration recorder. You can use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutDeliveryChannel.html">PutDeliveryChannel</a> operation to create a delivery channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
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
 * @throws {@link UnmodifiableEntityException} (client fault)
 *  <p>The requested operation is not valid.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html">PutConfigurationRecorder</a>,
 * 			you will see this exception because you cannot use this operation to create a service-linked configuration recorder. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a> operation to create a service-linked configuration
 * 			recorder.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html">DeleteConfigurationRecorder</a>, you will see this exception because you cannot use this operation to delete a service-linked configuration recorder. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a> operation to delete a service-linked configuration
 * 			recorder.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html">StartConfigurationRecorder</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html">StopConfigurationRecorder</a>, you will see this exception because these operations do not affect service-linked configuration recorders.
 * 			Service-linked configuration recorders are always recording. To stop recording, you must delete the service-linked configuration recorder. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a> operation to delete a service-linked configuration
 * 			recorder.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "StartConfigurationRecorder", {})
  .n("ConfigServiceClient", "StartConfigurationRecorderCommand")
  .sc(StartConfigurationRecorder)
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
