// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageUsageReportEntriesRequest, DescribeImageUsageReportEntriesResult } from "../models/models_4";
import { DescribeImageUsageReportEntries } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageUsageReportEntriesCommand}.
 */
export interface DescribeImageUsageReportEntriesCommandInput extends DescribeImageUsageReportEntriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageUsageReportEntriesCommand}.
 */
export interface DescribeImageUsageReportEntriesCommandOutput
  extends DescribeImageUsageReportEntriesResult,
    __MetadataBearer {}

/**
 * <p>Describes the entries in image usage reports, showing how your images are used across
 *       other Amazon Web Services accounts.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/your-ec2-ami-usage.html">View your AMI usage</a> in the
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImageUsageReportEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImageUsageReportEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeImageUsageReportEntriesRequest
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
 * const command = new DescribeImageUsageReportEntriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageUsageReportEntriesResult
 * //   NextToken: "STRING_VALUE",
 * //   ImageUsageReportEntries: [ // ImageUsageReportEntryList
 * //     { // ImageUsageReportEntry
 * //       ResourceType: "STRING_VALUE",
 * //       ReportId: "STRING_VALUE",
 * //       UsageCount: Number("long"),
 * //       AccountId: "STRING_VALUE",
 * //       ImageId: "STRING_VALUE",
 * //       ReportCreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeImageUsageReportEntriesCommandInput - {@link DescribeImageUsageReportEntriesCommandInput}
 * @returns {@link DescribeImageUsageReportEntriesCommandOutput}
 * @see {@link DescribeImageUsageReportEntriesCommandInput} for command's `input` shape.
 * @see {@link DescribeImageUsageReportEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeImageUsageReportEntriesCommand extends $Command
  .classBuilder<
    DescribeImageUsageReportEntriesCommandInput,
    DescribeImageUsageReportEntriesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeImageUsageReportEntries", {})
  .n("EC2Client", "DescribeImageUsageReportEntriesCommand")
  .sc(DescribeImageUsageReportEntries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImageUsageReportEntriesRequest;
      output: DescribeImageUsageReportEntriesResult;
    };
    sdk: {
      input: DescribeImageUsageReportEntriesCommandInput;
      output: DescribeImageUsageReportEntriesCommandOutput;
    };
  };
}
