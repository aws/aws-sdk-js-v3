// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  UpdateNetworkAnalyzerConfigurationRequest,
  UpdateNetworkAnalyzerConfigurationResponse,
} from "../models/models_1";
import {
  de_UpdateNetworkAnalyzerConfigurationCommand,
  se_UpdateNetworkAnalyzerConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNetworkAnalyzerConfigurationCommand}.
 */
export interface UpdateNetworkAnalyzerConfigurationCommandInput extends UpdateNetworkAnalyzerConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkAnalyzerConfigurationCommand}.
 */
export interface UpdateNetworkAnalyzerConfigurationCommandOutput
  extends UpdateNetworkAnalyzerConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Update network analyzer configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateNetworkAnalyzerConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateNetworkAnalyzerConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateNetworkAnalyzerConfigurationRequest
 *   ConfigurationName: "STRING_VALUE", // required
 *   TraceContent: { // TraceContent
 *     WirelessDeviceFrameInfo: "ENABLED" || "DISABLED",
 *     LogLevel: "INFO" || "ERROR" || "DISABLED",
 *     MulticastFrameInfo: "ENABLED" || "DISABLED",
 *   },
 *   WirelessDevicesToAdd: [ // WirelessDeviceList
 *     "STRING_VALUE",
 *   ],
 *   WirelessDevicesToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   WirelessGatewaysToAdd: [ // WirelessGatewayList
 *     "STRING_VALUE",
 *   ],
 *   WirelessGatewaysToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   Description: "STRING_VALUE",
 *   MulticastGroupsToAdd: [ // NetworkAnalyzerMulticastGroupList
 *     "STRING_VALUE",
 *   ],
 *   MulticastGroupsToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateNetworkAnalyzerConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNetworkAnalyzerConfigurationCommandInput - {@link UpdateNetworkAnalyzerConfigurationCommandInput}
 * @returns {@link UpdateNetworkAnalyzerConfigurationCommandOutput}
 * @see {@link UpdateNetworkAnalyzerConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkAnalyzerConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateNetworkAnalyzerConfigurationCommand extends $Command
  .classBuilder<
    UpdateNetworkAnalyzerConfigurationCommandInput,
    UpdateNetworkAnalyzerConfigurationCommandOutput,
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
  .s("iotwireless", "UpdateNetworkAnalyzerConfiguration", {})
  .n("IoTWirelessClient", "UpdateNetworkAnalyzerConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateNetworkAnalyzerConfigurationCommand)
  .de(de_UpdateNetworkAnalyzerConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNetworkAnalyzerConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateNetworkAnalyzerConfigurationCommandInput;
      output: UpdateNetworkAnalyzerConfigurationCommandOutput;
    };
  };
}
