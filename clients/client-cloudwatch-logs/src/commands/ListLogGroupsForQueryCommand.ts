// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLogGroupsForQueryRequest, ListLogGroupsForQueryResponse } from "../models/models_0";
import { de_ListLogGroupsForQueryCommand, se_ListLogGroupsForQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLogGroupsForQueryCommand}.
 */
export interface ListLogGroupsForQueryCommandInput extends ListLogGroupsForQueryRequest {}
/**
 * @public
 *
 * The output of {@link ListLogGroupsForQueryCommand}.
 */
export interface ListLogGroupsForQueryCommandOutput extends ListLogGroupsForQueryResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the log groups that were analyzed during a single CloudWatch Logs Insights query. This can be useful for queries
 *     that use
 *     log group name prefixes or the <code>filterIndex</code> command, because the log groups are dynamically selected in these cases.</p>
 *          <p>For more information about field indexes, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html">Create field indexes to improve query performance and reduce costs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListLogGroupsForQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListLogGroupsForQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListLogGroupsForQueryRequest
 *   queryId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLogGroupsForQueryCommand(input);
 * const response = await client.send(command);
 * // { // ListLogGroupsForQueryResponse
 * //   logGroupIdentifiers: [ // LogGroupIdentifiers
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLogGroupsForQueryCommandInput - {@link ListLogGroupsForQueryCommandInput}
 * @returns {@link ListLogGroupsForQueryCommandOutput}
 * @see {@link ListLogGroupsForQueryCommandInput} for command's `input` shape.
 * @see {@link ListLogGroupsForQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
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
 * @public
 */
export class ListLogGroupsForQueryCommand extends $Command
  .classBuilder<
    ListLogGroupsForQueryCommandInput,
    ListLogGroupsForQueryCommandOutput,
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
  .s("Logs_20140328", "ListLogGroupsForQuery", {})
  .n("CloudWatchLogsClient", "ListLogGroupsForQueryCommand")
  .f(void 0, void 0)
  .ser(se_ListLogGroupsForQueryCommand)
  .de(de_ListLogGroupsForQueryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLogGroupsForQueryRequest;
      output: ListLogGroupsForQueryResponse;
    };
    sdk: {
      input: ListLogGroupsForQueryCommandInput;
      output: ListLogGroupsForQueryCommandOutput;
    };
  };
}
