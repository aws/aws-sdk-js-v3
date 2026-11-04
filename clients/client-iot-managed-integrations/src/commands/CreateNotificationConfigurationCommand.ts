// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateNotificationConfigurationRequest,
  CreateNotificationConfigurationResponse,
} from "../models/models_0";
import { CreateNotificationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNotificationConfigurationCommand}.
 */
export interface CreateNotificationConfigurationCommandInput extends CreateNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateNotificationConfigurationCommand}.
 */
export interface CreateNotificationConfigurationCommandOutput extends CreateNotificationConfigurationResponse, __MetadataBearer {}

/**
 * Creates a notification configuration. A configuration is a connection between an event type and a destination that you have already created.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateNotificationConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateNotificationConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateNotificationConfigurationRequest
 *   EventType: "DEVICE_COMMAND" || "DEVICE_COMMAND_REQUEST" || "DEVICE_DISCOVERY_STATUS" || "DEVICE_EVENT" || "DEVICE_LIFE_CYCLE" || "DEVICE_STATE" || "DEVICE_OTA" || "DEVICE_WSS" || "CONNECTOR_ASSOCIATION" || "ACCOUNT_ASSOCIATION" || "CONNECTOR_ERROR_REPORT", // required
 *   DestinationName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotificationConfigurationResponse
 * //   EventType: "DEVICE_COMMAND" || "DEVICE_COMMAND_REQUEST" || "DEVICE_DISCOVERY_STATUS" || "DEVICE_EVENT" || "DEVICE_LIFE_CYCLE" || "DEVICE_STATE" || "DEVICE_OTA" || "DEVICE_WSS" || "CONNECTOR_ASSOCIATION" || "ACCOUNT_ASSOCIATION" || "CONNECTOR_ERROR_REPORT",
 * // };
 *
 * ```
 *
 * @param CreateNotificationConfigurationCommandInput - {@link CreateNotificationConfigurationCommandInput}
 * @returns {@link CreateNotificationConfigurationCommandOutput}
 * @see {@link CreateNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict with the request.
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
export class CreateNotificationConfigurationCommand extends command<CreateNotificationConfigurationCommandInput, CreateNotificationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateNotificationConfiguration",
  CreateNotificationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotificationConfigurationRequest;
      output: CreateNotificationConfigurationResponse;
    };
    sdk: {
      input: CreateNotificationConfigurationCommandInput;
      output: CreateNotificationConfigurationCommandOutput;
    };
  };
}
