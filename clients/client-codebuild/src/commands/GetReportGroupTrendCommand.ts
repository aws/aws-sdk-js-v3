// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReportGroupTrendInput, GetReportGroupTrendOutput } from "../models/models_0";
import { GetReportGroupTrend$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReportGroupTrendCommand}.
 */
export interface GetReportGroupTrendCommandInput extends GetReportGroupTrendInput {}
/**
 * @public
 *
 * The output of {@link GetReportGroupTrendCommand}.
 */
export interface GetReportGroupTrendCommandOutput extends GetReportGroupTrendOutput, __MetadataBearer {}

/**
 * <p>Analyzes and accumulates test report values for the specified test reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, GetReportGroupTrendCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, GetReportGroupTrendCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // GetReportGroupTrendInput
 *   reportGroupArn: "STRING_VALUE", // required
 *   numOfReports: Number("int"),
 *   trendField: "PASS_RATE" || "DURATION" || "TOTAL" || "LINE_COVERAGE" || "LINES_COVERED" || "LINES_MISSED" || "BRANCH_COVERAGE" || "BRANCHES_COVERED" || "BRANCHES_MISSED", // required
 * };
 * const command = new GetReportGroupTrendCommand(input);
 * const response = await client.send(command);
 * // { // GetReportGroupTrendOutput
 * //   stats: { // ReportGroupTrendStats
 * //     average: "STRING_VALUE",
 * //     max: "STRING_VALUE",
 * //     min: "STRING_VALUE",
 * //   },
 * //   rawData: [ // ReportGroupTrendRawDataList
 * //     { // ReportWithRawData
 * //       reportArn: "STRING_VALUE",
 * //       data: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReportGroupTrendCommandInput - {@link GetReportGroupTrendCommandInput}
 * @returns {@link GetReportGroupTrendCommandOutput}
 * @see {@link GetReportGroupTrendCommandInput} for command's `input` shape.
 * @see {@link GetReportGroupTrendCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class GetReportGroupTrendCommand extends $Command
  .classBuilder<
    GetReportGroupTrendCommandInput,
    GetReportGroupTrendCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "GetReportGroupTrend", {})
  .n("CodeBuildClient", "GetReportGroupTrendCommand")
  .sc(GetReportGroupTrend$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReportGroupTrendInput;
      output: GetReportGroupTrendOutput;
    };
    sdk: {
      input: GetReportGroupTrendCommandInput;
      output: GetReportGroupTrendCommandOutput;
    };
  };
}
