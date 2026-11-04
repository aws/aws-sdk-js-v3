// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartQueryRequest, StartQueryResponse } from "../models/models_0";
import { StartQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartQueryCommand}.
 */
export interface StartQueryCommandInput extends StartQueryRequest {}
/**
 * @public
 *
 * The output of {@link StartQueryCommand}.
 */
export interface StartQueryCommandOutput extends StartQueryResponse, __MetadataBearer {}

/**
 * Starts a query of one or more log groups or data sources using CloudWatch Logs Insights. You specify the log groups or data sources and time range to query and the query string to use. You can query up to 10 data sources in a single query.
 *
 * For more information, see [CloudWatch Logs Insights Query Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html).
 *
 * After you run a query using `StartQuery`, the query results are stored by CloudWatch Logs. You can use [GetQueryResults](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html) to retrieve the results of a query, using the `queryId` that `StartQuery` returns.
 *
 * Interactive queries started with `StartQuery` share concurrency limits with automated scheduled query executions. Both types of queries count toward the same regional concurrent query quota, so high scheduled query activity may affect the availability of concurrent slots for interactive queries.
 *
 * > **Note:**
 * >
 * > To specify the log groups to query, a `StartQuery` operation must include one of the following:
 * >
 * > - Either exactly one of the following parameters: `logGroupName`, `logGroupNames`, or `logGroupIdentifiers`
 * > - Or the `queryString` must include a `SOURCE` command to select log groups for the query. The `SOURCE` command can select log groups based on log group name prefix, account ID, and log class, or select data sources using dataSource syntax in LogsQL, PPL, and SQL. In LogsQL, the `SOURCE` command also supports filtering by log group tags.
 * >
 * >   For more information about the `SOURCE` command, see [SOURCE](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax-Source.html).
 *
 * If you have associated a KMS key with the query results in this account, then [StartQuery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html) uses that key to encrypt the results when it stores them. If no key is associated with query results, the query results are encrypted with the default CloudWatch Logs encryption method.
 *
 * Queries time out after 60 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html). For a cross-account `StartQuery` operation, the query definition must be defined in the monitoring account.
 *
 * You can have up to 100 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, StartQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, StartQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // StartQueryRequest
 *   queryLanguage: "CWLI" || "SQL" || "PPL",
 *   logGroupName: "STRING_VALUE",
 *   logGroupNames: [ // LogGroupNames
 *     "STRING_VALUE",
 *   ],
 *   logGroupIdentifiers: [ // LogGroupIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   startTime: Number("long"), // required
 *   endTime: Number("long"), // required
 *   queryString: "STRING_VALUE", // required
 *   limit: Number("int"),
 * };
 * const command = new StartQueryCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryResponse
 * //   queryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartQueryCommandInput - {@link StartQueryCommandInput}
 * @returns {@link StartQueryCommandOutput}
 * @see {@link StartQueryCommandInput} for command's `input` shape.
 * @see {@link StartQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have reached the maximum number of resources that can be created.
 *
 * @throws {@link MalformedQueryException} (client fault)
 *
 * The query string is not valid. Details about this error are displayed in a `QueryCompileError` object. For more information, see [QueryCompileError](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_QueryCompileError.html).
 *
 * For more information about valid query syntax, see [CloudWatch Logs Insights Query Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html).
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
export class StartQueryCommand extends command<StartQueryCommandInput, StartQueryCommandOutput>(
  _ep0,
  _mw0,
  "StartQuery",
  StartQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryRequest;
      output: StartQueryResponse;
    };
    sdk: {
      input: StartQueryCommandInput;
      output: StartQueryCommandOutput;
    };
  };
}
