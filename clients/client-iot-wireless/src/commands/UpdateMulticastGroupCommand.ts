// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMulticastGroupRequest, UpdateMulticastGroupResponse } from "../models/models_1";
import { UpdateMulticastGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMulticastGroupCommand}.
 */
export interface UpdateMulticastGroupCommandInput extends UpdateMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMulticastGroupCommand}.
 */
export interface UpdateMulticastGroupCommandOutput extends UpdateMulticastGroupResponse, __MetadataBearer {}

/**
 * Updates properties of a multicast group session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateMulticastGroupRequest
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANMulticast
 *     RfRegion: "EU868" || "US915" || "AU915" || "AS923-1" || "AS923-2" || "AS923-3" || "AS923-4" || "EU433" || "CN470" || "CN779" || "RU864" || "KR920" || "IN865",
 *     DlClass: "ClassB" || "ClassC",
 *     ParticipatingGateways: { // ParticipatingGatewaysMulticast
 *       GatewayList: [ // GatewayListMulticast
 *         "STRING_VALUE",
 *       ],
 *       TransmissionInterval: Number("int"),
 *     },
 *     DefaultSessionParameters: { // DefaultSessionParametersMulticast
 *       DlDr: Number("int"),
 *       DlFreq: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateMulticastGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMulticastGroupCommandInput - {@link UpdateMulticastGroupCommandInput}
 * @returns {@link UpdateMulticastGroupCommandOutput}
 * @see {@link UpdateMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateMulticastGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Adding, updating, or deleting the resource can cause an inconsistent state.
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
export class UpdateMulticastGroupCommand extends command<UpdateMulticastGroupCommandInput, UpdateMulticastGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMulticastGroup",
  UpdateMulticastGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMulticastGroupRequest;
      output: {};
    };
    sdk: {
      input: UpdateMulticastGroupCommandInput;
      output: UpdateMulticastGroupCommandOutput;
    };
  };
}
