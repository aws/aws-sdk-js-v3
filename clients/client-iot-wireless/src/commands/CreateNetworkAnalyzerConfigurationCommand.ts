// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type {
  CreateNetworkAnalyzerConfigurationRequest,
  CreateNetworkAnalyzerConfigurationResponse,
} from "../models/models_0";
import { CreateNetworkAnalyzerConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkAnalyzerConfigurationCommand}.
 */
export interface CreateNetworkAnalyzerConfigurationCommandInput extends CreateNetworkAnalyzerConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkAnalyzerConfigurationCommand}.
 */
export interface CreateNetworkAnalyzerConfigurationCommandOutput
  extends CreateNetworkAnalyzerConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new network analyzer configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateNetworkAnalyzerConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateNetworkAnalyzerConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateNetworkAnalyzerConfigurationRequest
 *   Name: "STRING_VALUE", // required
 *   TraceContent: { // TraceContent
 *     WirelessDeviceFrameInfo: "ENABLED" || "DISABLED",
 *     LogLevel: "INFO" || "ERROR" || "DISABLED",
 *     MulticastFrameInfo: "ENABLED" || "DISABLED",
 *   },
 *   WirelessDevices: [ // WirelessDeviceList
 *     "STRING_VALUE",
 *   ],
 *   WirelessGateways: [ // WirelessGatewayList
 *     "STRING_VALUE",
 *   ],
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 *   MulticastGroups: [ // NetworkAnalyzerMulticastGroupList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateNetworkAnalyzerConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkAnalyzerConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNetworkAnalyzerConfigurationCommandInput - {@link CreateNetworkAnalyzerConfigurationCommandInput}
 * @returns {@link CreateNetworkAnalyzerConfigurationCommandOutput}
 * @see {@link CreateNetworkAnalyzerConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAnalyzerConfigurationCommandOutput} for command's `response` shape.
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
export class CreateNetworkAnalyzerConfigurationCommand extends $Command
  .classBuilder<
    CreateNetworkAnalyzerConfigurationCommandInput,
    CreateNetworkAnalyzerConfigurationCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "CreateNetworkAnalyzerConfiguration", {})
  .n("IoTWirelessClient", "CreateNetworkAnalyzerConfigurationCommand")
  .sc(CreateNetworkAnalyzerConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkAnalyzerConfigurationRequest;
      output: CreateNetworkAnalyzerConfigurationResponse;
    };
    sdk: {
      input: CreateNetworkAnalyzerConfigurationCommandInput;
      output: CreateNetworkAnalyzerConfigurationCommandOutput;
    };
  };
}
