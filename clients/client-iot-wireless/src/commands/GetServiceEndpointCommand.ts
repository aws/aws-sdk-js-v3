// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetServiceEndpointRequest, GetServiceEndpointResponse } from "../models/models_0";
import { GetServiceEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceEndpointCommand}.
 */
export interface GetServiceEndpointCommandInput extends GetServiceEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceEndpointCommand}.
 */
export interface GetServiceEndpointCommandOutput extends GetServiceEndpointResponse, __MetadataBearer {}

/**
 * <p>Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol
 *             or LoRaWAN Network Server (LNS) connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetServiceEndpointCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetServiceEndpointCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetServiceEndpointRequest
 *   ServiceType: "CUPS" || "LNS",
 * };
 * const command = new GetServiceEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceEndpointResponse
 * //   ServiceType: "CUPS" || "LNS",
 * //   ServiceEndpoint: "STRING_VALUE",
 * //   ServerTrust: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceEndpointCommandInput - {@link GetServiceEndpointCommandInput}
 * @returns {@link GetServiceEndpointCommandOutput}
 * @see {@link GetServiceEndpointCommandInput} for command's `input` shape.
 * @see {@link GetServiceEndpointCommandOutput} for command's `response` shape.
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
export class GetServiceEndpointCommand extends $Command
  .classBuilder<
    GetServiceEndpointCommandInput,
    GetServiceEndpointCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetServiceEndpoint", {})
  .n("IoTWirelessClient", "GetServiceEndpointCommand")
  .sc(GetServiceEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceEndpointRequest;
      output: GetServiceEndpointResponse;
    };
    sdk: {
      input: GetServiceEndpointCommandInput;
      output: GetServiceEndpointCommandOutput;
    };
  };
}
