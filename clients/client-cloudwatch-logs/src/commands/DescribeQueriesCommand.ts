// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeQueriesRequest, DescribeQueriesResponse } from "../models/models_0";
import { DescribeQueries } from "../schemas/schemas_10_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeQueriesCommand}.
 */
export interface DescribeQueriesCommandInput extends DescribeQueriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQueriesCommand}.
 */
export interface DescribeQueriesCommandOutput extends DescribeQueriesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have
 *       been run recently in this account. You can request all queries or limit it to queries of a
 *       specific log group or queries with a certain status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeQueriesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeQueriesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeQueriesRequest
 *   logGroupName: "STRING_VALUE",
 *   status: "Scheduled" || "Running" || "Complete" || "Failed" || "Cancelled" || "Timeout" || "Unknown",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   queryLanguage: "CWLI" || "SQL" || "PPL",
 * };
 * const command = new DescribeQueriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQueriesResponse
 * //   queries: [ // QueryInfoList
 * //     { // QueryInfo
 * //       queryLanguage: "CWLI" || "SQL" || "PPL",
 * //       queryId: "STRING_VALUE",
 * //       queryString: "STRING_VALUE",
 * //       status: "Scheduled" || "Running" || "Complete" || "Failed" || "Cancelled" || "Timeout" || "Unknown",
 * //       createTime: Number("long"),
 * //       logGroupName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeQueriesCommandInput - {@link DescribeQueriesCommandInput}
 * @returns {@link DescribeQueriesCommandOutput}
 * @see {@link DescribeQueriesCommandInput} for command's `input` shape.
 * @see {@link DescribeQueriesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DescribeQueriesCommand extends $Command
  .classBuilder<
    DescribeQueriesCommandInput,
    DescribeQueriesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeQueries", {})
  .n("CloudWatchLogsClient", "DescribeQueriesCommand")
  .sc(DescribeQueries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQueriesRequest;
      output: DescribeQueriesResponse;
    };
    sdk: {
      input: DescribeQueriesCommandInput;
      output: DescribeQueriesCommandOutput;
    };
  };
}
