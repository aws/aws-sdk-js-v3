// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClassicLinkInstancesRequest, DescribeClassicLinkInstancesResult } from "../models/models_4";
import { de_DescribeClassicLinkInstancesCommand, se_DescribeClassicLinkInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClassicLinkInstancesCommand}.
 */
export interface DescribeClassicLinkInstancesCommandInput extends DescribeClassicLinkInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClassicLinkInstancesCommand}.
 */
export interface DescribeClassicLinkInstancesCommandOutput
  extends DescribeClassicLinkInstancesResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Describes your linked EC2-Classic instances. This request only returns
 * 			information about EC2-Classic instances linked to a VPC through ClassicLink. You cannot
 * 			use this request to return information about other instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClassicLinkInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClassicLinkInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeClassicLinkInstancesRequest
 *   DryRun: true || false,
 *   InstanceIds: [ // InstanceIdStringList
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
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeClassicLinkInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClassicLinkInstancesResult
 * //   Instances: [ // ClassicLinkInstanceList
 * //     { // ClassicLinkInstance
 * //       Groups: [ // GroupIdentifierList
 * //         { // GroupIdentifier
 * //           GroupId: "STRING_VALUE",
 * //           GroupName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InstanceId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClassicLinkInstancesCommandInput - {@link DescribeClassicLinkInstancesCommandInput}
 * @returns {@link DescribeClassicLinkInstancesCommandOutput}
 * @see {@link DescribeClassicLinkInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeClassicLinkInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeClassicLinkInstancesCommand extends $Command
  .classBuilder<
    DescribeClassicLinkInstancesCommandInput,
    DescribeClassicLinkInstancesCommandOutput,
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
  .s("AmazonEC2", "DescribeClassicLinkInstances", {})
  .n("EC2Client", "DescribeClassicLinkInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClassicLinkInstancesCommand)
  .de(de_DescribeClassicLinkInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClassicLinkInstancesRequest;
      output: DescribeClassicLinkInstancesResult;
    };
    sdk: {
      input: DescribeClassicLinkInstancesCommandInput;
      output: DescribeClassicLinkInstancesCommandOutput;
    };
  };
}
