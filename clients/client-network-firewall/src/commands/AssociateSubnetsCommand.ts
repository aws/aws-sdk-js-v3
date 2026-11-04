// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateSubnetsRequest, AssociateSubnetsResponse } from "../models/models_0";
import { AssociateSubnets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateSubnetsCommand}.
 */
export interface AssociateSubnetsCommandInput extends AssociateSubnetsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSubnetsCommand}.
 */
export interface AssociateSubnetsCommandOutput extends AssociateSubnetsResponse, __MetadataBearer {}

/**
 * Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans.
 *
 * This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateSubnetsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // AssociateSubnetsRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   SubnetMappings: [ // SubnetMappings // required
 *     { // SubnetMapping
 *       SubnetId: "STRING_VALUE", // required
 *       IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 *     },
 *   ],
 * };
 * const command = new AssociateSubnetsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSubnetsResponse
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
 * @param AssociateSubnetsCommandInput - {@link AssociateSubnetsCommandInput}
 * @returns {@link AssociateSubnetsCommandOutput}
 * @see {@link AssociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *
 * Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your request later.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because it's not valid. For example, you might have tried to delete a rule group or firewall policy that's in use.
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
export class AssociateSubnetsCommand extends command<AssociateSubnetsCommandInput, AssociateSubnetsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSubnets",
  AssociateSubnets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSubnetsRequest;
      output: AssociateSubnetsResponse;
    };
    sdk: {
      input: AssociateSubnetsCommandInput;
      output: AssociateSubnetsCommandOutput;
    };
  };
}
