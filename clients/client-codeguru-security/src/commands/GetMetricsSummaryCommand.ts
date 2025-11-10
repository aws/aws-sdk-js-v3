// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMetricsSummaryRequest, GetMetricsSummaryResponse } from "../models/models_0";
import { GetMetricsSummary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetricsSummaryCommand}.
 */
export interface GetMetricsSummaryCommandInput extends GetMetricsSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetMetricsSummaryCommand}.
 */
export interface GetMetricsSummaryCommandOutput extends GetMetricsSummaryResponse, __MetadataBearer {}

/**
 * <p>Returns a summary of metrics for an account from a specified date, including number of open findings, the categories with most findings, the scans with most open findings, and scans with most open critical findings. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, GetMetricsSummaryCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, GetMetricsSummaryCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * // import type { CodeGuruSecurityClientConfig } from "@aws-sdk/client-codeguru-security";
 * const config = {}; // type is CodeGuruSecurityClientConfig
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // GetMetricsSummaryRequest
 *   date: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetMetricsSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricsSummaryResponse
 * //   metricsSummary: { // MetricsSummary
 * //     date: new Date("TIMESTAMP"),
 * //     openFindings: { // FindingMetricsValuePerSeverity
 * //       info: Number("double"),
 * //       low: Number("double"),
 * //       medium: Number("double"),
 * //       high: Number("double"),
 * //       critical: Number("double"),
 * //     },
 * //     categoriesWithMostFindings: [ // CategoriesWithMostFindings
 * //       { // CategoryWithFindingNum
 * //         categoryName: "STRING_VALUE",
 * //         findingNumber: Number("int"),
 * //       },
 * //     ],
 * //     scansWithMostOpenFindings: [ // ScansWithMostOpenFindings
 * //       { // ScanNameWithFindingNum
 * //         scanName: "STRING_VALUE",
 * //         findingNumber: Number("int"),
 * //       },
 * //     ],
 * //     scansWithMostOpenCriticalFindings: [ // ScansWithMostOpenCriticalFindings
 * //       {
 * //         scanName: "STRING_VALUE",
 * //         findingNumber: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMetricsSummaryCommandInput - {@link GetMetricsSummaryCommandInput}
 * @returns {@link GetMetricsSummaryCommandOutput}
 * @see {@link GetMetricsSummaryCommandInput} for command's `input` shape.
 * @see {@link GetMetricsSummaryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 *
 * @public
 */
export class GetMetricsSummaryCommand extends $Command
  .classBuilder<
    GetMetricsSummaryCommandInput,
    GetMetricsSummaryCommandOutput,
    CodeGuruSecurityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruSecurityClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsCodeGuruSecurity", "GetMetricsSummary", {})
  .n("CodeGuruSecurityClient", "GetMetricsSummaryCommand")
  .sc(GetMetricsSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetricsSummaryRequest;
      output: GetMetricsSummaryResponse;
    };
    sdk: {
      input: GetMetricsSummaryCommandInput;
      output: GetMetricsSummaryCommandOutput;
    };
  };
}
