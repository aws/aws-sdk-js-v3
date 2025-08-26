// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ProvisionPublicIpv4PoolCidrRequest, ProvisionPublicIpv4PoolCidrResult } from "../models/models_8";
import { de_ProvisionPublicIpv4PoolCidrCommand, se_ProvisionPublicIpv4PoolCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ProvisionPublicIpv4PoolCidrCommand}.
 */
export interface ProvisionPublicIpv4PoolCidrCommandInput extends ProvisionPublicIpv4PoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionPublicIpv4PoolCidrCommand}.
 */
export interface ProvisionPublicIpv4PoolCidrCommandOutput extends ProvisionPublicIpv4PoolCidrResult, __MetadataBearer {}

/**
 * <p>Provision a CIDR to a public IPv4 pool.</p>
 *          <p>For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionPublicIpv4PoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionPublicIpv4PoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ProvisionPublicIpv4PoolCidrRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   PoolId: "STRING_VALUE", // required
 *   NetmaskLength: Number("int"), // required
 *   NetworkBorderGroup: "STRING_VALUE",
 * };
 * const command = new ProvisionPublicIpv4PoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionPublicIpv4PoolCidrResult
 * //   PoolId: "STRING_VALUE",
 * //   PoolAddressRange: { // PublicIpv4PoolRange
 * //     FirstAddress: "STRING_VALUE",
 * //     LastAddress: "STRING_VALUE",
 * //     AddressCount: Number("int"),
 * //     AvailableAddressCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ProvisionPublicIpv4PoolCidrCommandInput - {@link ProvisionPublicIpv4PoolCidrCommandInput}
 * @returns {@link ProvisionPublicIpv4PoolCidrCommandOutput}
 * @see {@link ProvisionPublicIpv4PoolCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionPublicIpv4PoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ProvisionPublicIpv4PoolCidrCommand extends $Command
  .classBuilder<
    ProvisionPublicIpv4PoolCidrCommandInput,
    ProvisionPublicIpv4PoolCidrCommandOutput,
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
  .s("AmazonEC2", "ProvisionPublicIpv4PoolCidr", {})
  .n("EC2Client", "ProvisionPublicIpv4PoolCidrCommand")
  .f(void 0, void 0)
  .ser(se_ProvisionPublicIpv4PoolCidrCommand)
  .de(de_ProvisionPublicIpv4PoolCidrCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProvisionPublicIpv4PoolCidrRequest;
      output: ProvisionPublicIpv4PoolCidrResult;
    };
    sdk: {
      input: ProvisionPublicIpv4PoolCidrCommandInput;
      output: ProvisionPublicIpv4PoolCidrCommandOutput;
    };
  };
}
