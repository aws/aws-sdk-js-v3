// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamResourceCidrRequest, ModifyIpamResourceCidrResult } from "../models/models_7";
import { de_ModifyIpamResourceCidrCommand, se_ModifyIpamResourceCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpamResourceCidrCommand}.
 */
export interface ModifyIpamResourceCidrCommandInput extends ModifyIpamResourceCidrRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamResourceCidrCommand}.
 */
export interface ModifyIpamResourceCidrCommandOutput extends ModifyIpamResourceCidrResult, __MetadataBearer {}

/**
 * <p>Modify a resource CIDR. You can use this action to transfer resource CIDRs between scopes and ignore resource CIDRs that you do not want to manage. If set to false, the resource will not be tracked for overlap, it cannot be auto-imported into a pool, and it will be removed from any pool it has an allocation in.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/move-resource-ipam.html">Move resource CIDRs between scopes</a> and <a href="https://docs.aws.amazon.com/vpc/latest/ipam/change-monitoring-state-ipam.html">Change the monitoring state of resource CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamResourceCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamResourceCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamResourceCidrRequest
 *   DryRun: true || false,
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceCidr: "STRING_VALUE", // required
 *   ResourceRegion: "STRING_VALUE", // required
 *   CurrentIpamScopeId: "STRING_VALUE", // required
 *   DestinationIpamScopeId: "STRING_VALUE",
 *   Monitored: true || false, // required
 * };
 * const command = new ModifyIpamResourceCidrCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamResourceCidrResult
 * //   IpamResourceCidr: { // IpamResourceCidr
 * //     IpamId: "STRING_VALUE",
 * //     IpamScopeId: "STRING_VALUE",
 * //     IpamPoolId: "STRING_VALUE",
 * //     ResourceRegion: "STRING_VALUE",
 * //     ResourceOwnerId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceName: "STRING_VALUE",
 * //     ResourceCidr: "STRING_VALUE",
 * //     ResourceType: "vpc" || "subnet" || "eip" || "public-ipv4-pool" || "ipv6-pool" || "eni",
 * //     ResourceTags: [ // IpamResourceTagList
 * //       { // IpamResourceTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IpUsage: Number("double"),
 * //     ComplianceStatus: "compliant" || "noncompliant" || "unmanaged" || "ignored",
 * //     ManagementState: "managed" || "unmanaged" || "ignored",
 * //     OverlapStatus: "overlapping" || "nonoverlapping" || "ignored",
 * //     VpcId: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamResourceCidrCommandInput - {@link ModifyIpamResourceCidrCommandInput}
 * @returns {@link ModifyIpamResourceCidrCommandOutput}
 * @see {@link ModifyIpamResourceCidrCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamResourceCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyIpamResourceCidrCommand extends $Command
  .classBuilder<
    ModifyIpamResourceCidrCommandInput,
    ModifyIpamResourceCidrCommandOutput,
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
  .s("AmazonEC2", "ModifyIpamResourceCidr", {})
  .n("EC2Client", "ModifyIpamResourceCidrCommand")
  .f(void 0, void 0)
  .ser(se_ModifyIpamResourceCidrCommand)
  .de(de_ModifyIpamResourceCidrCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamResourceCidrRequest;
      output: ModifyIpamResourceCidrResult;
    };
    sdk: {
      input: ModifyIpamResourceCidrCommandInput;
      output: ModifyIpamResourceCidrCommandOutput;
    };
  };
}
