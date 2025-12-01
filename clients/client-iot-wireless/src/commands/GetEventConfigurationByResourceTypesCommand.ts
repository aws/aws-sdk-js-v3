// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type {
  GetEventConfigurationByResourceTypesRequest,
  GetEventConfigurationByResourceTypesResponse,
} from "../models/models_0";
import { GetEventConfigurationByResourceTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventConfigurationByResourceTypesCommand}.
 */
export interface GetEventConfigurationByResourceTypesCommandInput extends GetEventConfigurationByResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetEventConfigurationByResourceTypesCommand}.
 */
export interface GetEventConfigurationByResourceTypesCommandOutput
  extends GetEventConfigurationByResourceTypesResponse,
    __MetadataBearer {}

/**
 * <p>Get the event configuration based on resource types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetEventConfigurationByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetEventConfigurationByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = {};
 * const command = new GetEventConfigurationByResourceTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetEventConfigurationByResourceTypesResponse
 * //   DeviceRegistrationState: { // DeviceRegistrationStateResourceTypeEventConfiguration
 * //     Sidewalk: { // SidewalkResourceTypeEventConfiguration
 * //       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   Proximity: { // ProximityResourceTypeEventConfiguration
 * //     Sidewalk: {
 * //       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   Join: { // JoinResourceTypeEventConfiguration
 * //     LoRaWAN: { // LoRaWANJoinResourceTypeEventConfiguration
 * //       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   ConnectionStatus: { // ConnectionStatusResourceTypeEventConfiguration
 * //     LoRaWAN: { // LoRaWANConnectionStatusResourceTypeEventConfiguration
 * //       WirelessGatewayEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   MessageDeliveryStatus: { // MessageDeliveryStatusResourceTypeEventConfiguration
 * //     Sidewalk: {
 * //       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventConfigurationByResourceTypesCommandInput - {@link GetEventConfigurationByResourceTypesCommandInput}
 * @returns {@link GetEventConfigurationByResourceTypesCommandOutput}
 * @see {@link GetEventConfigurationByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetEventConfigurationByResourceTypesCommandOutput} for command's `response` shape.
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
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class GetEventConfigurationByResourceTypesCommand extends $Command
  .classBuilder<
    GetEventConfigurationByResourceTypesCommandInput,
    GetEventConfigurationByResourceTypesCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetEventConfigurationByResourceTypes", {})
  .n("IoTWirelessClient", "GetEventConfigurationByResourceTypesCommand")
  .sc(GetEventConfigurationByResourceTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetEventConfigurationByResourceTypesResponse;
    };
    sdk: {
      input: GetEventConfigurationByResourceTypesCommandInput;
      output: GetEventConfigurationByResourceTypesCommandOutput;
    };
  };
}
