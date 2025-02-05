// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartQueryRequest, StartQueryResponse } from "../models/models_0";
import { de_StartQueryCommand, se_StartQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a query of one or more log groups using CloudWatch Logs Insights. You specify the log groups
 *       and time range to query and the query string to use.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
 *          <p>After you run a query using <code>StartQuery</code>, the query results are stored by CloudWatch Logs.
 *       You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> to retrieve
 *       the results of a query, using the <code>queryId</code> that <code>StartQuery</code> returns.
 *     </p>
 *          <note>
 *             <p>To specify the log groups to query, a <code>StartQuery</code> operation must include one of the following:</p>
 *             <ul>
 *                <li>
 *                   <p>Either exactly one of the following
 *           parameters: <code>logGroupName</code>, <code>logGroupNames</code>, or
 *           <code>logGroupIdentifiers</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Or the <code>queryString</code> must include a <code>SOURCE</code> command to select log
 *           groups for the query. The <code>SOURCE</code> command can select log groups based on log group name prefix, account ID,
 *           and log class. </p>
 *                   <p>For more information about the <code>SOURCE</code> command,
 *           see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax-Source.html">SOURCE</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>If you have associated a KMS key with the query results in this account,
 *     then
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> uses that key to
 *       encrypt the results when it stores them. If no key is associated with query results, the query results are
 *     encrypted with the default CloudWatch Logs encryption method.</p>
 *          <p>Queries time out after 60 minutes of runtime. If your queries are timing out, reduce the
 *       time range being searched or partition your query into a number of queries.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation in a
 *       monitoring account to start a query in a linked source account. For more information, see
 *         <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch
 *         cross-account observability</a>. For a cross-account <code>StartQuery</code> operation,
 *       the query definition must be defined in the monitoring account.</p>
 *          <p>You can have up to 30 concurrent CloudWatch Logs insights queries, including queries
 *       that have been added to dashboards. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, StartQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, StartQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link MalformedQueryException} (client fault)
 *  <p>The query string is not valid. Details about this error are displayed in a
 *       <code>QueryCompileError</code> object. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_QueryCompileError.html">QueryCompileError</a>.</p>
 *          <p>For more information about valid query syntax, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
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
 * @public
 */
export class StartQueryCommand extends $Command
  .classBuilder<
    StartQueryCommandInput,
    StartQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "StartQuery", {})
  .n("CloudWatchLogsClient", "StartQueryCommand")
  .f(void 0, void 0)
  .ser(se_StartQueryCommand)
  .de(de_StartQueryCommand)
  .build() {
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
