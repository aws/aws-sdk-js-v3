// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountPolicyRequest, PutAccountPolicyResponse } from "../models/models_0";
import { de_PutAccountPolicyCommand, se_PutAccountPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountPolicyCommand}.
 */
export interface PutAccountPolicyCommandInput extends PutAccountPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountPolicyCommand}.
 */
export interface PutAccountPolicyCommandOutput extends PutAccountPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an account-level data protection policy or subscription filter policy that applies to all log groups
 *       or a subset of log groups in the account.</p>
 *          <p>
 *             <b>Data protection policy</b>
 *          </p>
 *          <p>A data protection policy can help safeguard sensitive
 *       data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only
 *     one account-level data protection policy.</p>
 *          <important>
 *             <p>Sensitive data is detected and masked when it is ingested into a log group. When you set a
 *       data protection policy, log events ingested into the log groups before that time are not masked.</p>
 *          </important>
 *          <p>If you use <code>PutAccountPolicy</code> to create a data protection policy for your whole account, it applies to both existing log groups
 *     and all log groups that are created later in this account. The account-level policy is applied to existing log groups
 *     with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked.</p>
 *          <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks.
 *       A user who has the <code>logs:Unmask</code> permission can use a
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a>
 *       operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked
 *       log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs
 *       console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p>
 *          <p>For more information, including a list of types of data that can be audited and masked, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p>
 *          <p>To use the <code>PutAccountPolicy</code> operation for a data protection policy, you must be signed on with
 *       the <code>logs:PutDataProtectionPolicy</code>
 *     and <code>logs:PutAccountPolicy</code> permissions.</p>
 *          <p>The <code>PutAccountPolicy</code> operation applies to all log groups in the account. You can use
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>
 *       to create a data protection policy that applies to just one log group.
 *       If a log group has its own data protection policy and
 *       the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term
 *       specified in either policy is masked.</p>
 *          <p>
 *             <b>Subscription filter policy</b>
 *          </p>
 *          <p>A subscription filter policy sets up a real-time feed of log events from CloudWatch Logs to other Amazon Web Services services.
 *       Account-level subscription filter policies apply to both existing log groups and log groups that are created later in
 *       this account. Supported destinations are Kinesis Data Streams, Firehose, and
 *       Lambda. When log events are sent to the receiving service, they are Base64 encoded and
 *       compressed with the GZIP format.</p>
 *          <p>The following destinations are supported for subscription filters:</p>
 *          <ul>
 *             <li>
 *                <p>An Kinesis Data Streams data stream in the same account as the subscription policy, for same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>An Firehose data stream in the same account as the subscription policy, for same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>A Lambda function in the same account as the subscription policy, for same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>A logical destination in a different account created with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html">PutDestination</a>, for cross-account
 *         delivery. Kinesis Data Streams and Firehose are supported as logical destinations.</p>
 *             </li>
 *          </ul>
 *          <p>Each account can have one account-level subscription filter policy per Region.
 *       If you are updating an existing filter, you must specify the correct name in <code>PolicyName</code>.
 *       To perform a <code>PutAccountPolicy</code> subscription filter operation for any destination except a Lambda
 *       function, you must also have the <code>iam:PassRole</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutAccountPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutAccountPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutAccountPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   policyDocument: "STRING_VALUE", // required
 *   policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY", // required
 *   scope: "ALL",
 *   selectionCriteria: "STRING_VALUE",
 * };
 * const command = new PutAccountPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountPolicyResponse
 * //   accountPolicy: { // AccountPolicy
 * //     policyName: "STRING_VALUE",
 * //     policyDocument: "STRING_VALUE",
 * //     lastUpdatedTime: Number("long"),
 * //     policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY",
 * //     scope: "ALL",
 * //     selectionCriteria: "STRING_VALUE",
 * //     accountId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAccountPolicyCommandInput - {@link PutAccountPolicyCommandInput}
 * @returns {@link PutAccountPolicyCommandOutput}
 * @see {@link PutAccountPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAccountPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 * @public
 */
export class PutAccountPolicyCommand extends $Command
  .classBuilder<
    PutAccountPolicyCommandInput,
    PutAccountPolicyCommandOutput,
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
  .s("Logs_20140328", "PutAccountPolicy", {})
  .n("CloudWatchLogsClient", "PutAccountPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutAccountPolicyCommand)
  .de(de_PutAccountPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountPolicyRequest;
      output: PutAccountPolicyResponse;
    };
    sdk: {
      input: PutAccountPolicyCommandInput;
      output: PutAccountPolicyCommandOutput;
    };
  };
}
