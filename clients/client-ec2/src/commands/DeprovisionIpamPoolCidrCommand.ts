// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeprovisionIpamPoolCidrRequest, DeprovisionIpamPoolCidrResult } from "../models/models_3";
import { DeprovisionIpamPoolCidr } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeprovisionIpamPoolCidrCommand}.
 */
export interface DeprovisionIpamPoolCidrCommandInput extends DeprovisionIpamPoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionIpamPoolCidrCommand}.
 */
export interface DeprovisionIpamPoolCidrCommandOutput extends DeprovisionIpamPoolCidrResult, __MetadataBearer {}

/**
 * <p>Deprovision a CIDR provisioned from an IPAM pool. If you deprovision a CIDR from a pool that has a source pool, the CIDR is recycled back into the source pool. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/depro-pool-cidr-ipam.html">Deprovision pool CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionIpamPoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionIpamPoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeprovisionIpamPoolCidrRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE",
 * };
 * const command = new DeprovisionIpamPoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionIpamPoolCidrResult
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
 * @param DeprovisionIpamPoolCidrCommandInput - {@link DeprovisionIpamPoolCidrCommandInput}
 * @returns {@link DeprovisionIpamPoolCidrCommandOutput}
 * @see {@link DeprovisionIpamPoolCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionIpamPoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeprovisionIpamPoolCidrCommand extends $Command
  .classBuilder<
    DeprovisionIpamPoolCidrCommandInput,
    DeprovisionIpamPoolCidrCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeprovisionIpamPoolCidr", {})
  .n("EC2Client", "DeprovisionIpamPoolCidrCommand")
  .sc(DeprovisionIpamPoolCidr)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprovisionIpamPoolCidrRequest;
      output: DeprovisionIpamPoolCidrResult;
    };
    sdk: {
      input: DeprovisionIpamPoolCidrCommandInput;
      output: DeprovisionIpamPoolCidrCommandOutput;
    };
  };
}
