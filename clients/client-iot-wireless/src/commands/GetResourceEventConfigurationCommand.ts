// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { GetResourceEventConfigurationRequest, GetResourceEventConfigurationResponse } from "../models/models_0";
import { GetResourceEventConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get the event configuration for a particular resource identifier.</p>
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
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class GetResourceEventConfigurationCommand extends $Command
  .classBuilder<
    GetResourceEventConfigurationCommandInput,
    GetResourceEventConfigurationCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetResourceEventConfiguration", {})
  .n("IoTWirelessClient", "GetResourceEventConfigurationCommand")
  .sc(GetResourceEventConfiguration$)
  .build() {
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
