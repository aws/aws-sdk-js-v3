// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DisassociateWirelessDeviceFromThingRequest,
  DisassociateWirelessDeviceFromThingResponse,
} from "../models/models_0";
import { DisassociateWirelessDeviceFromThing } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateWirelessDeviceFromThingCommand}.
 */
export interface DisassociateWirelessDeviceFromThingCommandInput extends DisassociateWirelessDeviceFromThingRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWirelessDeviceFromThingCommand}.
 */
export interface DisassociateWirelessDeviceFromThingCommandOutput
  extends DisassociateWirelessDeviceFromThingResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a wireless device from its currently associated thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessDeviceFromThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessDeviceFromThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DisassociateWirelessDeviceFromThingRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWirelessDeviceFromThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateWirelessDeviceFromThingCommandInput - {@link DisassociateWirelessDeviceFromThingCommandInput}
 * @returns {@link DisassociateWirelessDeviceFromThingCommandOutput}
 * @see {@link DisassociateWirelessDeviceFromThingCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessDeviceFromThingCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DisassociateWirelessDeviceFromThingCommand extends $Command
  .classBuilder<
    DisassociateWirelessDeviceFromThingCommandInput,
    DisassociateWirelessDeviceFromThingCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "DisassociateWirelessDeviceFromThing", {})
  .n("IoTWirelessClient", "DisassociateWirelessDeviceFromThingCommand")
  .sc(DisassociateWirelessDeviceFromThing)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateWirelessDeviceFromThingRequest;
      output: {};
    };
    sdk: {
      input: DisassociateWirelessDeviceFromThingCommandInput;
      output: DisassociateWirelessDeviceFromThingCommandOutput;
    };
  };
}
