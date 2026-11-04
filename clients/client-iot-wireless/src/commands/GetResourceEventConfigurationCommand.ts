// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourceEventConfigurationRequest, GetResourceEventConfigurationResponse } from "../models/models_0";
import { GetResourceEventConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourceEventConfigurationCommand}.
 */
export interface GetResourceEventConfigurationCommandInput extends GetResourceEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceEventConfigurationCommand}.
 */
export interface GetResourceEventConfigurationCommandOutput extends GetResourceEventConfigurationResponse, __MetadataBearer {}

/**
 * Get the event configuration for a particular resource identifier.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetResourceEventConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetResourceEventConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetResourceEventConfigurationRequest
 *   Identifier: "STRING_VALUE", // required
 *   IdentifierType: "PartnerAccountId" || "DevEui" || "GatewayEui" || "WirelessDeviceId" || "WirelessGatewayId", // required
 *   PartnerType: "Sidewalk",
 * };
 * const command = new GetResourceEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceEventConfigurationResponse
 * //   DeviceRegistrationState: { // DeviceRegistrationStateEventConfiguration
 * //     Sidewalk: { // SidewalkEventNotificationConfigurations
 * //       AmazonIdEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * //   Proximity: { // ProximityEventConfiguration
 * //     Sidewalk: {
 * //       AmazonIdEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * //   Join: { // JoinEventConfiguration
 * //     LoRaWAN: { // LoRaWANJoinEventNotificationConfigurations
 * //       DevEuiEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * //   ConnectionStatus: { // ConnectionStatusEventConfiguration
 * //     LoRaWAN: { // LoRaWANConnectionStatusEventNotificationConfigurations
 * //       GatewayEuiEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessGatewayIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * //   MessageDeliveryStatus: { // MessageDeliveryStatusEventConfiguration
 * //     Sidewalk: {
 * //       AmazonIdEventTopic: "Enabled" || "Disabled",
 * //     },
 * //     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceEventConfigurationCommandInput - {@link GetResourceEventConfigurationCommandInput}
 * @returns {@link GetResourceEventConfigurationCommandOutput}
 * @see {@link GetResourceEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetResourceEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have permission to perform this action.
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
export class GetResourceEventConfigurationCommand extends command<GetResourceEventConfigurationCommandInput, GetResourceEventConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetResourceEventConfiguration",
  GetResourceEventConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceEventConfigurationRequest;
      output: GetResourceEventConfigurationResponse;
    };
    sdk: {
      input: GetResourceEventConfigurationCommandInput;
      output: GetResourceEventConfigurationCommandOutput;
    };
  };
}
