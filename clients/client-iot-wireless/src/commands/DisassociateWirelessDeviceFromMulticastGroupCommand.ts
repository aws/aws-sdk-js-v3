// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type {
  DisassociateWirelessDeviceFromMulticastGroupRequest,
  DisassociateWirelessDeviceFromMulticastGroupResponse,
} from "../models/models_0";
import { DisassociateWirelessDeviceFromMulticastGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateWirelessDeviceFromMulticastGroupCommand}.
 */
export interface DisassociateWirelessDeviceFromMulticastGroupCommandInput
  extends DisassociateWirelessDeviceFromMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWirelessDeviceFromMulticastGroupCommand}.
 */
export interface DisassociateWirelessDeviceFromMulticastGroupCommandOutput
  extends DisassociateWirelessDeviceFromMulticastGroupResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a wireless device from a multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessDeviceFromMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessDeviceFromMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DisassociateWirelessDeviceFromMulticastGroupRequest
 *   Id: "STRING_VALUE", // required
 *   WirelessDeviceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWirelessDeviceFromMulticastGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateWirelessDeviceFromMulticastGroupCommandInput - {@link DisassociateWirelessDeviceFromMulticastGroupCommandInput}
 * @returns {@link DisassociateWirelessDeviceFromMulticastGroupCommandOutput}
 * @see {@link DisassociateWirelessDeviceFromMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessDeviceFromMulticastGroupCommandOutput} for command's `response` shape.
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
export class DisassociateWirelessDeviceFromMulticastGroupCommand extends $Command
  .classBuilder<
    DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    DisassociateWirelessDeviceFromMulticastGroupCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "DisassociateWirelessDeviceFromMulticastGroup", {})
  .n("IoTWirelessClient", "DisassociateWirelessDeviceFromMulticastGroupCommand")
  .sc(DisassociateWirelessDeviceFromMulticastGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateWirelessDeviceFromMulticastGroupRequest;
      output: {};
    };
    sdk: {
      input: DisassociateWirelessDeviceFromMulticastGroupCommandInput;
      output: DisassociateWirelessDeviceFromMulticastGroupCommandOutput;
    };
  };
}
