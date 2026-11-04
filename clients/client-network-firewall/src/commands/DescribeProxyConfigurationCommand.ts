// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeProxyConfigurationRequest, DescribeProxyConfigurationResponse } from "../models/models_0";
import { DescribeProxyConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeProxyConfigurationCommand}.
 */
export interface DescribeProxyConfigurationCommandInput extends DescribeProxyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProxyConfigurationCommand}.
 */
export interface DescribeProxyConfigurationCommandOutput extends DescribeProxyConfigurationResponse, __MetadataBearer {}

/**
 * Returns the data objects for the specified proxy configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeProxyConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeProxyConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeProxyConfigurationRequest
 *   ProxyConfigurationName: "STRING_VALUE",
 *   ProxyConfigurationArn: "STRING_VALUE",
 * };
 * const command = new DescribeProxyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProxyConfigurationResponse
 * //   ProxyConfiguration: { // ProxyConfiguration
 * //     ProxyConfigurationName: "STRING_VALUE",
 * //     ProxyConfigurationArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     RuleGroups: [ // ProxyConfigRuleGroupSet
 * //       { // ProxyConfigRuleGroup
 * //         ProxyRuleGroupName: "STRING_VALUE",
 * //         ProxyRuleGroupArn: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         Priority: Number("int"),
 * //       },
 * //     ],
 * //     DefaultRulePhaseActions: { // ProxyConfigDefaultRulePhaseActionsRequest
 * //       PreDNS: "ALLOW" || "DENY" || "ALERT",
 * //       PreREQUEST: "ALLOW" || "DENY" || "ALERT",
 * //       PostRESPONSE: "ALLOW" || "DENY" || "ALERT",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProxyConfigurationCommandInput - {@link DescribeProxyConfigurationCommandInput}
 * @returns {@link DescribeProxyConfigurationCommandOutput}
 * @see {@link DescribeProxyConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeProxyConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeProxyConfigurationCommand extends command<DescribeProxyConfigurationCommandInput, DescribeProxyConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeProxyConfiguration",
  DescribeProxyConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProxyConfigurationRequest;
      output: DescribeProxyConfigurationResponse;
    };
    sdk: {
      input: DescribeProxyConfigurationCommandInput;
      output: DescribeProxyConfigurationCommandOutput;
    };
  };
}
