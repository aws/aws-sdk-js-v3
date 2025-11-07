// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLogGroupsRequest, ListLogGroupsResponse } from "../models/models_0";
import { ListLogGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLogGroupsCommand}.
 */
export interface ListLogGroupsCommandInput extends ListLogGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListLogGroupsCommand}.
 */
export interface ListLogGroupsCommandOutput extends ListLogGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of log groups in the Region in your account. If you are performing this
 *       action in a monitoring account, you can choose to also return log groups from source accounts
 *       that are linked to the monitoring account. For more information about using cross-account
 *       observability to set up monitoring accounts and source accounts, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">
 *         CloudWatch cross-account observability</a>.</p>
 *          <p>You can optionally filter the list by log group class and by using regular expressions in
 *       your request to match strings in the log group names.</p>
 *          <p>This operation is paginated. By default, your first use of this operation returns 50
 *       results, and includes a token to use in a subsequent operation to return more results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListLogGroupsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListLogGroupsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListLogGroupsRequest
 *   logGroupNamePattern: "STRING_VALUE",
 *   logGroupClass: "STANDARD" || "INFREQUENT_ACCESS" || "DELIVERY",
 *   includeLinkedAccounts: true || false,
 *   accountIdentifiers: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new ListLogGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListLogGroupsResponse
 * //   logGroups: [ // LogGroupSummaries
 * //     { // LogGroupSummary
 * //       logGroupName: "STRING_VALUE",
 * //       logGroupArn: "STRING_VALUE",
 * //       logGroupClass: "STANDARD" || "INFREQUENT_ACCESS" || "DELIVERY",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLogGroupsCommandInput - {@link ListLogGroupsCommandInput}
 * @returns {@link ListLogGroupsCommandOutput}
 * @see {@link ListLogGroupsCommandInput} for command's `input` shape.
 * @see {@link ListLogGroupsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
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
export class ListLogGroupsCommand extends $Command
  .classBuilder<
    ListLogGroupsCommandInput,
    ListLogGroupsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "ListLogGroups", {})
  .n("CloudWatchLogsClient", "ListLogGroupsCommand")
  .sc(ListLogGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLogGroupsRequest;
      output: ListLogGroupsResponse;
    };
    sdk: {
      input: ListLogGroupsCommandInput;
      output: ListLogGroupsCommandOutput;
    };
  };
}
