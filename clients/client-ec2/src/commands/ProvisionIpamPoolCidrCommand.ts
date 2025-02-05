// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ProvisionIpamPoolCidrRequest, ProvisionIpamPoolCidrResult } from "../models/models_7";
import { de_ProvisionIpamPoolCidrCommand, se_ProvisionIpamPoolCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ProvisionIpamPoolCidrCommand}.
 */
export interface ProvisionIpamPoolCidrCommandInput extends ProvisionIpamPoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionIpamPoolCidrCommand}.
 */
export interface ProvisionIpamPoolCidrCommandOutput extends ProvisionIpamPoolCidrResult, __MetadataBearer {}

/**
 * <p>Provision a CIDR to an IPAM pool. You can use this action to provision new CIDRs to a top-level pool or to transfer a CIDR from a top-level pool to a pool within it.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/prov-cidr-ipam.html">Provision CIDRs to pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionIpamPoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionIpamPoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ProvisionIpamPoolCidrRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE",
 *   CidrAuthorizationContext: { // IpamCidrAuthorizationContext
 *     Message: "STRING_VALUE",
 *     Signature: "STRING_VALUE",
 *   },
 *   NetmaskLength: Number("int"),
 *   ClientToken: "STRING_VALUE",
 *   VerificationMethod: "remarks-x509" || "dns-token",
 *   IpamExternalResourceVerificationTokenId: "STRING_VALUE",
 * };
 * const command = new ProvisionIpamPoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionIpamPoolCidrResult
 * //   IpamPoolCidr: { // IpamPoolCidr
 * //     Cidr: "STRING_VALUE",
 * //     State: "pending-provision" || "provisioned" || "failed-provision" || "pending-deprovision" || "deprovisioned" || "failed-deprovision" || "pending-import" || "failed-import",
 * //     FailureReason: { // IpamPoolCidrFailureReason
 * //       Code: "cidr-not-available" || "limit-exceeded",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     IpamPoolCidrId: "STRING_VALUE",
 * //     NetmaskLength: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ProvisionIpamPoolCidrCommandInput - {@link ProvisionIpamPoolCidrCommandInput}
 * @returns {@link ProvisionIpamPoolCidrCommandOutput}
 * @see {@link ProvisionIpamPoolCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionIpamPoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ProvisionIpamPoolCidrCommand extends $Command
  .classBuilder<
    ProvisionIpamPoolCidrCommandInput,
    ProvisionIpamPoolCidrCommandOutput,
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
  .s("AmazonEC2", "ProvisionIpamPoolCidr", {})
  .n("EC2Client", "ProvisionIpamPoolCidrCommand")
  .f(void 0, void 0)
  .ser(se_ProvisionIpamPoolCidrCommand)
  .de(de_ProvisionIpamPoolCidrCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProvisionIpamPoolCidrRequest;
      output: ProvisionIpamPoolCidrResult;
    };
    sdk: {
      input: ProvisionIpamPoolCidrCommandInput;
      output: ProvisionIpamPoolCidrCommandOutput;
    };
  };
}
