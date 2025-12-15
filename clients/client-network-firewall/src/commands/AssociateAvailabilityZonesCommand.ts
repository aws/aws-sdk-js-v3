// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateAvailabilityZonesRequest, AssociateAvailabilityZonesResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { AssociateAvailabilityZones$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAvailabilityZonesCommand}.
 */
export interface AssociateAvailabilityZonesCommandInput extends AssociateAvailabilityZonesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAvailabilityZonesCommand}.
 */
export interface AssociateAvailabilityZonesCommandOutput extends AssociateAvailabilityZonesResponse, __MetadataBearer {}

/**
 * <p>Associates the specified Availability Zones with a transit gateway-attached firewall. For each Availability Zone, Network Firewall creates a firewall endpoint to process traffic. You can specify one or more Availability Zones where you want to deploy the firewall.</p>
 *          <p>After adding Availability Zones, you must update your transit gateway route tables to direct traffic through the new firewall endpoints. Use <a>DescribeFirewall</a> to monitor the status of the new endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateAvailabilityZonesCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateAvailabilityZonesCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // AssociateAvailabilityZonesRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   AvailabilityZoneMappings: [ // AvailabilityZoneMappings // required
 *     { // AvailabilityZoneMapping
 *       AvailabilityZone: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AssociateAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAvailabilityZonesResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   AvailabilityZoneMappings: [ // AvailabilityZoneMappings
 * //     { // AvailabilityZoneMapping
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAvailabilityZonesCommandInput - {@link AssociateAvailabilityZonesCommandInput}
 * @returns {@link AssociateAvailabilityZonesCommandOutput}
 * @see {@link AssociateAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link AssociateAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *  <p>Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
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
export class AssociateAvailabilityZonesCommand extends $Command
  .classBuilder<
    AssociateAvailabilityZonesCommandInput,
    AssociateAvailabilityZonesCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "AssociateAvailabilityZones", {})
  .n("NetworkFirewallClient", "AssociateAvailabilityZonesCommand")
  .sc(AssociateAvailabilityZones$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAvailabilityZonesRequest;
      output: AssociateAvailabilityZonesResponse;
    };
    sdk: {
      input: AssociateAvailabilityZonesCommandInput;
      output: AssociateAvailabilityZonesCommandOutput;
    };
  };
}
