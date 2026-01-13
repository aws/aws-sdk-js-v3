// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { DeleteNotificationConfigurationRequest } from "../models/models_0";
import { DeleteNotificationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNotificationConfigurationCommand}.
 */
export interface DeleteNotificationConfigurationCommandInput extends DeleteNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNotificationConfigurationCommand}.
 */
export interface DeleteNotificationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a notification configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteNotificationConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteNotificationConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteNotificationConfigurationRequest
 *   EventType: "DEVICE_COMMAND" || "DEVICE_COMMAND_REQUEST" || "DEVICE_DISCOVERY_STATUS" || "DEVICE_EVENT" || "DEVICE_LIFE_CYCLE" || "DEVICE_STATE" || "DEVICE_OTA" || "DEVICE_WSS" || "CONNECTOR_ASSOCIATION" || "ACCOUNT_ASSOCIATION" || "CONNECTOR_ERROR_REPORT", // required
 * };
 * const command = new DeleteNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotificationConfigurationCommandInput - {@link DeleteNotificationConfigurationCommandInput}
 * @returns {@link DeleteNotificationConfigurationCommandOutput}
 * @see {@link DeleteNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class DeleteNotificationConfigurationCommand extends $Command
  .classBuilder<
    DeleteNotificationConfigurationCommandInput,
    DeleteNotificationConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "DeleteNotificationConfiguration", {})
  .n("IoTManagedIntegrationsClient", "DeleteNotificationConfigurationCommand")
  .sc(DeleteNotificationConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotificationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteNotificationConfigurationCommandInput;
      output: DeleteNotificationConfigurationCommandOutput;
    };
  };
}
