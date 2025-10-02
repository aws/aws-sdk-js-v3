// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateSubnetCidrBlockRequest, DisassociateSubnetCidrBlockResult } from "../models/models_6";
import { de_DisassociateSubnetCidrBlockCommand, se_DisassociateSubnetCidrBlockCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSubnetCidrBlockCommand}.
 */
export interface DisassociateSubnetCidrBlockCommandInput extends DisassociateSubnetCidrBlockRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSubnetCidrBlockCommand}.
 */
export interface DisassociateSubnetCidrBlockCommandOutput extends DisassociateSubnetCidrBlockResult, __MetadataBearer {}

/**
 * <p>Disassociates a CIDR block from a subnet. Currently, you can disassociate an IPv6 CIDR block only. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateSubnetCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateSubnetCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateSubnetCidrBlockRequest
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateSubnetCidrBlockCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateSubnetCidrBlockResult
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
 * @param DisassociateSubnetCidrBlockCommandInput - {@link DisassociateSubnetCidrBlockCommandInput}
 * @returns {@link DisassociateSubnetCidrBlockCommandOutput}
 * @see {@link DisassociateSubnetCidrBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateSubnetCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateSubnetCidrBlockCommand extends $Command
  .classBuilder<
    DisassociateSubnetCidrBlockCommandInput,
    DisassociateSubnetCidrBlockCommandOutput,
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
  .s("AmazonEC2", "DisassociateSubnetCidrBlock", {})
  .n("EC2Client", "DisassociateSubnetCidrBlockCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateSubnetCidrBlockCommand)
  .de(de_DisassociateSubnetCidrBlockCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSubnetCidrBlockRequest;
      output: DisassociateSubnetCidrBlockResult;
    };
    sdk: {
      input: DisassociateSubnetCidrBlockCommandInput;
      output: DisassociateSubnetCidrBlockCommandOutput;
    };
  };
}
