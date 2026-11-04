// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartConfigurationRecorderRequest } from "../models/models_0";
import { StartConfigurationRecorder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts the customer managed configuration recorder. The customer managed configuration recorder will begin recording configuration changes for the resource types you specify.
 *
 * You must have created a delivery channel to successfully start the customer managed configuration recorder. You can use the [PutDeliveryChannel](https://docs.aws.amazon.com/config/latest/APIReference/API_PutDeliveryChannel.html) operation to create a delivery channel.
 *
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
 *
 * There is no delivery channel available to record configurations.
 *
 * @throws {@link NoSuchConfigurationRecorderException} (client fault)
 *
 * You have specified a configuration recorder that does not exist.
 *
 * @throws {@link UnmodifiableEntityException} (client fault)
 *
 * The requested operation is not valid.
 *
 * For [PutConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html), you will see this exception because you cannot use this operation to create a service-linked configuration recorder. Use the [PutServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html) operation to create a service-linked configuration recorder.
 *
 * For [DeleteConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html), you will see this exception because you cannot use this operation to delete a service-linked configuration recorder. Use the [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html) operation to delete a service-linked configuration recorder.
 *
 * For [StartConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html) and [StopConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html), you will see this exception because these operations do not affect service-linked configuration recorders. Service-linked configuration recorders are always recording. To stop recording, you must delete the service-linked configuration recorder. Use the [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html) operation to delete a service-linked configuration recorder.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class StartConfigurationRecorderCommand extends command<StartConfigurationRecorderCommandInput, StartConfigurationRecorderCommandOutput>(
  _ep0,
  _mw0,
  "StartConfigurationRecorder",
  StartConfigurationRecorder$
) {
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
