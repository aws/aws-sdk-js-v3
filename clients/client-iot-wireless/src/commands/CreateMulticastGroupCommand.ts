// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateMulticastGroupRequest, CreateMulticastGroupResponse } from "../models/models_0";
import { de_CreateMulticastGroupCommand, se_CreateMulticastGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMulticastGroupCommand}.
 */
export interface CreateMulticastGroupCommandInput extends CreateMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateMulticastGroupCommand}.
 */
export interface CreateMulticastGroupCommandOutput extends CreateMulticastGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateMulticastGroupRequest
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANMulticast
 *     RfRegion: "EU868" || "US915" || "AU915" || "AS923-1" || "AS923-2" || "AS923-3" || "AS923-4" || "EU433" || "CN470" || "CN779" || "RU864" || "KR920" || "IN865",
 *     DlClass: "ClassB" || "ClassC",
 *     ParticipatingGateways: { // ParticipatingGatewaysMulticast
 *       GatewayList: [ // GatewayListMulticast
 *         "STRING_VALUE",
 *       ],
 *       TransmissionInterval: Number("int"),
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMulticastGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateMulticastGroupResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMulticastGroupCommandInput - {@link CreateMulticastGroupCommandInput}
 * @returns {@link CreateMulticastGroupCommandOutput}
 * @see {@link CreateMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link CreateMulticastGroupCommandOutput} for command's `response` shape.
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
export class CreateMulticastGroupCommand extends $Command
  .classBuilder<
    CreateMulticastGroupCommandInput,
    CreateMulticastGroupCommandOutput,
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
  .s("iotwireless", "CreateMulticastGroup", {})
  .n("IoTWirelessClient", "CreateMulticastGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateMulticastGroupCommand)
  .de(de_CreateMulticastGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMulticastGroupRequest;
      output: CreateMulticastGroupResponse;
    };
    sdk: {
      input: CreateMulticastGroupCommandInput;
      output: CreateMulticastGroupCommandOutput;
    };
  };
}
