// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateResourceEventConfigurationRequest, UpdateResourceEventConfigurationResponse } from "../models/models_1";
import {
  de_UpdateResourceEventConfigurationCommand,
  se_UpdateResourceEventConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateResourceEventConfigurationCommandOutput
  extends UpdateResourceEventConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Update the event configuration for a particular resource identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateResourceEventConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateResourceEventConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateResourceEventConfigurationRequest
 *   Identifier: "STRING_VALUE", // required
 *   IdentifierType: "PartnerAccountId" || "DevEui" || "FuotaTaskId" || "GatewayEui" || "WirelessDeviceId" || "WirelessGatewayId", // required
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
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
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
 * @public
 */
export class UpdateResourceEventConfigurationCommand extends $Command
  .classBuilder<
    UpdateResourceEventConfigurationCommandInput,
    UpdateResourceEventConfigurationCommandOutput,
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
  .s("iotwireless", "UpdateResourceEventConfiguration", {})
  .n("IoTWirelessClient", "UpdateResourceEventConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResourceEventConfigurationCommand)
  .de(de_UpdateResourceEventConfigurationCommand)
  .build() {
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
