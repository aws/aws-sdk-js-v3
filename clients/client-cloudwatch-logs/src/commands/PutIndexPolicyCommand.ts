// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutIndexPolicyRequest, PutIndexPolicyResponse } from "../models/models_0";
import { PutIndexPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates a *field index policy* for the specified log group. Only log groups in the Standard log class support field index policies. For more information about log classes, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html).
 *
 * You can use field index policies to create *field indexes* on fields found in log events in the log group. Creating field indexes speeds up and lowers the costs for CloudWatch Logs Insights queries that reference those field indexes, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields or values that match only a small fraction of the total log events. Common examples of indexes include request ID, session ID, userID, and instance IDs. For more information, see [Create field indexes to improve query performance and reduce costs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html).
 *
 * You can configure indexed fields as *facets* to enable interactive exploration and filtering of your logs in the CloudWatch Logs Insights console. Facets allow you to view value distributions and counts for indexed fields without running queries. When you create a field index, you can optionally set it as a facet to enable this interactive analysis capability. For more information, see [Use facets to group and explore logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Facets.html).
 *
 * To find the fields that are in your log group events, use the [GetLogGroupFields](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html) operation.
 *
 * For example, suppose you have created a field index for `requestId`. Then, any CloudWatch Logs Insights query on that log group that includes `requestId = value` or `requestId IN [value, value, ...]` will process fewer log events to reduce costs, and have improved performance.
 *
 * CloudWatch Logs provides default field indexes for all log groups in the Standard log class. Default field indexes are automatically available for the following fields:
 *
 * - `@logStream`
 * - `@aws.region`
 * - `@aws.account`
 * - `@source.log`
 * - `traceId`
 *
 * Default field indexes are in addition to any custom field indexes you define within your policy. Default field indexes are not counted towards your field index quota.
 *
 * Each index policy has the following quotas and restrictions:
 *
 * - As many as 20 fields can be included in the policy.
 * - Each field name can include as many as 100 characters.
 *
 * Matches of log events to the names of indexed fields are case-sensitive. For example, a field index of `RequestId` won't match a log event containing `requestId`.
 *
 * Log group-level field index policies created with `PutIndexPolicy` override account-level field index policies created with [PutAccountPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html) that apply to log groups. If you use `PutIndexPolicy` to create a field index policy for a log group, that log group uses only that policy for log group-level indexing, including any facet configurations. The log group ignores any account-wide field index policy that applies to log groups, but data source-based account policies may still apply.
 *
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
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have reached the maximum number of resources that can be created.
 *
 * @throws {@link OperationAbortedException} (client fault)
 *
 * Multiple concurrent requests to update the same resource were in conflict.
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
export class PutIndexPolicyCommand extends command<PutIndexPolicyCommandInput, PutIndexPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutIndexPolicy",
  PutIndexPolicy$
) {
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
