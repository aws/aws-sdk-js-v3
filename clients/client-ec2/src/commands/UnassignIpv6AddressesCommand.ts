// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UnassignIpv6AddressesRequest, UnassignIpv6AddressesResult } from "../models/models_7";
import { de_UnassignIpv6AddressesCommand, se_UnassignIpv6AddressesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnassignIpv6AddressesCommand}.
 */
export interface UnassignIpv6AddressesCommandInput extends UnassignIpv6AddressesRequest {}
/**
 * @public
 *
 * The output of {@link UnassignIpv6AddressesCommand}.
 */
export interface UnassignIpv6AddressesCommandOutput extends UnassignIpv6AddressesResult, __MetadataBearer {}

/**
 * <p>Unassigns one or more IPv6 addresses IPv4 Prefix Delegation prefixes from a network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // UnassignIpv6AddressesRequest
 *   Ipv6Addresses: [ // Ipv6AddressList
 *     "STRING_VALUE",
 *   ],
 *   Ipv6Prefixes: [ // IpPrefixList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new UnassignIpv6AddressesCommand(input);
 * const response = await client.send(command);
 * // { // UnassignIpv6AddressesResult
 * //   NetworkInterfaceId: "STRING_VALUE",
 * //   UnassignedIpv6Addresses: [ // Ipv6AddressList
 * //     "STRING_VALUE",
 * //   ],
 * //   UnassignedIpv6Prefixes: [ // IpPrefixList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UnassignIpv6AddressesCommandInput - {@link UnassignIpv6AddressesCommandInput}
 * @returns {@link UnassignIpv6AddressesCommandOutput}
 * @see {@link UnassignIpv6AddressesCommandInput} for command's `input` shape.
 * @see {@link UnassignIpv6AddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class UnassignIpv6AddressesCommand extends $Command
  .classBuilder<
    UnassignIpv6AddressesCommandInput,
    UnassignIpv6AddressesCommandOutput,
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
  .s("AmazonEC2", "UnassignIpv6Addresses", {})
  .n("EC2Client", "UnassignIpv6AddressesCommand")
  .f(void 0, void 0)
  .ser(se_UnassignIpv6AddressesCommand)
  .de(de_UnassignIpv6AddressesCommand)
  .build() {}
