// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetNetworkAnalyzerConfigurationRequest, GetNetworkAnalyzerConfigurationResponse } from "../models/models_0";
import { GetNetworkAnalyzerConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkAnalyzerConfigurationCommand}.
 */
export interface GetNetworkAnalyzerConfigurationCommandInput extends GetNetworkAnalyzerConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkAnalyzerConfigurationCommand}.
 */
export interface GetNetworkAnalyzerConfigurationCommandOutput
  extends GetNetworkAnalyzerConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Get network analyzer configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetNetworkAnalyzerConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetNetworkAnalyzerConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetNetworkAnalyzerConfigurationRequest
 *   ConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkAnalyzerConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkAnalyzerConfigurationResponse
 * //   TraceContent: { // TraceContent
 * //     WirelessDeviceFrameInfo: "ENABLED" || "DISABLED",
 * //     LogLevel: "INFO" || "ERROR" || "DISABLED",
 * //     MulticastFrameInfo: "ENABLED" || "DISABLED",
 * //   },
 * //   WirelessDevices: [ // WirelessDeviceList
 * //     "STRING_VALUE",
 * //   ],
 * //   WirelessGateways: [ // WirelessGatewayList
 * //     "STRING_VALUE",
 * //   ],
 * //   Description: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   MulticastGroups: [ // NetworkAnalyzerMulticastGroupList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetNetworkAnalyzerConfigurationCommandInput - {@link GetNetworkAnalyzerConfigurationCommandInput}
 * @returns {@link GetNetworkAnalyzerConfigurationCommandOutput}
 * @see {@link GetNetworkAnalyzerConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetNetworkAnalyzerConfigurationCommandOutput} for command's `response` shape.
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
export class GetNetworkAnalyzerConfigurationCommand extends $Command
  .classBuilder<
    GetNetworkAnalyzerConfigurationCommandInput,
    GetNetworkAnalyzerConfigurationCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetNetworkAnalyzerConfiguration", {})
  .n("IoTWirelessClient", "GetNetworkAnalyzerConfigurationCommand")
  .sc(GetNetworkAnalyzerConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkAnalyzerConfigurationRequest;
      output: GetNetworkAnalyzerConfigurationResponse;
    };
    sdk: {
      input: GetNetworkAnalyzerConfigurationCommandInput;
      output: GetNetworkAnalyzerConfigurationCommandOutput;
    };
  };
}
