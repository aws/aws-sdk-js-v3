// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssignIpv6AddressesRequest, AssignIpv6AddressesResult } from "../models/models_0";
import { de_AssignIpv6AddressesCommand, se_AssignIpv6AddressesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssignIpv6AddressesCommand}.
 */
export interface AssignIpv6AddressesCommandInput extends AssignIpv6AddressesRequest {}
/**
 * @public
 *
 * The output of {@link AssignIpv6AddressesCommand}.
 */
export interface AssignIpv6AddressesCommandOutput extends AssignIpv6AddressesResult, __MetadataBearer {}

/**
 * <p>Assigns one or more IPv6 addresses to the specified network interface. You can
 *             specify one or more specific IPv6 addresses, or you can specify the number of IPv6
 *             addresses to be automatically assigned from within the subnet's IPv6 CIDR block range.
 *             You can assign as many IPv6 addresses to a network interface as you can assign private
 *             IPv4 addresses, and the limit varies per instance type. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per Network Interface Per Instance Type</a>
 *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You must specify either the IPv6 addresses or the IPv6 address count in the request. </p>
 *          <p>You can optionally use Prefix Delegation on the network interface. You must specify
 *             either the IPV6 Prefix Delegation prefixes, or the IPv6 Prefix Delegation count. For
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
 *                 Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssignIpv6AddressesRequest
 *   Ipv6AddressCount: Number("int"),
 *   Ipv6Addresses: [ // Ipv6AddressList
 *     "STRING_VALUE",
 *   ],
 *   Ipv6PrefixCount: Number("int"),
 *   Ipv6Prefixes: [ // IpPrefixList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new AssignIpv6AddressesCommand(input);
 * const response = await client.send(command);
 * // { // AssignIpv6AddressesResult
 * //   AssignedIpv6Addresses: [ // Ipv6AddressList
 * //     "STRING_VALUE",
 * //   ],
 * //   AssignedIpv6Prefixes: [ // IpPrefixList
 * //     "STRING_VALUE",
 * //   ],
 * //   NetworkInterfaceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssignIpv6AddressesCommandInput - {@link AssignIpv6AddressesCommandInput}
 * @returns {@link AssignIpv6AddressesCommandOutput}
 * @see {@link AssignIpv6AddressesCommandInput} for command's `input` shape.
 * @see {@link AssignIpv6AddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AssignIpv6AddressesCommand extends $Command
  .classBuilder<
    AssignIpv6AddressesCommandInput,
    AssignIpv6AddressesCommandOutput,
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
  .s("AmazonEC2", "AssignIpv6Addresses", {})
  .n("EC2Client", "AssignIpv6AddressesCommand")
  .f(void 0, void 0)
  .ser(se_AssignIpv6AddressesCommand)
  .de(de_AssignIpv6AddressesCommand)
  .build() {}
