// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeVpcClassicLinkRequest, DescribeVpcClassicLinkResult } from "../models/models_5";
import { DescribeVpcClassicLink } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcClassicLinkCommand}.
 */
export interface DescribeVpcClassicLinkCommandInput extends DescribeVpcClassicLinkRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcClassicLinkCommand}.
 */
export interface DescribeVpcClassicLinkCommandOutput extends DescribeVpcClassicLinkResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Describes the ClassicLink status of the specified VPCs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcClassicLinkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcClassicLinkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcClassicLinkRequest
 *   DryRun: true || false,
 *   VpcIds: [ // VpcClassicLinkIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeVpcClassicLinkCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcClassicLinkResult
 * //   Vpcs: [ // VpcClassicLinkList
 * //     { // VpcClassicLink
 * //       ClassicLinkEnabled: true || false,
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVpcClassicLinkCommandInput - {@link DescribeVpcClassicLinkCommandInput}
 * @returns {@link DescribeVpcClassicLinkCommandOutput}
 * @see {@link DescribeVpcClassicLinkCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcClassicLinkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcClassicLinkCommand extends $Command
  .classBuilder<
    DescribeVpcClassicLinkCommandInput,
    DescribeVpcClassicLinkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeVpcClassicLink", {})
  .n("EC2Client", "DescribeVpcClassicLinkCommand")
  .sc(DescribeVpcClassicLink)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcClassicLinkRequest;
      output: DescribeVpcClassicLinkResult;
    };
    sdk: {
      input: DescribeVpcClassicLinkCommandInput;
      output: DescribeVpcClassicLinkCommandOutput;
    };
  };
}
