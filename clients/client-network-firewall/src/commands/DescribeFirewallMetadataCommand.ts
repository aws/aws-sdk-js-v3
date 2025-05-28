// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFirewallMetadataRequest, DescribeFirewallMetadataResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_DescribeFirewallMetadataCommand, se_DescribeFirewallMetadataCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFirewallMetadataCommand}.
 */
export interface DescribeFirewallMetadataCommandInput extends DescribeFirewallMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFirewallMetadataCommand}.
 */
export interface DescribeFirewallMetadataCommandOutput extends DescribeFirewallMetadataResponse, __MetadataBearer {}

/**
 * <p>Returns the high-level information about a firewall, including the Availability Zones where the Firewall is
 *            currently in use. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeFirewallMetadataCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeFirewallMetadataCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeFirewallMetadataRequest
 *   FirewallArn: "STRING_VALUE",
 * };
 * const command = new DescribeFirewallMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFirewallMetadataResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallPolicyArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Status: "PROVISIONING" || "DELETING" || "READY",
 * //   SupportedAvailabilityZones: { // SupportedAvailabilityZones
 * //     "<keys>": { // AvailabilityZoneMetadata
 * //       IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFirewallMetadataCommandInput - {@link DescribeFirewallMetadataCommandInput}
 * @returns {@link DescribeFirewallMetadataCommandOutput}
 * @see {@link DescribeFirewallMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeFirewallMetadataCommandOutput} for command's `response` shape.
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
export class DescribeFirewallMetadataCommand extends $Command
  .classBuilder<
    DescribeFirewallMetadataCommandInput,
    DescribeFirewallMetadataCommandOutput,
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
  .s("NetworkFirewall_20201112", "DescribeFirewallMetadata", {})
  .n("NetworkFirewallClient", "DescribeFirewallMetadataCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFirewallMetadataCommand)
  .de(de_DescribeFirewallMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFirewallMetadataRequest;
      output: DescribeFirewallMetadataResponse;
    };
    sdk: {
      input: DescribeFirewallMetadataCommandInput;
      output: DescribeFirewallMetadataCommandOutput;
    };
  };
}
