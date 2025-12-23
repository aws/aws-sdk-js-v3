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
import type { GetNotificationConfigurationRequest, GetNotificationConfigurationResponse } from "../models/models_0";
import { GetNotificationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNotificationConfigurationCommand}.
 */
export interface GetNotificationConfigurationCommandInput extends GetNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetNotificationConfigurationCommand}.
 */
export interface GetNotificationConfigurationCommandOutput extends GetNotificationConfigurationResponse, __MetadataBearer {}

/**
 * <p> Get a notification configuration for a specified event type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetNotificationConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetNotificationConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetNotificationConfigurationRequest
 *   EventType: "DEVICE_COMMAND" || "DEVICE_COMMAND_REQUEST" || "DEVICE_DISCOVERY_STATUS" || "DEVICE_EVENT" || "DEVICE_LIFE_CYCLE" || "DEVICE_STATE" || "DEVICE_OTA" || "CONNECTOR_ASSOCIATION" || "ACCOUNT_ASSOCIATION" || "CONNECTOR_ERROR_REPORT", // required
 * };
 * const command = new GetNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetNotificationConfigurationResponse
 * //   EventType: "DEVICE_COMMAND" || "DEVICE_COMMAND_REQUEST" || "DEVICE_DISCOVERY_STATUS" || "DEVICE_EVENT" || "DEVICE_LIFE_CYCLE" || "DEVICE_STATE" || "DEVICE_OTA" || "CONNECTOR_ASSOCIATION" || "ACCOUNT_ASSOCIATION" || "CONNECTOR_ERROR_REPORT",
 * //   DestinationName: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNotificationConfigurationCommandInput - {@link GetNotificationConfigurationCommandInput}
 * @returns {@link GetNotificationConfigurationCommandOutput}
 * @see {@link GetNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetNotificationConfigurationCommandOutput} for command's `response` shape.
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
export class GetNotificationConfigurationCommand extends $Command
  .classBuilder<
    GetNotificationConfigurationCommandInput,
    GetNotificationConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetNotificationConfiguration", {})
  .n("IoTManagedIntegrationsClient", "GetNotificationConfigurationCommand")
  .sc(GetNotificationConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNotificationConfigurationRequest;
      output: GetNotificationConfigurationResponse;
    };
    sdk: {
      input: GetNotificationConfigurationCommandInput;
      output: GetNotificationConfigurationCommandOutput;
    };
  };
}
