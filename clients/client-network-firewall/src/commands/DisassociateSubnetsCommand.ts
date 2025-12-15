// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateSubnetsRequest, DisassociateSubnetsResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { DisassociateSubnets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSubnetsCommand}.
 */
export interface DisassociateSubnetsCommandInput extends DisassociateSubnetsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSubnetsCommand}.
 */
export interface DisassociateSubnetsCommandOutput extends DisassociateSubnetsResponse, __MetadataBearer {}

/**
 * <p>Removes the specified subnet associations from the firewall. This removes the
 *           firewall endpoints from the subnets and removes any network filtering protections that the endpoints
 *           were providing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DisassociateSubnetsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DisassociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DisassociateSubnetsRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   SubnetIds: [ // AzSubnets // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateSubnetsCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateSubnetsResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   SubnetMappings: [ // SubnetMappings
 * //     { // SubnetMapping
 * //       SubnetId: "STRING_VALUE", // required
 * //       IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 * //     },
 * //   ],
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateSubnetsCommandInput - {@link DisassociateSubnetsCommandInput}
 * @returns {@link DisassociateSubnetsCommandOutput}
 * @see {@link DisassociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link DisassociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
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
export class DisassociateSubnetsCommand extends $Command
  .classBuilder<
    DisassociateSubnetsCommandInput,
    DisassociateSubnetsCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DisassociateSubnets", {})
  .n("NetworkFirewallClient", "DisassociateSubnetsCommand")
  .sc(DisassociateSubnets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSubnetsRequest;
      output: DisassociateSubnetsResponse;
    };
    sdk: {
      input: DisassociateSubnetsCommandInput;
      output: DisassociateSubnetsCommandOutput;
    };
  };
}
