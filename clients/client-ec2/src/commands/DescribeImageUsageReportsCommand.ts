// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageUsageReportsRequest, DescribeImageUsageReportsResult } from "../models/models_4";
import { de_DescribeImageUsageReportsCommand, se_DescribeImageUsageReportsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageUsageReportsCommand}.
 */
export interface DescribeImageUsageReportsCommandInput extends DescribeImageUsageReportsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageUsageReportsCommand}.
 */
export interface DescribeImageUsageReportsCommandOutput extends DescribeImageUsageReportsResult, __MetadataBearer {}

/**
 * <p>Describes the configuration and status of image usage reports, filtered by report IDs or
 *       image IDs.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/your-ec2-ami-usage.html">View your AMI usage</a> in the
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImageUsageReportsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImageUsageReportsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeImageUsageReportsRequest
 *   ImageIds: [ // DescribeImageUsageReportsImageIdStringList
 *     "STRING_VALUE",
 *   ],
 *   ReportIds: [ // ImageUsageReportIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeImageUsageReportsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageUsageReportsResult
 * //   NextToken: "STRING_VALUE",
 * //   ImageUsageReports: [ // ImageUsageReportList
 * //     { // ImageUsageReport
 * //       ImageId: "STRING_VALUE",
 * //       ReportId: "STRING_VALUE",
 * //       ResourceTypes: [ // ImageUsageResourceTypeList
 * //         { // ImageUsageResourceType
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceTypeOptions: [ // ImageUsageResourceTypeOptionList
 * //             { // ImageUsageResourceTypeOption
 * //               OptionName: "STRING_VALUE",
 * //               OptionValues: [ // ImageUsageResourceTypeOptionValuesList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       AccountIds: [ // UserIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       State: "STRING_VALUE",
 * //       StateReason: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeImageUsageReportsCommandInput - {@link DescribeImageUsageReportsCommandInput}
 * @returns {@link DescribeImageUsageReportsCommandOutput}
 * @see {@link DescribeImageUsageReportsCommandInput} for command's `input` shape.
 * @see {@link DescribeImageUsageReportsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeImageUsageReportsCommand extends $Command
  .classBuilder<
    DescribeImageUsageReportsCommandInput,
    DescribeImageUsageReportsCommandOutput,
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
  .s("AmazonEC2", "DescribeImageUsageReports", {})
  .n("EC2Client", "DescribeImageUsageReportsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImageUsageReportsCommand)
  .de(de_DescribeImageUsageReportsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImageUsageReportsRequest;
      output: DescribeImageUsageReportsResult;
    };
    sdk: {
      input: DescribeImageUsageReportsCommandInput;
      output: DescribeImageUsageReportsCommandOutput;
    };
  };
}
