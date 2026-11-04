// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetQueryResultsRequest, GetQueryResultsResponse } from "../models/models_0";
import { GetQueryResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the results from the specified query.
 *
 * Only the fields requested in the query are returned, along with a `@ptr` field, which is the identifier for the log record. You can use the value of `@ptr` in a [GetLogRecord](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html) operation to get the full log record.
 *
 * `GetQueryResults` does not start running a query. To run a query, use [StartQuery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html). For more information about how long results of previous queries are available, see [CloudWatch Logs quotas](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/cloudwatch_limits_cwl.html).
 *
 * If the value of the `Status` field in the output is `Running`, this operation returns only partial results. If you see a value of `Scheduled` or `Running` for the status, you can retry the operation later to see the final results.
 *
 * This operation is used both for retrieving results from interactive queries and from automated scheduled query executions. Scheduled queries use `GetQueryResults` internally to retrieve query results for processing and delivery to configured destinations.
 *
 * You can retrieve up to 100,000 log event results from a query, if available, by using pagination. Use the `nextToken` returned in the response to request additional pages of results, with each page returning up to 10,000 log events. This is only supported for Logs Insights QL and is currently not supported for PPL and SQL query languages.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html).
 *
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
 *   nextToken: "STRING_VALUE",
 *   maxItems: Number("int"),
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
 * //     resultCount: Number("double"),
 * //   },
 * //   status: "Scheduled" || "Running" || "Complete" || "Failed" || "Cancelled" || "Timeout" || "Unknown",
 * //   encryptionKey: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
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
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class GetQueryResultsCommand extends command<GetQueryResultsCommandInput, GetQueryResultsCommandOutput>(
  _ep0,
  _mw0,
  "GetQueryResults",
  GetQueryResults$
) {
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
