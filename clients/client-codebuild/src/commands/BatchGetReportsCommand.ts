// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetReportsInput, BatchGetReportsOutput } from "../models/models_0";
import { BatchGetReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetReportsCommand}.
 */
export interface BatchGetReportsCommandInput extends BatchGetReportsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetReportsCommand}.
 */
export interface BatchGetReportsCommandOutput extends BatchGetReportsOutput, __MetadataBearer {}

/**
 * <p>
 *       Returns an array of reports.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetReportsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetReportsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // BatchGetReportsInput
 *   reportArns: [ // ReportArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetReportsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetReportsOutput
 * //   reports: [ // Reports
 * //     { // Report
 * //       arn: "STRING_VALUE",
 * //       type: "TEST" || "CODE_COVERAGE",
 * //       name: "STRING_VALUE",
 * //       reportGroupArn: "STRING_VALUE",
 * //       executionId: "STRING_VALUE",
 * //       status: "GENERATING" || "SUCCEEDED" || "FAILED" || "INCOMPLETE" || "DELETING",
 * //       created: new Date("TIMESTAMP"),
 * //       expired: new Date("TIMESTAMP"),
 * //       exportConfig: { // ReportExportConfig
 * //         exportConfigType: "S3" || "NO_EXPORT",
 * //         s3Destination: { // S3ReportExportConfig
 * //           bucket: "STRING_VALUE",
 * //           bucketOwner: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //           packaging: "ZIP" || "NONE",
 * //           encryptionKey: "STRING_VALUE",
 * //           encryptionDisabled: true || false,
 * //         },
 * //       },
 * //       truncated: true || false,
 * //       testSummary: { // TestReportSummary
 * //         total: Number("int"), // required
 * //         statusCounts: { // ReportStatusCounts // required
 * //           "<keys>": Number("int"),
 * //         },
 * //         durationInNanoSeconds: Number("long"), // required
 * //       },
 * //       codeCoverageSummary: { // CodeCoverageReportSummary
 * //         lineCoveragePercentage: Number("double"),
 * //         linesCovered: Number("int"),
 * //         linesMissed: Number("int"),
 * //         branchCoveragePercentage: Number("double"),
 * //         branchesCovered: Number("int"),
 * //         branchesMissed: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   reportsNotFound: [ // ReportArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetReportsCommandInput - {@link BatchGetReportsCommandInput}
 * @returns {@link BatchGetReportsCommandOutput}
 * @see {@link BatchGetReportsCommandInput} for command's `input` shape.
 * @see {@link BatchGetReportsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class BatchGetReportsCommand extends command<BatchGetReportsCommandInput, BatchGetReportsCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetReports",
  BatchGetReports$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetReportsInput;
      output: BatchGetReportsOutput;
    };
    sdk: {
      input: BatchGetReportsCommandInput;
      output: BatchGetReportsCommandOutput;
    };
  };
}
