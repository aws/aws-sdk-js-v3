// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteConfigurationRecorderRequest } from "../models/models_0";
import { DeleteConfigurationRecorder } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationRecorderCommand}.
 */
export interface DeleteConfigurationRecorderCommandInput extends DeleteConfigurationRecorderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationRecorderCommand}.
 */
export interface DeleteConfigurationRecorderCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the customer managed configuration recorder.</p>
 *          <p>This operation does not delete the configuration information that
 * 			was previously recorded. You will be able to access the previously
 * 			recorded information by using the
 * 			<a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html">GetResourceConfigHistory</a> operation, but you will not
 * 			be able to access this information in the Config console until
 * 			you have created a new customer managed configuration recorder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteConfigurationRecorderRequest
 *   ConfigurationRecorderName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationRecorderCommandInput - {@link DeleteConfigurationRecorderCommandInput}
 * @returns {@link DeleteConfigurationRecorderCommandOutput}
 * @see {@link DeleteConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
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
export class DeleteConfigurationRecorderCommand extends $Command
  .classBuilder<
    DeleteConfigurationRecorderCommandInput,
    DeleteConfigurationRecorderCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DeleteConfigurationRecorder", {})
  .n("ConfigServiceClient", "DeleteConfigurationRecorderCommand")
  .sc(DeleteConfigurationRecorder)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigurationRecorderRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfigurationRecorderCommandInput;
      output: DeleteConfigurationRecorderCommandOutput;
    };
  };
}
