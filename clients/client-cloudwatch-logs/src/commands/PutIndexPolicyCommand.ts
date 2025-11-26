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
import type { PutIndexPolicyRequest, PutIndexPolicyResponse } from "../models/models_0";
import { PutIndexPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutIndexPolicyCommand}.
 */
export interface PutIndexPolicyCommandInput extends PutIndexPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutIndexPolicyCommand}.
 */
export interface PutIndexPolicyCommandOutput extends PutIndexPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a <i>field index policy</i> for the specified log group.
 *       Only log groups in the Standard log class support field index policies. For more information
 *       about log classes, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html">Log
 *       classes</a>.</p>
 *          <p>You can use field index policies to create <i>field indexes</i> on fields
 *       found in log events in the log group. Creating field indexes speeds up and lowers the costs
 *       for CloudWatch Logs Insights queries that reference those field indexes, because these
 *       queries attempt to skip the processing of log events that are known to not match the indexed
 *       field. Good fields to index are fields that you often need to query for and fields or values
 *       that match only a small fraction of the total log events. Common examples of indexes include
 *       request ID, session ID, userID, and instance IDs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html">Create field indexes to improve query performance and reduce costs</a>.</p>
 *          <p>You can configure indexed fields as <i>facets</i> to enable
 *       interactive exploration and filtering of your logs in the CloudWatch Logs Insights console. Facets
 *       allow you to view value distributions and counts for indexed fields without running queries.
 *       When you create a field index, you can optionally set it as a facet to enable this interactive
 *       analysis capability. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Facets.html">Use facets to group and
 *         explore logs</a>.</p>
 *          <p>To find the fields that are in your log group events, use the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html">GetLogGroupFields</a> operation.</p>
 *          <p>For example, suppose you have created a field index for <code>requestId</code>. Then, any
 *         CloudWatch Logs Insights query on that log group that includes <code>requestId =
 *           <i>value</i>
 *             </code> or <code>requestId IN [<i>value</i>,
 *           <i>value</i>, ...]</code> will process fewer log events to reduce costs, and
 *       have improved performance.</p>
 *          <p>CloudWatch Logs provides default field indexes for all log groups in the Standard log
 *       class. Default field indexes are automatically available for the following fields: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>@logStream</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>@aws.region</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>@aws.account</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>@source.log</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>traceId</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Default field indexes are in addition to any custom field indexes you define within your
 *       policy. Default field indexes are not counted towards your field index quota. </p>
 *          <p>Each index policy has the following quotas and restrictions:</p>
 *          <ul>
 *             <li>
 *                <p>As many as 20 fields can be included in the policy.</p>
 *             </li>
 *             <li>
 *                <p>Each field name can include as many as 100 characters.</p>
 *             </li>
 *          </ul>
 *          <p>Matches of log events to the names of indexed fields are case-sensitive. For example, a
 *       field index of <code>RequestId</code> won't match a log event containing
 *         <code>requestId</code>.</p>
 *          <p>Log group-level field index policies created with
 *         <code>PutIndexPolicy</code> override account-level field index policies created with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html">PutAccountPolicy</a> that apply to log groups. If you use <code>PutIndexPolicy</code>
 *       to create a field index policy for a log group, that log group uses only that policy for log
 *       group-level indexing, including any facet configurations. The log group ignores any
 *       account-wide field index policy that applies to log groups, but data source-based account
 *       policies may still apply.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutIndexPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutIndexPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutIndexPolicyRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 *   policyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutIndexPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutIndexPolicyResponse
 * //   indexPolicy: { // IndexPolicy
 * //     logGroupIdentifier: "STRING_VALUE",
 * //     lastUpdateTime: Number("long"),
 * //     policyDocument: "STRING_VALUE",
 * //     policyName: "STRING_VALUE",
 * //     source: "ACCOUNT" || "LOG_GROUP",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutIndexPolicyCommandInput - {@link PutIndexPolicyCommandInput}
 * @returns {@link PutIndexPolicyCommandOutput}
 * @see {@link PutIndexPolicyCommandInput} for command's `input` shape.
 * @see {@link PutIndexPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
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
export class PutIndexPolicyCommand extends $Command
  .classBuilder<
    PutIndexPolicyCommandInput,
    PutIndexPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "PutIndexPolicy", {})
  .n("CloudWatchLogsClient", "PutIndexPolicyCommand")
  .sc(PutIndexPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutIndexPolicyRequest;
      output: PutIndexPolicyResponse;
    };
    sdk: {
      input: PutIndexPolicyCommandInput;
      output: PutIndexPolicyCommandOutput;
    };
  };
}
