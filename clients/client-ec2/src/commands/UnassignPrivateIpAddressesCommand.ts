// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UnassignPrivateIpAddressesRequest } from "../models/models_8";
import { de_UnassignPrivateIpAddressesCommand, se_UnassignPrivateIpAddressesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnassignPrivateIpAddressesCommand}.
 */
export interface UnassignPrivateIpAddressesCommandInput extends UnassignPrivateIpAddressesRequest {}
/**
 * @public
 *
 * The output of {@link UnassignPrivateIpAddressesCommand}.
 */
export interface UnassignPrivateIpAddressesCommandOutput extends __MetadataBearer {}

/**
 * <p>Unassigns the specified secondary private IP addresses or IPv4 Prefix Delegation prefixes from a
 *         	network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignPrivateIpAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignPrivateIpAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // UnassignPrivateIpAddressesRequest
 *   Ipv4Prefixes: [ // IpPrefixList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   PrivateIpAddresses: [ // PrivateIpAddressStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UnassignPrivateIpAddressesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnassignPrivateIpAddressesCommandInput - {@link UnassignPrivateIpAddressesCommandInput}
 * @returns {@link UnassignPrivateIpAddressesCommandOutput}
 * @see {@link UnassignPrivateIpAddressesCommandInput} for command's `input` shape.
 * @see {@link UnassignPrivateIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To unassign a secondary private IP address from a network interface
 * ```javascript
 * // This example unassigns the specified private IP address from the specified network interface.
 * const input = {
 *   NetworkInterfaceId: "eni-e5aa89a3",
 *   PrivateIpAddresses: [
 *     "10.0.0.82"
 *   ]
 * };
 * const command = new UnassignPrivateIpAddressesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UnassignPrivateIpAddressesCommand extends $Command
  .classBuilder<
    UnassignPrivateIpAddressesCommandInput,
    UnassignPrivateIpAddressesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "UnassignPrivateIpAddresses", {})
  .n("EC2Client", "UnassignPrivateIpAddressesCommand")
  .f(void 0, void 0)
  .ser(se_UnassignPrivateIpAddressesCommand)
  .de(de_UnassignPrivateIpAddressesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnassignPrivateIpAddressesRequest;
      output: {};
    };
    sdk: {
      input: UnassignPrivateIpAddressesCommandInput;
      output: UnassignPrivateIpAddressesCommandOutput;
    };
  };
}
