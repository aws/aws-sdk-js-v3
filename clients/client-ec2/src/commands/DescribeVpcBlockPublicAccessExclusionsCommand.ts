// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeVpcBlockPublicAccessExclusionsRequest,
  DescribeVpcBlockPublicAccessExclusionsResult,
} from "../models/models_6";
import { DescribeVpcBlockPublicAccessExclusions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcBlockPublicAccessExclusionsCommand}.
 */
export interface DescribeVpcBlockPublicAccessExclusionsCommandInput
  extends DescribeVpcBlockPublicAccessExclusionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcBlockPublicAccessExclusionsCommand}.
 */
export interface DescribeVpcBlockPublicAccessExclusionsCommandOutput
  extends DescribeVpcBlockPublicAccessExclusionsResult,
    __MetadataBearer {}

/**
 * <p>Describe VPC Block Public Access (BPA) exclusions. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html">Block public access to VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcBlockPublicAccessExclusionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcBlockPublicAccessExclusionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcBlockPublicAccessExclusionsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ExclusionIds: [ // VpcBlockPublicAccessExclusionIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeVpcBlockPublicAccessExclusionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcBlockPublicAccessExclusionsResult
 * //   VpcBlockPublicAccessExclusions: [ // VpcBlockPublicAccessExclusionList
 * //     { // VpcBlockPublicAccessExclusion
 * //       ExclusionId: "STRING_VALUE",
 * //       InternetGatewayExclusionMode: "allow-bidirectional" || "allow-egress",
 * //       ResourceArn: "STRING_VALUE",
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "update-in-progress" || "update-complete" || "update-failed" || "delete-in-progress" || "delete-complete" || "disable-in-progress" || "disable-complete",
 * //       Reason: "STRING_VALUE",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //       DeletionTimestamp: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcBlockPublicAccessExclusionsCommandInput - {@link DescribeVpcBlockPublicAccessExclusionsCommandInput}
 * @returns {@link DescribeVpcBlockPublicAccessExclusionsCommandOutput}
 * @see {@link DescribeVpcBlockPublicAccessExclusionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcBlockPublicAccessExclusionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcBlockPublicAccessExclusionsCommand extends $Command
  .classBuilder<
    DescribeVpcBlockPublicAccessExclusionsCommandInput,
    DescribeVpcBlockPublicAccessExclusionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeVpcBlockPublicAccessExclusions", {})
  .n("EC2Client", "DescribeVpcBlockPublicAccessExclusionsCommand")
  .sc(DescribeVpcBlockPublicAccessExclusions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcBlockPublicAccessExclusionsRequest;
      output: DescribeVpcBlockPublicAccessExclusionsResult;
    };
    sdk: {
      input: DescribeVpcBlockPublicAccessExclusionsCommandInput;
      output: DescribeVpcBlockPublicAccessExclusionsCommandOutput;
    };
  };
}
