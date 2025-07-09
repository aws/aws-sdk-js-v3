// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpamsRequest, DescribeIpamsResult } from "../models/models_5";
import { de_DescribeIpamsCommand, se_DescribeIpamsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamsCommand}.
 */
export interface DescribeIpamsCommandInput extends DescribeIpamsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamsCommand}.
 */
export interface DescribeIpamsCommandOutput extends DescribeIpamsResult, __MetadataBearer {}

/**
 * <p>Get information about your IPAM pools.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IpamIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeIpamsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamsResult
 * //   NextToken: "STRING_VALUE",
 * //   Ipams: [ // IpamSet
 * //     { // Ipam
 * //       OwnerId: "STRING_VALUE",
 * //       IpamId: "STRING_VALUE",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       PublicDefaultScopeId: "STRING_VALUE",
 * //       PrivateDefaultScopeId: "STRING_VALUE",
 * //       ScopeCount: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       OperatingRegions: [ // IpamOperatingRegionSet
 * //         { // IpamOperatingRegion
 * //           RegionName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DefaultResourceDiscoveryId: "STRING_VALUE",
 * //       DefaultResourceDiscoveryAssociationId: "STRING_VALUE",
 * //       ResourceDiscoveryAssociationCount: Number("int"),
 * //       StateMessage: "STRING_VALUE",
 * //       Tier: "free" || "advanced",
 * //       EnablePrivateGua: true || false,
 * //       MeteredAccount: "ipam-owner" || "resource-owner",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamsCommandInput - {@link DescribeIpamsCommandInput}
 * @returns {@link DescribeIpamsCommandOutput}
 * @see {@link DescribeIpamsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamsCommand extends $Command
  .classBuilder<
    DescribeIpamsCommandInput,
    DescribeIpamsCommandOutput,
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
  .s("AmazonEC2", "DescribeIpams", {})
  .n("EC2Client", "DescribeIpamsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIpamsCommand)
  .de(de_DescribeIpamsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamsRequest;
      output: DescribeIpamsResult;
    };
    sdk: {
      input: DescribeIpamsCommandInput;
      output: DescribeIpamsCommandOutput;
    };
  };
}
