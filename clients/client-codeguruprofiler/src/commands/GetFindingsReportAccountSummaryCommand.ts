// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingsReportAccountSummaryRequest, GetFindingsReportAccountSummaryResponse } from "../models/models_0";
import { GetFindingsReportAccountSummary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsReportAccountSummaryCommand}.
 */
export interface GetFindingsReportAccountSummaryCommandInput extends GetFindingsReportAccountSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsReportAccountSummaryCommand}.
 */
export interface GetFindingsReportAccountSummaryCommandOutput
  extends GetFindingsReportAccountSummaryResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Returns a list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html">
 *                <code>FindingsReportSummary</code>
 *             </a>
 *             objects that contain analysis results for all profiling groups in your AWS account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetFindingsReportAccountSummaryCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetFindingsReportAccountSummaryCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // GetFindingsReportAccountSummaryRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   dailyReportsOnly: true || false,
 * };
 * const command = new GetFindingsReportAccountSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsReportAccountSummaryResponse
 * //   reportSummaries: [ // FindingsReportSummaries // required
 * //     { // FindingsReportSummary
 * //       id: "STRING_VALUE",
 * //       profilingGroupName: "STRING_VALUE",
 * //       profileStartTime: new Date("TIMESTAMP"),
 * //       profileEndTime: new Date("TIMESTAMP"),
 * //       totalNumberOfFindings: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFindingsReportAccountSummaryCommandInput - {@link GetFindingsReportAccountSummaryCommandInput}
 * @returns {@link GetFindingsReportAccountSummaryCommandOutput}
 * @see {@link GetFindingsReportAccountSummaryCommandInput} for command's `input` shape.
 * @see {@link GetFindingsReportAccountSummaryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 *
 * @public
 */
export class GetFindingsReportAccountSummaryCommand extends $Command
  .classBuilder<
    GetFindingsReportAccountSummaryCommandInput,
    GetFindingsReportAccountSummaryCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "GetFindingsReportAccountSummary", {})
  .n("CodeGuruProfilerClient", "GetFindingsReportAccountSummaryCommand")
  .sc(GetFindingsReportAccountSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingsReportAccountSummaryRequest;
      output: GetFindingsReportAccountSummaryResponse;
    };
    sdk: {
      input: GetFindingsReportAccountSummaryCommandInput;
      output: GetFindingsReportAccountSummaryCommandOutput;
    };
  };
}
