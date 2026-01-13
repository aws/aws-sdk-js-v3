// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type {
  ListNetworkAnalyzerConfigurationsRequest,
  ListNetworkAnalyzerConfigurationsResponse,
} from "../models/models_0";
import { ListNetworkAnalyzerConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkAnalyzerConfigurationsCommand}.
 */
export interface ListNetworkAnalyzerConfigurationsCommandInput extends ListNetworkAnalyzerConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkAnalyzerConfigurationsCommand}.
 */
export interface ListNetworkAnalyzerConfigurationsCommandOutput extends ListNetworkAnalyzerConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists the network analyzer configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListNetworkAnalyzerConfigurationsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListNetworkAnalyzerConfigurationsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListNetworkAnalyzerConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkAnalyzerConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkAnalyzerConfigurationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   NetworkAnalyzerConfigurationList: [ // NetworkAnalyzerConfigurationList
 * //     { // NetworkAnalyzerConfigurations
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNetworkAnalyzerConfigurationsCommandInput - {@link ListNetworkAnalyzerConfigurationsCommandInput}
 * @returns {@link ListNetworkAnalyzerConfigurationsCommandOutput}
 * @see {@link ListNetworkAnalyzerConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkAnalyzerConfigurationsCommandOutput} for command's `response` shape.
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
export class ListNetworkAnalyzerConfigurationsCommand extends $Command
  .classBuilder<
    ListNetworkAnalyzerConfigurationsCommandInput,
    ListNetworkAnalyzerConfigurationsCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ListNetworkAnalyzerConfigurations", {})
  .n("IoTWirelessClient", "ListNetworkAnalyzerConfigurationsCommand")
  .sc(ListNetworkAnalyzerConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkAnalyzerConfigurationsRequest;
      output: ListNetworkAnalyzerConfigurationsResponse;
    };
    sdk: {
      input: ListNetworkAnalyzerConfigurationsCommandInput;
      output: ListNetworkAnalyzerConfigurationsCommandOutput;
    };
  };
}
