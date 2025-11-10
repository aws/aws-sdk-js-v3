// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { ListNotificationConfigurationsRequest, ListNotificationConfigurationsResponse } from "../models/models_0";
import { ListNotificationConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotificationConfigurationsCommand}.
 */
export interface ListNotificationConfigurationsCommandInput extends ListNotificationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotificationConfigurationsCommand}.
 */
export interface ListNotificationConfigurationsCommandOutput
  extends ListNotificationConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p> List all notification configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListNotificationConfigurationsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListNotificationConfigurationsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListNotificationConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationConfigurationsResponse
 * //   NotificationConfigurationList: [ // NotificationConfigurationListDefinition
 * //     { // NotificationConfigurationSummary
 * //       EventType: "DEVICE_COMMAND" || "DEVICE_COMMAND_REQUEST" || "DEVICE_DISCOVERY_STATUS" || "DEVICE_EVENT" || "DEVICE_LIFE_CYCLE" || "DEVICE_STATE" || "DEVICE_OTA" || "CONNECTOR_ASSOCIATION" || "ACCOUNT_ASSOCIATION" || "CONNECTOR_ERROR_REPORT",
 * //       DestinationName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotificationConfigurationsCommandInput - {@link ListNotificationConfigurationsCommandInput}
 * @returns {@link ListNotificationConfigurationsCommandOutput}
 * @see {@link ListNotificationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
export class ListNotificationConfigurationsCommand extends $Command
  .classBuilder<
    ListNotificationConfigurationsCommandInput,
    ListNotificationConfigurationsCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "ListNotificationConfigurations", {})
  .n("IoTManagedIntegrationsClient", "ListNotificationConfigurationsCommand")
  .sc(ListNotificationConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotificationConfigurationsRequest;
      output: ListNotificationConfigurationsResponse;
    };
    sdk: {
      input: ListNotificationConfigurationsCommandInput;
      output: ListNotificationConfigurationsCommandOutput;
    };
  };
}
