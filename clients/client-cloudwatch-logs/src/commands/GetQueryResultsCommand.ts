// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetQueryResultsRequest, GetQueryResultsResponse } from "../models/models_0";
import { GetQueryResults } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandInput extends GetQueryResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandOutput extends GetQueryResultsResponse, __MetadataBearer {}

/**
 * <p>Returns the results from the specified query.</p>
 *          <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field,
 *       which is the identifier for the log record. You can use the value of <code>@ptr</code> in a
 *         <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html">GetLogRecord</a>
 *       operation to get the full log record.</p>
 *          <p>
 *             <code>GetQueryResults</code> does not start running a query. To run a query, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>. For more information about how long results of previous queries are
 *       available, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/cloudwatch_limits_cwl.html">CloudWatch Logs
 *         quotas</a>.</p>
 *          <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this
 *       operation returns only partial results. If you see a value of <code>Scheduled</code> or
 *         <code>Running</code> for the status, you can retry the operation later to see the final
 *       results. </p>
 *          <p>This operation is used both for retrieving results from interactive queries and from
 *       automated scheduled query executions. Scheduled queries use <code>GetQueryResults</code>
 *       internally to retrieve query results for processing and delivery to configured destinations.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation
 *       in a monitoring account to start queries in linked source accounts. For more information, see
 *         <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetQueryResultsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetQueryResultsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetQueryResultsRequest
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsResponse
 * //   queryLanguage: "CWLI" || "SQL" || "PPL",
 * //   results: [ // QueryResults
 * //     [ // ResultRows
 * //       { // ResultField
 * //         field: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   ],
 * //   statistics: { // QueryStatistics
 * //     recordsMatched: Number("double"),
 * //     recordsScanned: Number("double"),
 * //     estimatedRecordsSkipped: Number("double"),
 * //     bytesScanned: Number("double"),
 * //     estimatedBytesSkipped: Number("double"),
 * //     logGroupsScanned: Number("double"),
 * //   },
 * //   status: "Scheduled" || "Running" || "Complete" || "Failed" || "Cancelled" || "Timeout" || "Unknown",
 * //   encryptionKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsCommandInput - {@link GetQueryResultsCommandInput}
 * @returns {@link GetQueryResultsCommandOutput}
 * @see {@link GetQueryResultsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsCommandOutput} for command's `response` shape.
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
export class GetQueryResultsCommand extends $Command
  .classBuilder<
    GetQueryResultsCommandInput,
    GetQueryResultsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetQueryResults", {})
  .n("CloudWatchLogsClient", "GetQueryResultsCommand")
  .sc(GetQueryResults)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryResultsRequest;
      output: GetQueryResultsResponse;
    };
    sdk: {
      input: GetQueryResultsCommandInput;
      output: GetQueryResultsCommandOutput;
    };
  };
}
