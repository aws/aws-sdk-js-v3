// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  UpdateEventConfigurationByResourceTypesRequest,
  UpdateEventConfigurationByResourceTypesResponse,
} from "../models/models_1";
import {
  de_UpdateEventConfigurationByResourceTypesCommand,
  se_UpdateEventConfigurationByResourceTypesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventConfigurationByResourceTypesCommand}.
 */
export interface UpdateEventConfigurationByResourceTypesCommandInput
  extends UpdateEventConfigurationByResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventConfigurationByResourceTypesCommand}.
 */
export interface UpdateEventConfigurationByResourceTypesCommandOutput
  extends UpdateEventConfigurationByResourceTypesResponse,
    __MetadataBearer {}

/**
 * <p>Update the event configuration based on resource types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateEventConfigurationByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateEventConfigurationByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateEventConfigurationByResourceTypesRequest
 *   DeviceRegistrationState: { // DeviceRegistrationStateResourceTypeEventConfiguration
 *     Sidewalk: { // SidewalkResourceTypeEventConfiguration
 *       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 *   Proximity: { // ProximityResourceTypeEventConfiguration
 *     Sidewalk: {
 *       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 *   Join: { // JoinResourceTypeEventConfiguration
 *     LoRaWAN: { // LoRaWANJoinResourceTypeEventConfiguration
 *       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 *   ConnectionStatus: { // ConnectionStatusResourceTypeEventConfiguration
 *     LoRaWAN: { // LoRaWANConnectionStatusResourceTypeEventConfiguration
 *       WirelessGatewayEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 *   MessageDeliveryStatus: { // MessageDeliveryStatusResourceTypeEventConfiguration
 *     Sidewalk: {
 *       WirelessDeviceEventTopic: "Enabled" || "Disabled",
 *     },
 *   },
 * };
 * const command = new UpdateEventConfigurationByResourceTypesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventConfigurationByResourceTypesCommandInput - {@link UpdateEventConfigurationByResourceTypesCommandInput}
 * @returns {@link UpdateEventConfigurationByResourceTypesCommandOutput}
 * @see {@link UpdateEventConfigurationByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link UpdateEventConfigurationByResourceTypesCommandOutput} for command's `response` shape.
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
export class UpdateEventConfigurationByResourceTypesCommand extends $Command
  .classBuilder<
    UpdateEventConfigurationByResourceTypesCommandInput,
    UpdateEventConfigurationByResourceTypesCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "UpdateEventConfigurationByResourceTypes", {})
  .n("IoTWirelessClient", "UpdateEventConfigurationByResourceTypesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEventConfigurationByResourceTypesCommand)
  .de(de_UpdateEventConfigurationByResourceTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventConfigurationByResourceTypesRequest;
      output: {};
    };
    sdk: {
      input: UpdateEventConfigurationByResourceTypesCommandInput;
      output: UpdateEventConfigurationByResourceTypesCommandOutput;
    };
  };
}
