// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeprovisionIpamByoasnRequest, DeprovisionIpamByoasnResult } from "../models/models_3";
import { de_DeprovisionIpamByoasnCommand, se_DeprovisionIpamByoasnCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeprovisionIpamByoasnCommand}.
 */
export interface DeprovisionIpamByoasnCommandInput extends DeprovisionIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionIpamByoasnCommand}.
 */
export interface DeprovisionIpamByoasnCommandOutput extends DeprovisionIpamByoasnResult, __MetadataBearer {}

/**
 * <p>Deprovisions your Autonomous System Number (ASN) from your Amazon Web Services account. This action can only be called after any BYOIP CIDR associations are removed from your Amazon Web Services account with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIpamByoasn.html">DisassociateIpamByoasn</a>.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeprovisionIpamByoasnRequest
 *   DryRun: true || false,
 *   IpamId: "STRING_VALUE", // required
 *   Asn: "STRING_VALUE", // required
 * };
 * const command = new DeprovisionIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionIpamByoasnResult
 * //   Byoasn: { // Byoasn
 * //     Asn: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     State: "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeprovisionIpamByoasnCommandInput - {@link DeprovisionIpamByoasnCommandInput}
 * @returns {@link DeprovisionIpamByoasnCommandOutput}
 * @see {@link DeprovisionIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link DeprovisionIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeprovisionIpamByoasnCommand extends $Command
  .classBuilder<
    DeprovisionIpamByoasnCommandInput,
    DeprovisionIpamByoasnCommandOutput,
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
  .s("AmazonEC2", "DeprovisionIpamByoasn", {})
  .n("EC2Client", "DeprovisionIpamByoasnCommand")
  .f(void 0, void 0)
  .ser(se_DeprovisionIpamByoasnCommand)
  .de(de_DeprovisionIpamByoasnCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprovisionIpamByoasnRequest;
      output: DeprovisionIpamByoasnResult;
    };
    sdk: {
      input: DeprovisionIpamByoasnCommandInput;
      output: DeprovisionIpamByoasnCommandOutput;
    };
  };
}
