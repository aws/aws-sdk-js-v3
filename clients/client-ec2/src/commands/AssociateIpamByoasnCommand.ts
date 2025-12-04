// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateIpamByoasnRequest, AssociateIpamByoasnResult } from "../models/models_0";
import { AssociateIpamByoasn } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateIpamByoasnCommand}.
 */
export interface AssociateIpamByoasnCommandInput extends AssociateIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link AssociateIpamByoasnCommand}.
 */
export interface AssociateIpamByoasnCommandOutput extends AssociateIpamByoasnResult, __MetadataBearer {}

/**
 * <p>Associates your Autonomous System Number (ASN) with a BYOIP CIDR that you own in the same Amazon Web Services Region.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 *          <p>After the association succeeds, the ASN is eligible for
 *             advertisement. You can view the association with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeByoipCidrs.html">DescribeByoipCidrs</a>. You can advertise the CIDR with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AdvertiseByoipCidr.html">AdvertiseByoipCidr</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateIpamByoasnRequest
 *   DryRun: true || false,
 *   Asn: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new AssociateIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // AssociateIpamByoasnResult
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
 * @param AssociateIpamByoasnCommandInput - {@link AssociateIpamByoasnCommandInput}
 * @returns {@link AssociateIpamByoasnCommandOutput}
 * @see {@link AssociateIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link AssociateIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateIpamByoasnCommand extends $Command
  .classBuilder<
    AssociateIpamByoasnCommandInput,
    AssociateIpamByoasnCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "AssociateIpamByoasn", {})
  .n("EC2Client", "AssociateIpamByoasnCommand")
  .sc(AssociateIpamByoasn)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateIpamByoasnRequest;
      output: AssociateIpamByoasnResult;
    };
    sdk: {
      input: AssociateIpamByoasnCommandInput;
      output: AssociateIpamByoasnCommandOutput;
    };
  };
}
