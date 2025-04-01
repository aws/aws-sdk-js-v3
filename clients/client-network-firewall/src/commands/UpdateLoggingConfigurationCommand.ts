// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLoggingConfigurationRequest, UpdateLoggingConfigurationResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_UpdateLoggingConfigurationCommand, se_UpdateLoggingConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLoggingConfigurationCommand}.
 */
export interface UpdateLoggingConfigurationCommandInput extends UpdateLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLoggingConfigurationCommand}.
 */
export interface UpdateLoggingConfigurationCommandOutput extends UpdateLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Sets the logging configuration for the specified firewall. </p>
 *          <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide
 *          the modified object to this update call. You must change the logging configuration one
 *             <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p>
 *          <p>You can perform only one of the following actions in any call to
 *             <code>UpdateLoggingConfiguration</code>: </p>
 *          <ul>
 *             <li>
 *                <p>Create a new log destination object by adding a single
 *                   <code>LogDestinationConfig</code> array element to
 *                   <code>LogDestinationConfigs</code>.</p>
 *             </li>
 *             <li>
 *                <p>Delete a log destination object by removing a single
 *                   <code>LogDestinationConfig</code> array element from
 *                   <code>LogDestinationConfigs</code>.</p>
 *             </li>
 *             <li>
 *                <p>Change the <code>LogDestination</code> setting in a single
 *                   <code>LogDestinationConfig</code> array element.</p>
 *             </li>
 *          </ul>
 *          <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a
 *             <code>LogDestinationConfig</code>. To change these settings, delete the existing
 *             <code>LogDestinationConfig</code> object and create a new one, using two separate calls
 *          to this update operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateLoggingConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateLoggingConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateLoggingConfigurationRequest
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   LoggingConfiguration: { // LoggingConfiguration
 *     LogDestinationConfigs: [ // LogDestinationConfigs // required
 *       { // LogDestinationConfig
 *         LogType: "ALERT" || "FLOW" || "TLS", // required
 *         LogDestinationType: "S3" || "CloudWatchLogs" || "KinesisDataFirehose", // required
 *         LogDestination: { // LogDestinationMap // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLoggingConfigurationResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
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
 * @param UpdateLoggingConfigurationCommandInput - {@link UpdateLoggingConfigurationCommandInput}
 * @returns {@link UpdateLoggingConfigurationCommandOutput}
 * @see {@link UpdateLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLoggingConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The token you provided is stale or isn't valid for the operation. </p>
 *
 * @throws {@link LogDestinationPermissionException} (client fault)
 *  <p>Unable to send logs to a configured logging destination. </p>
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
export class UpdateLoggingConfigurationCommand extends $Command
  .classBuilder<
    UpdateLoggingConfigurationCommandInput,
    UpdateLoggingConfigurationCommandOutput,
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
  .s("NetworkFirewall_20201112", "UpdateLoggingConfiguration", {})
  .n("NetworkFirewallClient", "UpdateLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLoggingConfigurationCommand)
  .de(de_UpdateLoggingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLoggingConfigurationRequest;
      output: UpdateLoggingConfigurationResponse;
    };
    sdk: {
      input: UpdateLoggingConfigurationCommandInput;
      output: UpdateLoggingConfigurationCommandOutput;
    };
  };
}
