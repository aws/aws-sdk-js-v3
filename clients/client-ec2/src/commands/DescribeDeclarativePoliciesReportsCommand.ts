// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeDeclarativePoliciesReportsRequest,
  DescribeDeclarativePoliciesReportsResult,
} from "../models/models_3";
import { DescribeDeclarativePoliciesReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeclarativePoliciesReportsCommand}.
 */
export interface DescribeDeclarativePoliciesReportsCommandInput extends DescribeDeclarativePoliciesReportsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeclarativePoliciesReportsCommand}.
 */
export interface DescribeDeclarativePoliciesReportsCommandOutput extends DescribeDeclarativePoliciesReportsResult, __MetadataBearer {}

/**
 * <p>Describes the metadata of an account status report, including the status of the
 *             report.</p>
 *          <p>To view the full report, download it from the Amazon S3 bucket where it was saved.
 *             Reports are accessible only when they have the <code>complete</code> status. Reports
 *             with other statuses (<code>running</code>, <code>cancelled</code>, or
 *             <code>error</code>) are not available in the S3 bucket. For more information about
 *             downloading objects from an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/download-objects.html">Downloading objects</a> in
 *             the <i>Amazon Simple Storage Service User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative_status-report.html">Generating the account status report for declarative policies</a> in the
 *                 <i>Amazon Web Services Organizations User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeDeclarativePoliciesReportsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeDeclarativePoliciesReportsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeDeclarativePoliciesReportsRequest
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ReportIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeclarativePoliciesReportsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeclarativePoliciesReportsResult
 * //   NextToken: "STRING_VALUE",
 * //   Reports: [ // DeclarativePoliciesReportList
 * //     { // DeclarativePoliciesReport
 * //       ReportId: "STRING_VALUE",
 * //       S3Bucket: "STRING_VALUE",
 * //       S3Prefix: "STRING_VALUE",
 * //       TargetId: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Status: "running" || "cancelled" || "complete" || "error",
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
 * @param DescribeDeclarativePoliciesReportsCommandInput - {@link DescribeDeclarativePoliciesReportsCommandInput}
 * @returns {@link DescribeDeclarativePoliciesReportsCommandOutput}
 * @see {@link DescribeDeclarativePoliciesReportsCommandInput} for command's `input` shape.
 * @see {@link DescribeDeclarativePoliciesReportsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeDeclarativePoliciesReportsCommand extends $Command
  .classBuilder<
    DescribeDeclarativePoliciesReportsCommandInput,
    DescribeDeclarativePoliciesReportsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeDeclarativePoliciesReports", {})
  .n("EC2Client", "DescribeDeclarativePoliciesReportsCommand")
  .sc(DescribeDeclarativePoliciesReports$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeclarativePoliciesReportsRequest;
      output: DescribeDeclarativePoliciesReportsResult;
    };
    sdk: {
      input: DescribeDeclarativePoliciesReportsCommandInput;
      output: DescribeDeclarativePoliciesReportsCommandOutput;
    };
  };
}
