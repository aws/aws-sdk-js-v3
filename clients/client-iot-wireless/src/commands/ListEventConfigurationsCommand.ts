// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { ListEventConfigurationsRequest, ListEventConfigurationsResponse } from "../models/models_0";
import { ListEventConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventConfigurationsCommand}.
 */
export interface ListEventConfigurationsCommandInput extends ListEventConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventConfigurationsCommand}.
 */
export interface ListEventConfigurationsCommandOutput extends ListEventConfigurationsResponse, __MetadataBearer {}

/**
 * <p>List event configurations where at least one event topic has been enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListEventConfigurationsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListEventConfigurationsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListEventConfigurationsRequest
 *   ResourceType: "SidewalkAccount" || "WirelessDevice" || "WirelessGateway", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEventConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventConfigurationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   EventConfigurationsList: [ // EventConfigurationsList
 * //     { // EventConfigurationItem
 * //       Identifier: "STRING_VALUE",
 * //       IdentifierType: "PartnerAccountId" || "DevEui" || "GatewayEui" || "WirelessDeviceId" || "WirelessGatewayId",
 * //       PartnerType: "Sidewalk",
 * //       Events: { // EventNotificationItemConfigurations
 * //         DeviceRegistrationState: { // DeviceRegistrationStateEventConfiguration
 * //           Sidewalk: { // SidewalkEventNotificationConfigurations
 * //             AmazonIdEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //         Proximity: { // ProximityEventConfiguration
 * //           Sidewalk: {
 * //             AmazonIdEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //         Join: { // JoinEventConfiguration
 * //           LoRaWAN: { // LoRaWANJoinEventNotificationConfigurations
 * //             DevEuiEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //         ConnectionStatus: { // ConnectionStatusEventConfiguration
 * //           LoRaWAN: { // LoRaWANConnectionStatusEventNotificationConfigurations
 * //             GatewayEuiEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessGatewayIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //         MessageDeliveryStatus: { // MessageDeliveryStatusEventConfiguration
 * //           Sidewalk: {
 * //             AmazonIdEventTopic: "Enabled" || "Disabled",
 * //           },
 * //           WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEventConfigurationsCommandInput - {@link ListEventConfigurationsCommandInput}
 * @returns {@link ListEventConfigurationsCommandOutput}
 * @see {@link ListEventConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListEventConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
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
export class ListEventConfigurationsCommand extends $Command
  .classBuilder<
    ListEventConfigurationsCommandInput,
    ListEventConfigurationsCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ListEventConfigurations", {})
  .n("IoTWirelessClient", "ListEventConfigurationsCommand")
  .sc(ListEventConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventConfigurationsRequest;
      output: ListEventConfigurationsResponse;
    };
    sdk: {
      input: ListEventConfigurationsCommandInput;
      output: ListEventConfigurationsCommandOutput;
    };
  };
}
