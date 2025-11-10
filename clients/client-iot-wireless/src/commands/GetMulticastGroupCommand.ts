// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetMulticastGroupRequest, GetMulticastGroupResponse } from "../models/models_0";
import { GetMulticastGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMulticastGroupCommand}.
 */
export interface GetMulticastGroupCommandInput extends GetMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetMulticastGroupCommand}.
 */
export interface GetMulticastGroupCommandOutput extends GetMulticastGroupResponse, __MetadataBearer {}

/**
 * <p>Gets information about a multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetMulticastGroupRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetMulticastGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetMulticastGroupResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANMulticastGet
 * //     RfRegion: "EU868" || "US915" || "AU915" || "AS923-1" || "AS923-2" || "AS923-3" || "AS923-4" || "EU433" || "CN470" || "CN779" || "RU864" || "KR920" || "IN865",
 * //     DlClass: "ClassB" || "ClassC",
 * //     NumberOfDevicesRequested: Number("int"),
 * //     NumberOfDevicesInGroup: Number("int"),
 * //     ParticipatingGateways: { // ParticipatingGatewaysMulticast
 * //       GatewayList: [ // GatewayListMulticast
 * //         "STRING_VALUE",
 * //       ],
 * //       TransmissionInterval: Number("int"),
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMulticastGroupCommandInput - {@link GetMulticastGroupCommandInput}
 * @returns {@link GetMulticastGroupCommandOutput}
 * @see {@link GetMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link GetMulticastGroupCommandOutput} for command's `response` shape.
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
export class GetMulticastGroupCommand extends $Command
  .classBuilder<
    GetMulticastGroupCommandInput,
    GetMulticastGroupCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetMulticastGroup", {})
  .n("IoTWirelessClient", "GetMulticastGroupCommand")
  .sc(GetMulticastGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMulticastGroupRequest;
      output: GetMulticastGroupResponse;
    };
    sdk: {
      input: GetMulticastGroupCommandInput;
      output: GetMulticastGroupCommandOutput;
    };
  };
}
