// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLoggingConfigurationRequest, DescribeLoggingConfigurationResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_DescribeLoggingConfigurationCommand,
  se_DescribeLoggingConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoggingConfigurationCommand}.
 */
export interface DescribeLoggingConfigurationCommandInput extends DescribeLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLoggingConfigurationCommand}.
 */
export interface DescribeLoggingConfigurationCommandOutput
  extends DescribeLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns the logging configuration for the specified firewall. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeLoggingConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeLoggingConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeLoggingConfigurationRequest
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 * };
 * const command = new DescribeLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoggingConfigurationResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   LoggingConfiguration: { // LoggingConfiguration
 * //     LogDestinationConfigs: [ // LogDestinationConfigs // required
 * //       { // LogDestinationConfig
 * //         LogType: "ALERT" || "FLOW" || "TLS", // required
 * //         LogDestinationType: "S3" || "CloudWatchLogs" || "KinesisDataFirehose", // required
 * //         LogDestination: { // LogDestinationMap // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLoggingConfigurationCommandInput - {@link DescribeLoggingConfigurationCommandInput}
 * @returns {@link DescribeLoggingConfigurationCommandOutput}
 * @see {@link DescribeLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DescribeLoggingConfigurationCommand extends $Command
  .classBuilder<
    DescribeLoggingConfigurationCommandInput,
    DescribeLoggingConfigurationCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFirewall_20201112", "DescribeLoggingConfiguration", {})
  .n("NetworkFirewallClient", "DescribeLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLoggingConfigurationCommand)
  .de(de_DescribeLoggingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLoggingConfigurationRequest;
      output: DescribeLoggingConfigurationResponse;
    };
    sdk: {
      input: DescribeLoggingConfigurationCommandInput;
      output: DescribeLoggingConfigurationCommandOutput;
    };
  };
}
