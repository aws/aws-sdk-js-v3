// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AllocateIpamPoolCidrRequest, AllocateIpamPoolCidrResult } from "../models/models_0";
import { AllocateIpamPoolCidr } from "../schemas/schemas_56_Ipam";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AllocateIpamPoolCidrCommand}.
 */
export interface AllocateIpamPoolCidrCommandInput extends AllocateIpamPoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link AllocateIpamPoolCidrCommand}.
 */
export interface AllocateIpamPoolCidrCommandOutput extends AllocateIpamPoolCidrResult, __MetadataBearer {}

/**
 * <p>Allocate a CIDR from an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations.</p>
 *          <p>In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/allocate-cidrs-ipam.html">Allocate CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 *          <note>
 *             <p>This action creates an allocation with strong consistency. The returned CIDR will not overlap with any other allocations from the same pool.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AllocateIpamPoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AllocateIpamPoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AllocateIpamPoolCidrRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE",
 *   NetmaskLength: Number("int"),
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   PreviewNextCidr: true || false,
 *   AllowedCidrs: [ // IpamPoolAllocationAllowedCidrs
 *     "STRING_VALUE",
 *   ],
 *   DisallowedCidrs: [ // IpamPoolAllocationDisallowedCidrs
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AllocateIpamPoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // AllocateIpamPoolCidrResult
 * //   IpamPoolAllocation: { // IpamPoolAllocation
 * //     Cidr: "STRING_VALUE",
 * //     IpamPoolAllocationId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "ipam-pool" || "vpc" || "ec2-public-ipv4-pool" || "custom" || "subnet" || "eip",
 * //     ResourceRegion: "STRING_VALUE",
 * //     ResourceOwner: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AllocateIpamPoolCidrCommandInput - {@link AllocateIpamPoolCidrCommandInput}
 * @returns {@link AllocateIpamPoolCidrCommandOutput}
 * @see {@link AllocateIpamPoolCidrCommandInput} for command's `input` shape.
 * @see {@link AllocateIpamPoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AllocateIpamPoolCidrCommand extends $Command
  .classBuilder<
    AllocateIpamPoolCidrCommandInput,
    AllocateIpamPoolCidrCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "AllocateIpamPoolCidr", {})
  .n("EC2Client", "AllocateIpamPoolCidrCommand")
  .sc(AllocateIpamPoolCidr)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AllocateIpamPoolCidrRequest;
      output: AllocateIpamPoolCidrResult;
    };
    sdk: {
      input: AllocateIpamPoolCidrCommandInput;
      output: AllocateIpamPoolCidrCommandOutput;
    };
  };
}
