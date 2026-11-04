// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNotificationConfigurationsRequest, ListNotificationConfigurationsResponse } from "../models/models_0";
import { ListNotificationConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListNotificationConfigurationsCommandOutput extends ListNotificationConfigurationsResponse, __MetadataBearer {}

/**
 * List all notification configurations.
 *
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
 * //       EventType: "DEVICE_COMMAND" || "DEVICE_COMMAND_REQUEST" || "DEVICE_DISCOVERY_STATUS" || "DEVICE_EVENT" || "DEVICE_LIFE_CYCLE" || "DEVICE_STATE" || "DEVICE_OTA" || "DEVICE_WSS" || "CONNECTOR_ASSOCIATION" || "ACCOUNT_ASSOCIATION" || "CONNECTOR_ERROR_REPORT",
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class ListNotificationConfigurationsCommand extends command<ListNotificationConfigurationsCommandInput, ListNotificationConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListNotificationConfigurations",
  ListNotificationConfigurations$
) {
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
