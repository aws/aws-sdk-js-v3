// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateResourceEventConfigurationRequest,
  UpdateResourceEventConfigurationResponse,
} from "../models/models_1";
import { UpdateResourceEventConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateResourceEventConfigurationCommand}.
 */
export interface UpdateResourceEventConfigurationCommandInput extends UpdateResourceEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceEventConfigurationCommand}.
 */
export interface UpdateResourceEventConfigurationCommandOutput extends UpdateResourceEventConfigurationResponse, __MetadataBearer {}

/**
 * Update the event configuration for a particular resource identifier.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateResourceEventConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateResourceEventConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateResourceEventConfigurationRequest
 *   Identifier: "STRING_VALUE", // required
 *   IdentifierType: "PartnerAccountId" || "DevEui" || "GatewayEui" || "WirelessDeviceId" || "WirelessGatewayId", // required
 *   PartnerType: "Sidewalk",
 *   DeviceRegistrationState: { // DeviceRegistrationStateEventConfiguration
 *     Sidewalk: { // SidewalkEventNotificationConfigurations
 *       AmazonIdEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 *   },
 *   Proximity: { // ProximityEventConfiguration
 *     Sidewalk: {
 *       AmazonIdEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 *   },
 *   Join: { // JoinEventConfiguration
 *     LoRaWAN: { // LoRaWANJoinEventNotificationConfigurations
 *       DevEuiEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 *   },
 *   ConnectionStatus: { // ConnectionStatusEventConfiguration
 *     LoRaWAN: { // LoRaWANConnectionStatusEventNotificationConfigurations
 *       GatewayEuiEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessGatewayIdEventTopic: "Enabled" || "Disabled",
 *   },
 *   MessageDeliveryStatus: { // MessageDeliveryStatusEventConfiguration
 *     Sidewalk: {
 *       AmazonIdEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 *   },
 * };
 * const command = new UpdateResourceEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourceEventConfigurationCommandInput - {@link UpdateResourceEventConfigurationCommandInput}
 * @returns {@link UpdateResourceEventConfigurationCommandOutput}
 * @see {@link UpdateResourceEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Adding, updating, or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class UpdateResourceEventConfigurationCommand extends command<UpdateResourceEventConfigurationCommandInput, UpdateResourceEventConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResourceEventConfiguration",
  UpdateResourceEventConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceEventConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateResourceEventConfigurationCommandInput;
      output: UpdateResourceEventConfigurationCommandOutput;
    };
  };
}
