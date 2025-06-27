// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSubnetCidrBlockRequest, AssociateSubnetCidrBlockResult } from "../models/models_0";
import { de_AssociateSubnetCidrBlockCommand, se_AssociateSubnetCidrBlockCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSubnetCidrBlockCommand}.
 */
export interface AssociateSubnetCidrBlockCommandInput extends AssociateSubnetCidrBlockRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSubnetCidrBlockCommand}.
 */
export interface AssociateSubnetCidrBlockCommandOutput extends AssociateSubnetCidrBlockResult, __MetadataBearer {}

/**
 * <p>Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR
 *             block with your subnet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateSubnetCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateSubnetCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateSubnetCidrBlockRequest
 *   Ipv6IpamPoolId: "STRING_VALUE",
 *   Ipv6NetmaskLength: Number("int"),
 *   SubnetId: "STRING_VALUE", // required
 *   Ipv6CidrBlock: "STRING_VALUE",
 * };
 * const command = new AssociateSubnetCidrBlockCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSubnetCidrBlockResult
 * //   Ipv6CidrBlockAssociation: { // SubnetIpv6CidrBlockAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     Ipv6CidrBlock: "STRING_VALUE",
 * //     Ipv6CidrBlockState: { // SubnetCidrBlockState
 * //       State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //     Ipv6AddressAttribute: "public" || "private",
 * //     IpSource: "amazon" || "byoip" || "none",
 * //   },
 * //   SubnetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateSubnetCidrBlockCommandInput - {@link AssociateSubnetCidrBlockCommandInput}
 * @returns {@link AssociateSubnetCidrBlockCommandOutput}
 * @see {@link AssociateSubnetCidrBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateSubnetCidrBlockCommand extends $Command
  .classBuilder<
    AssociateSubnetCidrBlockCommandInput,
    AssociateSubnetCidrBlockCommandOutput,
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
  .s("AmazonEC2", "AssociateSubnetCidrBlock", {})
  .n("EC2Client", "AssociateSubnetCidrBlockCommand")
  .f(void 0, void 0)
  .ser(se_AssociateSubnetCidrBlockCommand)
  .de(de_AssociateSubnetCidrBlockCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSubnetCidrBlockRequest;
      output: AssociateSubnetCidrBlockResult;
    };
    sdk: {
      input: AssociateSubnetCidrBlockCommandInput;
      output: AssociateSubnetCidrBlockCommandOutput;
    };
  };
}
