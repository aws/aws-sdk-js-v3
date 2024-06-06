// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateVpcCidrBlockRequest, AssociateVpcCidrBlockResult } from "../models/models_0";
import { de_AssociateVpcCidrBlockCommand, se_AssociateVpcCidrBlockCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateVpcCidrBlockCommand}.
 */
export interface AssociateVpcCidrBlockCommandInput extends AssociateVpcCidrBlockRequest {}
/**
 * @public
 *
 * The output of {@link AssociateVpcCidrBlockCommand}.
 */
export interface AssociateVpcCidrBlockCommandOutput extends AssociateVpcCidrBlockResult, __MetadataBearer {}

/**
 * <p>Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block,
 *             an Amazon-provided IPv6 CIDR block, or an IPv6 CIDR block from an IPv6 address pool that
 *             you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>). </p>
 *          <p>You must specify one of the following in the request: an IPv4 CIDR block, an IPv6
 *             pool, or an Amazon-provided IPv6 CIDR block.</p>
 *          <p>For more information about associating CIDR blocks with your VPC and applicable
 *             restrictions, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html">IP addressing for your VPCs and subnets</a>
 *             in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateVpcCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateVpcCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateVpcCidrBlockRequest
 *   AmazonProvidedIpv6CidrBlock: true || false,
 *   CidrBlock: "STRING_VALUE",
 *   VpcId: "STRING_VALUE", // required
 *   Ipv6CidrBlockNetworkBorderGroup: "STRING_VALUE",
 *   Ipv6Pool: "STRING_VALUE",
 *   Ipv6CidrBlock: "STRING_VALUE",
 *   Ipv4IpamPoolId: "STRING_VALUE",
 *   Ipv4NetmaskLength: Number("int"),
 *   Ipv6IpamPoolId: "STRING_VALUE",
 *   Ipv6NetmaskLength: Number("int"),
 * };
 * const command = new AssociateVpcCidrBlockCommand(input);
 * const response = await client.send(command);
 * // { // AssociateVpcCidrBlockResult
 * //   Ipv6CidrBlockAssociation: { // VpcIpv6CidrBlockAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     Ipv6CidrBlock: "STRING_VALUE",
 * //     Ipv6CidrBlockState: { // VpcCidrBlockState
 * //       State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //     NetworkBorderGroup: "STRING_VALUE",
 * //     Ipv6Pool: "STRING_VALUE",
 * //   },
 * //   CidrBlockAssociation: { // VpcCidrBlockAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     CidrBlock: "STRING_VALUE",
 * //     CidrBlockState: {
 * //       State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * //   VpcId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateVpcCidrBlockCommandInput - {@link AssociateVpcCidrBlockCommandInput}
 * @returns {@link AssociateVpcCidrBlockCommandOutput}
 * @see {@link AssociateVpcCidrBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateVpcCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AssociateVpcCidrBlockCommand extends $Command
  .classBuilder<
    AssociateVpcCidrBlockCommandInput,
    AssociateVpcCidrBlockCommandOutput,
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
  .s("AmazonEC2", "AssociateVpcCidrBlock", {})
  .n("EC2Client", "AssociateVpcCidrBlockCommand")
  .f(void 0, void 0)
  .ser(se_AssociateVpcCidrBlockCommand)
  .de(de_AssociateVpcCidrBlockCommand)
  .build() {}
