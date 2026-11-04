// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEventConfigurationsRequest, ListEventConfigurationsResponse } from "../models/models_0";
import { ListEventConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List event configurations where at least one event topic has been enabled.
 *
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
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
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
export class ListEventConfigurationsCommand extends command<ListEventConfigurationsCommandInput, ListEventConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListEventConfigurations",
  ListEventConfigurations$
) {
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
