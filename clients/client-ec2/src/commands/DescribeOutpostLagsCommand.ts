// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOutpostLagsRequest, DescribeOutpostLagsResult } from "../models/models_5";
import { de_DescribeOutpostLagsCommand, se_DescribeOutpostLagsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOutpostLagsCommand}.
 */
export interface DescribeOutpostLagsCommandInput extends DescribeOutpostLagsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOutpostLagsCommand}.
 */
export interface DescribeOutpostLagsCommandOutput extends DescribeOutpostLagsResult, __MetadataBearer {}

/**
 * <p>Describes the Outposts link aggregation groups (LAGs).</p>
 *          <note>
 *             <p>LAGs are only available for second-generation Outposts racks at this time.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeOutpostLagsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeOutpostLagsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeOutpostLagsRequest
 *   OutpostLagIds: [ // OutpostLagIdSet
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
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeOutpostLagsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOutpostLagsResult
 * //   OutpostLags: [ // OutpostLagSet
 * //     { // OutpostLag
 * //       OutpostArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       OutpostLagId: "STRING_VALUE",
 * //       LocalGatewayVirtualInterfaceIds: [ // LocalGatewayVirtualInterfaceIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       ServiceLinkVirtualInterfaceIds: [ // ServiceLinkVirtualInterfaceIdSet
 * //         "STRING_VALUE",
 * //       ],
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
 * @param DescribeOutpostLagsCommandInput - {@link DescribeOutpostLagsCommandInput}
 * @returns {@link DescribeOutpostLagsCommandOutput}
 * @see {@link DescribeOutpostLagsCommandInput} for command's `input` shape.
 * @see {@link DescribeOutpostLagsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeOutpostLagsCommand extends $Command
  .classBuilder<
    DescribeOutpostLagsCommandInput,
    DescribeOutpostLagsCommandOutput,
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
  .s("AmazonEC2", "DescribeOutpostLags", {})
  .n("EC2Client", "DescribeOutpostLagsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOutpostLagsCommand)
  .de(de_DescribeOutpostLagsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOutpostLagsRequest;
      output: DescribeOutpostLagsResult;
    };
    sdk: {
      input: DescribeOutpostLagsCommandInput;
      output: DescribeOutpostLagsCommandOutput;
    };
  };
}
