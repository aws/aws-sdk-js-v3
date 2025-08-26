// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcClassicLinkDnsSupportRequest, DescribeVpcClassicLinkDnsSupportResult } from "../models/models_6";
import {
  de_DescribeVpcClassicLinkDnsSupportCommand,
  se_DescribeVpcClassicLinkDnsSupportCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcClassicLinkDnsSupportCommand}.
 */
export interface DescribeVpcClassicLinkDnsSupportCommandInput extends DescribeVpcClassicLinkDnsSupportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcClassicLinkDnsSupportCommand}.
 */
export interface DescribeVpcClassicLinkDnsSupportCommandOutput
  extends DescribeVpcClassicLinkDnsSupportResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Describes the ClassicLink DNS support status of one or more VPCs. If enabled, the DNS
 *             hostname of a linked EC2-Classic instance resolves to its private IP address when
 *             addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname
 *             of an instance in a VPC resolves to its private IP address when addressed from a linked
 *             EC2-Classic instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcClassicLinkDnsSupportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcClassicLinkDnsSupportRequest
 *   VpcIds: [ // VpcClassicLinkIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcClassicLinkDnsSupportResult
 * //   NextToken: "STRING_VALUE",
 * //   Vpcs: [ // ClassicLinkDnsSupportList
 * //     { // ClassicLinkDnsSupport
 * //       ClassicLinkDnsSupported: true || false,
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVpcClassicLinkDnsSupportCommandInput - {@link DescribeVpcClassicLinkDnsSupportCommandInput}
 * @returns {@link DescribeVpcClassicLinkDnsSupportCommandOutput}
 * @see {@link DescribeVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcClassicLinkDnsSupportCommand extends $Command
  .classBuilder<
    DescribeVpcClassicLinkDnsSupportCommandInput,
    DescribeVpcClassicLinkDnsSupportCommandOutput,
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
  .s("AmazonEC2", "DescribeVpcClassicLinkDnsSupport", {})
  .n("EC2Client", "DescribeVpcClassicLinkDnsSupportCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcClassicLinkDnsSupportCommand)
  .de(de_DescribeVpcClassicLinkDnsSupportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcClassicLinkDnsSupportRequest;
      output: DescribeVpcClassicLinkDnsSupportResult;
    };
    sdk: {
      input: DescribeVpcClassicLinkDnsSupportCommandInput;
      output: DescribeVpcClassicLinkDnsSupportCommandOutput;
    };
  };
}
