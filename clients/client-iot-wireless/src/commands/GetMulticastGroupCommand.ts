// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMulticastGroupRequest, GetMulticastGroupResponse } from "../models/models_0";
import { GetMulticastGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about a multicast group.
 *
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
 * //     DefaultSessionParameters: { // DefaultSessionParametersMulticast
 * //       DlDr: Number("int"),
 * //       DlFreq: Number("int"),
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
export class GetMulticastGroupCommand extends command<GetMulticastGroupCommandInput, GetMulticastGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetMulticastGroup",
  GetMulticastGroup$
) {
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
