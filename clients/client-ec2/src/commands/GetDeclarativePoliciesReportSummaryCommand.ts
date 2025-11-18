// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetDeclarativePoliciesReportSummaryRequest,
  GetDeclarativePoliciesReportSummaryResult,
} from "../models/models_7";
import { GetDeclarativePoliciesReportSummary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeclarativePoliciesReportSummaryCommand}.
 */
export interface GetDeclarativePoliciesReportSummaryCommandInput extends GetDeclarativePoliciesReportSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetDeclarativePoliciesReportSummaryCommand}.
 */
export interface GetDeclarativePoliciesReportSummaryCommandOutput
  extends GetDeclarativePoliciesReportSummaryResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a summary of the account status report.</p>
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
 * import { EC2Client, GetDeclarativePoliciesReportSummaryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetDeclarativePoliciesReportSummaryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetDeclarativePoliciesReportSummaryRequest
 *   DryRun: true || false,
 *   ReportId: "STRING_VALUE", // required
 * };
 * const command = new GetDeclarativePoliciesReportSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetDeclarativePoliciesReportSummaryResult
 * //   ReportId: "STRING_VALUE",
 * //   S3Bucket: "STRING_VALUE",
 * //   S3Prefix: "STRING_VALUE",
 * //   TargetId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   NumberOfAccounts: Number("int"),
 * //   NumberOfFailedAccounts: Number("int"),
 * //   AttributeSummaries: [ // AttributeSummaryList
 * //     { // AttributeSummary
 * //       AttributeName: "STRING_VALUE",
 * //       MostFrequentValue: "STRING_VALUE",
 * //       NumberOfMatchedAccounts: Number("int"),
 * //       NumberOfUnmatchedAccounts: Number("int"),
 * //       RegionalSummaries: [ // RegionalSummaryList
 * //         { // RegionalSummary
 * //           RegionName: "STRING_VALUE",
 * //           NumberOfMatchedAccounts: Number("int"),
 * //           NumberOfUnmatchedAccounts: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDeclarativePoliciesReportSummaryCommandInput - {@link GetDeclarativePoliciesReportSummaryCommandInput}
 * @returns {@link GetDeclarativePoliciesReportSummaryCommandOutput}
 * @see {@link GetDeclarativePoliciesReportSummaryCommandInput} for command's `input` shape.
 * @see {@link GetDeclarativePoliciesReportSummaryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetDeclarativePoliciesReportSummaryCommand extends $Command
  .classBuilder<
    GetDeclarativePoliciesReportSummaryCommandInput,
    GetDeclarativePoliciesReportSummaryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetDeclarativePoliciesReportSummary", {})
  .n("EC2Client", "GetDeclarativePoliciesReportSummaryCommand")
  .sc(GetDeclarativePoliciesReportSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeclarativePoliciesReportSummaryRequest;
      output: GetDeclarativePoliciesReportSummaryResult;
    };
    sdk: {
      input: GetDeclarativePoliciesReportSummaryCommandInput;
      output: GetDeclarativePoliciesReportSummaryCommandOutput;
    };
  };
}
