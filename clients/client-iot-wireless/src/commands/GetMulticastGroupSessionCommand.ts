// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetMulticastGroupSessionRequest, GetMulticastGroupSessionResponse } from "../models/models_0";
import { GetMulticastGroupSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMulticastGroupSessionCommand}.
 */
export interface GetMulticastGroupSessionCommandInput extends GetMulticastGroupSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetMulticastGroupSessionCommand}.
 */
export interface GetMulticastGroupSessionCommandOutput extends GetMulticastGroupSessionResponse, __MetadataBearer {}

/**
 * <p>Gets information about a multicast group session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetMulticastGroupSessionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetMulticastGroupSessionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetMulticastGroupSessionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetMulticastGroupSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetMulticastGroupSessionResponse
 * //   LoRaWAN: { // LoRaWANMulticastSession
 * //     DlDr: Number("int"),
 * //     DlFreq: Number("int"),
 * //     SessionStartTime: new Date("TIMESTAMP"),
 * //     SessionTimeout: Number("int"),
 * //     PingSlotPeriod: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMulticastGroupSessionCommandInput - {@link GetMulticastGroupSessionCommandInput}
 * @returns {@link GetMulticastGroupSessionCommandOutput}
 * @see {@link GetMulticastGroupSessionCommandInput} for command's `input` shape.
 * @see {@link GetMulticastGroupSessionCommandOutput} for command's `response` shape.
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
export class GetMulticastGroupSessionCommand extends $Command
  .classBuilder<
    GetMulticastGroupSessionCommandInput,
    GetMulticastGroupSessionCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetMulticastGroupSession", {})
  .n("IoTWirelessClient", "GetMulticastGroupSessionCommand")
  .sc(GetMulticastGroupSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMulticastGroupSessionRequest;
      output: GetMulticastGroupSessionResponse;
    };
    sdk: {
      input: GetMulticastGroupSessionCommandInput;
      output: GetMulticastGroupSessionCommandOutput;
    };
  };
}
