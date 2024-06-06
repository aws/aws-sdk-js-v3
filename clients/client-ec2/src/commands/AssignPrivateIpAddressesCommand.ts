// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssignPrivateIpAddressesRequest, AssignPrivateIpAddressesResult } from "../models/models_0";
import { de_AssignPrivateIpAddressesCommand, se_AssignPrivateIpAddressesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssignPrivateIpAddressesCommand}.
 */
export interface AssignPrivateIpAddressesCommandInput extends AssignPrivateIpAddressesRequest {}
/**
 * @public
 *
 * The output of {@link AssignPrivateIpAddressesCommand}.
 */
export interface AssignPrivateIpAddressesCommandOutput extends AssignPrivateIpAddressesResult, __MetadataBearer {}

/**
 * <p>Assigns one or more secondary private IP addresses to the specified network interface.</p>
 *          <p>You can specify one or more specific secondary IP addresses, or you can specify the number
 *             of secondary IP addresses to be automatically assigned within the subnet's CIDR block range.
 *             The number of secondary IP addresses that you can assign to an instance varies by instance type.
 *             For information about instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about
 *             Elastic IP addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>When you move a secondary private IP address to another network interface, any Elastic IP address
 *             that is associated with the IP address is also moved.</p>
 *          <p>Remapping an IP address is an asynchronous operation. When you move an IP address from one network
 *             interface to another, check <code>network/interfaces/macs/mac/local-ipv4s</code> in the instance
 *             metadata to confirm that the remapping is complete.</p>
 *          <p>You must specify either the IP addresses or the IP address count in the request.</p>
 *          <p>You can optionally use Prefix Delegation on the network interface. You must specify
 *             either the IPv4 Prefix Delegation prefixes, or the IPv4 Prefix Delegation count. For
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
 *                 Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssignPrivateIpAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssignPrivateIpAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssignPrivateIpAddressesRequest
 *   AllowReassignment: true || false,
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   PrivateIpAddresses: [ // PrivateIpAddressStringList
 *     "STRING_VALUE",
 *   ],
 *   SecondaryPrivateIpAddressCount: Number("int"),
 *   Ipv4Prefixes: [ // IpPrefixList
 *     "STRING_VALUE",
 *   ],
 *   Ipv4PrefixCount: Number("int"),
 * };
 * const command = new AssignPrivateIpAddressesCommand(input);
 * const response = await client.send(command);
 * // { // AssignPrivateIpAddressesResult
 * //   NetworkInterfaceId: "STRING_VALUE",
 * //   AssignedPrivateIpAddresses: [ // AssignedPrivateIpAddressList
 * //     { // AssignedPrivateIpAddress
 * //       PrivateIpAddress: "STRING_VALUE",
 * //     },
 * //   ],
 * //   AssignedIpv4Prefixes: [ // Ipv4PrefixesList
 * //     { // Ipv4PrefixSpecification
 * //       Ipv4Prefix: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssignPrivateIpAddressesCommandInput - {@link AssignPrivateIpAddressesCommandInput}
 * @returns {@link AssignPrivateIpAddressesCommandOutput}
 * @see {@link AssignPrivateIpAddressesCommandInput} for command's `input` shape.
 * @see {@link AssignPrivateIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To assign a specific secondary private IP address to an interface
 * ```javascript
 * // This example assigns the specified secondary private IP address to the specified network interface.
 * const input = {
 *   "NetworkInterfaceId": "eni-e5aa89a3",
 *   "PrivateIpAddresses": [
 *     "10.0.0.82"
 *   ]
 * };
 * const command = new AssignPrivateIpAddressesCommand(input);
 * await client.send(command);
 * // example id: ec2-assign-private-ip-addresses-1
 * ```
 *
 * @example To assign secondary private IP addresses that Amazon EC2 selects to an interface
 * ```javascript
 * // This example assigns two secondary private IP addresses to the specified network interface. Amazon EC2 automatically assigns these IP addresses from the available IP addresses in the CIDR block range of the subnet the network interface is associated with.
 * const input = {
 *   "NetworkInterfaceId": "eni-e5aa89a3",
 *   "SecondaryPrivateIpAddressCount": 2
 * };
 * const command = new AssignPrivateIpAddressesCommand(input);
 * await client.send(command);
 * // example id: ec2-assign-private-ip-addresses-2
 * ```
 *
 */
export class AssignPrivateIpAddressesCommand extends $Command
  .classBuilder<
    AssignPrivateIpAddressesCommandInput,
    AssignPrivateIpAddressesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "AssignPrivateIpAddresses", {})
  .n("EC2Client", "AssignPrivateIpAddressesCommand")
  .f(void 0, void 0)
  .ser(se_AssignPrivateIpAddressesCommand)
  .de(de_AssignPrivateIpAddressesCommand)
  .build() {}
