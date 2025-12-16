// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UnassignIpv6AddressesRequest, UnassignIpv6AddressesResult } from "../models/models_7";
import { UnassignIpv6Addresses$ } from "../schemas/schemas_0";

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
 * <p>Unassigns the specified IPv6 addresses or Prefix Delegation prefixes from a network
 *             interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // UnassignIpv6AddressesRequest
 *   Ipv6Prefixes: [ // IpPrefixList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   Ipv6Addresses: [ // Ipv6AddressList
 *     "STRING_VALUE",
 *   ],
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "UnassignIpv6Addresses", {})
  .n("EC2Client", "UnassignIpv6AddressesCommand")
  .sc(UnassignIpv6Addresses$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnassignIpv6AddressesRequest;
      output: UnassignIpv6AddressesResult;
    };
    sdk: {
      input: UnassignIpv6AddressesCommandInput;
      output: UnassignIpv6AddressesCommandOutput;
    };
  };
}
