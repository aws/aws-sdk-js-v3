// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateVpcCidrBlockRequest, DisassociateVpcCidrBlockResult } from "../models/models_6";
import { de_DisassociateVpcCidrBlockCommand, se_DisassociateVpcCidrBlockCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateVpcCidrBlockCommand}.
 */
export interface DisassociateVpcCidrBlockCommandInput extends DisassociateVpcCidrBlockRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateVpcCidrBlockCommand}.
 */
export interface DisassociateVpcCidrBlockCommandOutput extends DisassociateVpcCidrBlockResult, __MetadataBearer {}

/**
 * <p>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must
 *             specify its association ID. You can get the association ID by using
 *                 <a>DescribeVpcs</a>. You must detach or delete all gateways and resources that
 *             are associated with the CIDR block before you can disassociate it. </p>
 *          <p>You cannot disassociate the CIDR block with which you originally created the VPC (the
 * 			primary CIDR block).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateVpcCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateVpcCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateVpcCidrBlockRequest
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateVpcCidrBlockCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateVpcCidrBlockResult
 * //   Ipv6CidrBlockAssociation: { // VpcIpv6CidrBlockAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     Ipv6CidrBlock: "STRING_VALUE",
 * //     Ipv6CidrBlockState: { // VpcCidrBlockState
 * //       State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //     NetworkBorderGroup: "STRING_VALUE",
 * //     Ipv6Pool: "STRING_VALUE",
 * //     Ipv6AddressAttribute: "public" || "private",
 * //     IpSource: "amazon" || "byoip" || "none",
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
 * @param DisassociateVpcCidrBlockCommandInput - {@link DisassociateVpcCidrBlockCommandInput}
 * @returns {@link DisassociateVpcCidrBlockCommandOutput}
 * @see {@link DisassociateVpcCidrBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateVpcCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateVpcCidrBlockCommand extends $Command
  .classBuilder<
    DisassociateVpcCidrBlockCommandInput,
    DisassociateVpcCidrBlockCommandOutput,
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
  .s("AmazonEC2", "DisassociateVpcCidrBlock", {})
  .n("EC2Client", "DisassociateVpcCidrBlockCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateVpcCidrBlockCommand)
  .de(de_DisassociateVpcCidrBlockCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateVpcCidrBlockRequest;
      output: DisassociateVpcCidrBlockResult;
    };
    sdk: {
      input: DisassociateVpcCidrBlockCommandInput;
      output: DisassociateVpcCidrBlockCommandOutput;
    };
  };
}
