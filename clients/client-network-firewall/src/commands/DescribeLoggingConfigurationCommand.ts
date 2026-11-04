// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeLoggingConfigurationRequest, DescribeLoggingConfigurationResponse } from "../models/models_0";
import { DescribeLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeLoggingConfigurationCommandOutput extends DescribeLoggingConfigurationResponse, __MetadataBearer {}

/**
 * Returns the logging configuration for the specified firewall.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeLoggingConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeLoggingConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
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
 * //   EnableMonitoringDashboard: true || false,
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
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Unable to locate a resource using the parameters that you provided.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Unable to process the request due to throttling limitations.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
 *
 * @public
 */
export class DescribeLoggingConfigurationCommand extends command<DescribeLoggingConfigurationCommandInput, DescribeLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLoggingConfiguration",
  DescribeLoggingConfiguration$
) {
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
