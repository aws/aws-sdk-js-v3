// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateIpamByoasnRequest, DisassociateIpamByoasnResult } from "../models/models_6";
import { de_DisassociateIpamByoasnCommand, se_DisassociateIpamByoasnCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateIpamByoasnCommand}.
 */
export interface DisassociateIpamByoasnCommandInput extends DisassociateIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateIpamByoasnCommand}.
 */
export interface DisassociateIpamByoasnCommandOutput extends DisassociateIpamByoasnResult, __MetadataBearer {}

/**
 * <p>Remove the association between your Autonomous System Number (ASN) and your BYOIP CIDR. You may want to use this action to disassociate an ASN from a CIDR or if you want to swap ASNs.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateIpamByoasnRequest
 *   DryRun: true || false,
 *   Asn: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new DisassociateIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateIpamByoasnResult
 * //   AsnAssociation: { // AsnAssociation
 * //     Asn: "STRING_VALUE",
 * //     Cidr: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     State: "disassociated" || "failed-disassociation" || "failed-association" || "pending-disassociation" || "pending-association" || "associated",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateIpamByoasnCommandInput - {@link DisassociateIpamByoasnCommandInput}
 * @returns {@link DisassociateIpamByoasnCommandOutput}
 * @see {@link DisassociateIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link DisassociateIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateIpamByoasnCommand extends $Command
  .classBuilder<
    DisassociateIpamByoasnCommandInput,
    DisassociateIpamByoasnCommandOutput,
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
  .s("AmazonEC2", "DisassociateIpamByoasn", {})
  .n("EC2Client", "DisassociateIpamByoasnCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateIpamByoasnCommand)
  .de(de_DisassociateIpamByoasnCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateIpamByoasnRequest;
      output: DisassociateIpamByoasnResult;
    };
    sdk: {
      input: DisassociateIpamByoasnCommandInput;
      output: DisassociateIpamByoasnCommandOutput;
    };
  };
}
