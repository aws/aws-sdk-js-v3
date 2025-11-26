// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeGuruProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFindingsReportsRequest, ListFindingsReportsResponse } from "../models/models_0";
import { ListFindingsReports } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsReportsCommand}.
 */
export interface ListFindingsReportsCommandInput extends ListFindingsReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingsReportsCommand}.
 */
export interface ListFindingsReportsCommandOutput extends ListFindingsReportsResponse, __MetadataBearer {}

/**
 * <p>List the available reports for a given profiling group and time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListFindingsReportsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListFindingsReportsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // ListFindingsReportsRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   dailyReportsOnly: true || false,
 * };
 * const command = new ListFindingsReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsReportsResponse
 * //   findingsReportSummaries: [ // FindingsReportSummaries // required
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
 * @param ListFindingsReportsCommandInput - {@link ListFindingsReportsCommandInput}
 * @returns {@link ListFindingsReportsCommandOutput}
 * @see {@link ListFindingsReportsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsReportsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
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
export class ListFindingsReportsCommand extends $Command
  .classBuilder<
    ListFindingsReportsCommandInput,
    ListFindingsReportsCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "ListFindingsReports", {})
  .n("CodeGuruProfilerClient", "ListFindingsReportsCommand")
  .sc(ListFindingsReports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFindingsReportsRequest;
      output: ListFindingsReportsResponse;
    };
    sdk: {
      input: ListFindingsReportsCommandInput;
      output: ListFindingsReportsCommandOutput;
    };
  };
}
