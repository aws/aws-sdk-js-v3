// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLoggingConfigurationRequest, UpdateLoggingConfigurationResponse } from "../models/models_0";
import { UpdateLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sets the logging configuration for the specified firewall.
 *
 * To change the logging configuration, retrieve the LoggingConfiguration by calling DescribeLoggingConfiguration, then change it and provide the modified object to this update call. You must change the logging configuration one LogDestinationConfig at a time inside the retrieved LoggingConfiguration object.
 *
 * You can perform only one of the following actions in any call to `UpdateLoggingConfiguration`:
 *
 * - Create a new log destination object by adding a single `LogDestinationConfig` array element to `LogDestinationConfigs`.
 * - Delete a log destination object by removing a single `LogDestinationConfig` array element from `LogDestinationConfigs`.
 * - Change the `LogDestination` setting in a single `LogDestinationConfig` array element.
 *
 * You can't change the `LogDestinationType` or `LogType` in a `LogDestinationConfig`. To change these settings, delete the existing `LogDestinationConfig` object and create a new one, using two separate calls to this update operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateLoggingConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateLoggingConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
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
 *   EnableMonitoringDashboard: true || false,
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
 * //   EnableMonitoringDashboard: true || false,
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
 * @throws {@link InvalidTokenException} (client fault)
 *
 * The token you provided is stale or isn't valid for the operation.
 *
 * @throws {@link LogDestinationPermissionException} (client fault)
 *
 * Unable to send logs to a configured logging destination.
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
export class UpdateLoggingConfigurationCommand extends command<UpdateLoggingConfigurationCommandInput, UpdateLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLoggingConfiguration",
  UpdateLoggingConfiguration$
) {
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
