// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssignIpv6AddressesRequest, AssignIpv6AddressesResult } from "../models/models_0";
import { AssignIpv6Addresses } from "../schemas/schemas_0";

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
 * <p>Assigns the specified IPv6 addresses to the specified network interface. You can
 *             specify specific IPv6 addresses, or you can specify the number of IPv6 addresses to be
 *             automatically assigned from the subnet's IPv6 CIDR block range. You can assign as many
 *             IPv6 addresses to a network interface as you can assign private IPv4 addresses, and the
 *             limit varies by instance type.</p>
 *          <p>You must specify either the IPv6 addresses or the IPv6 address count in the request. </p>
 *          <p>You can optionally use Prefix Delegation on the network interface. You must specify
 *             either the IPV6 Prefix Delegation prefixes, or the IPv6 Prefix Delegation count. For
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html"> Assigning prefixes to network
 *                 interfaces</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssignIpv6AddressesRequest
 *   Ipv6PrefixCount: Number("int"),
 *   Ipv6Prefixes: [ // IpPrefixList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   Ipv6Addresses: [ // Ipv6AddressList
 *     "STRING_VALUE",
 *   ],
 *   Ipv6AddressCount: Number("int"),
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "AssignIpv6Addresses", {})
  .n("EC2Client", "AssignIpv6AddressesCommand")
  .sc(AssignIpv6Addresses)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssignIpv6AddressesRequest;
      output: AssignIpv6AddressesResult;
    };
    sdk: {
      input: AssignIpv6AddressesCommandInput;
      output: AssignIpv6AddressesCommandOutput;
    };
  };
}
