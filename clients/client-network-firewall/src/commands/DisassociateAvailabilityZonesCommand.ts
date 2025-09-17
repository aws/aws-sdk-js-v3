// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateAvailabilityZonesRequest, DisassociateAvailabilityZonesResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_DisassociateAvailabilityZonesCommand,
  se_DisassociateAvailabilityZonesCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAvailabilityZonesCommand}.
 */
export interface DisassociateAvailabilityZonesCommandInput extends DisassociateAvailabilityZonesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAvailabilityZonesCommand}.
 */
export interface DisassociateAvailabilityZonesCommandOutput
  extends DisassociateAvailabilityZonesResponse,
    __MetadataBearer {}

/**
 * <p>Removes the specified Availability Zone associations from a transit gateway-attached firewall. This removes the firewall endpoints from these Availability Zones and stops traffic filtering in those zones. Before removing an Availability Zone, ensure you've updated your transit gateway route tables to redirect traffic appropriately.</p>
 *          <note>
 *             <p>If <code>AvailabilityZoneChangeProtection</code> is enabled, you must first disable it using <a>UpdateAvailabilityZoneChangeProtection</a>.</p>
 *          </note>
 *          <p>To verify the status of your Availability Zone changes, use <a>DescribeFirewall</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DisassociateAvailabilityZonesCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DisassociateAvailabilityZonesCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DisassociateAvailabilityZonesRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   AvailabilityZoneMappings: [ // AvailabilityZoneMappings // required
 *     { // AvailabilityZoneMapping
 *       AvailabilityZone: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DisassociateAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateAvailabilityZonesResponse
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
 * @param DisassociateAvailabilityZonesCommandInput - {@link DisassociateAvailabilityZonesCommandInput}
 * @returns {@link DisassociateAvailabilityZonesCommandOutput}
 * @see {@link DisassociateAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link DisassociateAvailabilityZonesCommandOutput} for command's `response` shape.
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
export class DisassociateAvailabilityZonesCommand extends $Command
  .classBuilder<
    DisassociateAvailabilityZonesCommandInput,
    DisassociateAvailabilityZonesCommandOutput,
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
  .s("NetworkFirewall_20201112", "DisassociateAvailabilityZones", {})
  .n("NetworkFirewallClient", "DisassociateAvailabilityZonesCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateAvailabilityZonesCommand)
  .de(de_DisassociateAvailabilityZonesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAvailabilityZonesRequest;
      output: DisassociateAvailabilityZonesResponse;
    };
    sdk: {
      input: DisassociateAvailabilityZonesCommandInput;
      output: DisassociateAvailabilityZonesCommandOutput;
    };
  };
}
