// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { StartMulticastGroupSessionRequest, StartMulticastGroupSessionResponse } from "../models/models_1";
import { StartMulticastGroupSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMulticastGroupSessionCommand}.
 */
export interface StartMulticastGroupSessionCommandInput extends StartMulticastGroupSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartMulticastGroupSessionCommand}.
 */
export interface StartMulticastGroupSessionCommandOutput extends StartMulticastGroupSessionResponse, __MetadataBearer {}

/**
 * <p>Starts a multicast group session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartMulticastGroupSessionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartMulticastGroupSessionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // StartMulticastGroupSessionRequest
 *   Id: "STRING_VALUE", // required
 *   LoRaWAN: { // LoRaWANMulticastSession
 *     DlDr: Number("int"),
 *     DlFreq: Number("int"),
 *     SessionStartTime: new Date("TIMESTAMP"),
 *     SessionTimeout: Number("int"),
 *     PingSlotPeriod: Number("int"),
 *   },
 * };
 * const command = new StartMulticastGroupSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartMulticastGroupSessionCommandInput - {@link StartMulticastGroupSessionCommandInput}
 * @returns {@link StartMulticastGroupSessionCommandOutput}
 * @see {@link StartMulticastGroupSessionCommandInput} for command's `input` shape.
 * @see {@link StartMulticastGroupSessionCommandOutput} for command's `response` shape.
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
export class StartMulticastGroupSessionCommand extends $Command
  .classBuilder<
    StartMulticastGroupSessionCommandInput,
    StartMulticastGroupSessionCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "StartMulticastGroupSession", {})
  .n("IoTWirelessClient", "StartMulticastGroupSessionCommand")
  .sc(StartMulticastGroupSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMulticastGroupSessionRequest;
      output: {};
    };
    sdk: {
      input: StartMulticastGroupSessionCommandInput;
      output: StartMulticastGroupSessionCommandOutput;
    };
  };
}
