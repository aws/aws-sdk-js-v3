// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetReportGroupTrendInput, GetReportGroupTrendOutput } from "../models/models_0";
import { de_GetReportGroupTrendCommand, se_GetReportGroupTrendCommand } from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "GetReportGroupTrend", {})
  .n("CodeBuildClient", "GetReportGroupTrendCommand")
  .f(void 0, void 0)
  .ser(se_GetReportGroupTrendCommand)
  .de(de_GetReportGroupTrendCommand)
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
