// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountPolicyRequest, PutAccountPolicyResponse } from "../models/models_0";
import { PutAccountPolicy } from "../schemas/schemas_4_Policy";

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
 * <p>Creates an account-level data protection policy, subscription filter policy, field index
 *       policy, transformer policy, or metric extraction policy that applies to all log groups or a
 *       subset of log groups in the account.</p>
 *          <p>To use this operation, you must be signed on with the correct permissions depending on the
 *       type of policy that you are creating.</p>
 *          <ul>
 *             <li>
 *                <p>To create a data protection policy, you must have the
 *             <code>logs:PutDataProtectionPolicy</code> and <code>logs:PutAccountPolicy</code>
 *           permissions.</p>
 *             </li>
 *             <li>
 *                <p>To create a subscription filter policy, you must have the
 *             <code>logs:PutSubscriptionFilter</code> and <code>logs:PutAccountPolicy</code>
 *           permissions.</p>
 *             </li>
 *             <li>
 *                <p>To create a transformer policy, you must have the <code>logs:PutTransformer</code> and
 *             <code>logs:PutAccountPolicy</code> permissions.</p>
 *             </li>
 *             <li>
 *                <p>To create a field index policy, you must have the <code>logs:PutIndexPolicy</code> and
 *             <code>logs:PutAccountPolicy</code> permissions.</p>
 *             </li>
 *             <li>
 *                <p>To create a metric extraction policy, you must have the
 *             <code>logs:PutMetricExtractionPolicy</code> and <code>logs:PutAccountPolicy</code>
 *           permissions.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Data protection policy</b>
 *          </p>
 *          <p>A data protection policy can help safeguard sensitive data that's ingested by your log
 *       groups by auditing and masking the sensitive log data. Each account can have only one
 *       account-level data protection policy.</p>
 *          <important>
 *             <p>Sensitive data is detected and masked when it is ingested into a log group. When you set
 *         a data protection policy, log events ingested into the log groups before that time are not
 *         masked.</p>
 *          </important>
 *          <p>If you use <code>PutAccountPolicy</code> to create a data protection policy for your whole
 *       account, it applies to both existing log groups and all log groups that are created later in
 *       this account. The account-level policy is applied to existing log groups with eventual
 *       consistency. It might take up to 5 minutes before sensitive data in existing log groups begins
 *       to be masked.</p>
 *          <p>By default, when a user views a log event that includes masked data, the sensitive data is
 *       replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to
 *         <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code>
 *       can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs
 *       Insights query with the <code>unmask</code> query command.</p>
 *          <p>For more information, including a list of types of data that can be audited and masked,
 *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data
 *         with masking</a>.</p>
 *          <p>To use the <code>PutAccountPolicy</code> operation for a data protection policy, you must
 *       be signed on with the <code>logs:PutDataProtectionPolicy</code> and
 *         <code>logs:PutAccountPolicy</code> permissions.</p>
 *          <p>The <code>PutAccountPolicy</code> operation applies to all log groups in the account. You
 *       can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a> to create a data protection policy that applies to just one
 *       log group. If a log group has its own data protection policy and the account also has an
 *       account-level data protection policy, then the two policies are cumulative. Any sensitive term
 *       specified in either policy is masked.</p>
 *          <p>
 *             <b>Subscription filter policy</b>
 *          </p>
 *          <p>A subscription filter policy sets up a real-time feed of log events from CloudWatch Logs to other Amazon Web Services services. Account-level subscription filter policies apply to
 *       both existing log groups and log groups that are created later in this account. Supported
 *       destinations are Kinesis Data Streams, Firehose, and Lambda. When log
 *       events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP
 *       format.</p>
 *          <p>The following destinations are supported for subscription filters:</p>
 *          <ul>
 *             <li>
 *                <p>An Kinesis Data Streams data stream in the same account as the subscription policy, for
 *           same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>An Firehose data stream in the same account as the subscription policy, for
 *           same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>A Lambda function in the same account as the subscription policy, for
 *           same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>A logical destination in a different account created with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html">PutDestination</a>, for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations.</p>
 *             </li>
 *          </ul>
 *          <p>Each account can have one account-level subscription filter policy per Region. If you are
 *       updating an existing filter, you must specify the correct name in <code>PolicyName</code>. To
 *       perform a <code>PutAccountPolicy</code> subscription filter operation for any destination
 *       except a Lambda function, you must also have the <code>iam:PassRole</code>
 *       permission.</p>
 *          <p>
 *             <b>Transformer policy</b>
 *          </p>
 *          <p>Creates or updates a <i>log transformer policy</i> for your account. You use
 *       log transformers to transform log events into a different format, making them easier for you
 *       to process and analyze. You can also transform logs from different sources into standardized
 *       formats that contain relevant, source-specific information. After you have created a
 *       transformer, CloudWatch Logs performs this transformation at the time of log ingestion. You
 *       can then refer to the transformed versions of the logs during operations such as querying with
 *         CloudWatch Logs Insights or creating metric filters or subscription filters.</p>
 *          <p>You can also use a transformer to copy metadata from metadata keys into the log events
 *       themselves. This metadata can include log group name, log stream name, account ID and
 *       Region.</p>
 *          <p>A transformer for a log group is a series of processors, where each processor applies one
 *       type of transformation to the log events ingested into this log group. For more information
 *       about the available processors to use in a transformer, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-Processors"> Processors that you can use</a>.</p>
 *          <p>Having log events in standardized format enables visibility across your applications for
 *       your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation
 *       for common log types with out-of-the-box transformation templates for major Amazon Web Services
 *       log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use
 *       pre-built transformation templates or create custom transformation policies.</p>
 *          <p>You can create transformers only for the log groups in the Standard log class.</p>
 *          <p>You can have one account-level transformer policy that applies to all log groups in the
 *       account. Or you can create as many as 20 account-level transformer policies that are each
 *       scoped to a subset of log groups with the <code>selectionCriteria</code> parameter. If you
 *       have multiple account-level transformer policies with selection criteria, no two of them can
 *       use the same or overlapping log group name prefixes. For example, if you have one policy
 *       filtered to log groups that start with <code>my-log</code>, you can't have another field index
 *       policy filtered to <code>my-logpprod</code> or <code>my-logging</code>.</p>
 *          <p>CloudWatch Logs provides default field indexes for all log groups in the Standard log
 *       class. Default field indexes are automatically available for the following fields: </p>
 *          <ul>
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
 *          <p>You can also set up a transformer at the log-group level. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html">PutTransformer</a>. If there is both a log-group level transformer created with
 *         <code>PutTransformer</code> and an account-level transformer that could apply to the same
 *       log group, the log group uses only the log-group level transformer. It ignores the
 *       account-level transformer.</p>
 *          <p>
 *             <b>Field index policy</b>
 *          </p>
 *          <p>You can use field index policies to create indexes on fields found in log events in the
 *       log group. Creating field indexes can help lower the scan volume for CloudWatch Logs
 *       Insights queries that reference those fields, because these queries attempt to skip the
 *       processing of log events that are known to not match the indexed field. Good fields to index
 *       are fields that you often need to query for and fields or values that match only a small
 *       fraction of the total log events. Common examples of indexes include request ID, session ID,
 *       user IDs, or instance IDs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html">Create field indexes
 *         to improve query performance and reduce costs</a>
 *          </p>
 *          <p>To find the fields that are in your log group events, use the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html">GetLogGroupFields</a> operation.</p>
 *          <p>For example, suppose you have created a field index for <code>requestId</code>. Then, any
 *         CloudWatch Logs Insights query on that log group that includes <code>requestId =
 *           <i>value</i>
 *             </code> or <code>requestId in [<i>value</i>,
 *           <i>value</i>, ...]</code> will attempt to process only the log events where
 *       the indexed field matches the specified value.</p>
 *          <p>Matches of log events to the names of indexed fields are case-sensitive. For example, an
 *       indexed field of <code>RequestId</code> won't match a log event containing
 *         <code>requestId</code>.</p>
 *          <p>You can have one account-level field index policy that applies to all log groups in the
 *       account. Or you can create as many as 20 account-level field index policies that are each
 *       scoped to a subset of log groups with the <code>selectionCriteria</code> parameter. If you
 *       have multiple account-level index policies with selection criteria, no two of them can use the
 *       same or overlapping log group name prefixes. For example, if you have one policy filtered to
 *       log groups that start with <code>my-log</code>, you can't have another field index policy
 *       filtered to <code>my-logpprod</code> or <code>my-logging</code>.</p>
 *          <p>If you create an account-level field index policy in a monitoring account in cross-account
 *       observability, the policy is applied only to the monitoring account and not to any source
 *       accounts.</p>
 *          <p>If you want to create a field index policy for a single log group, you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html">PutIndexPolicy</a> instead of <code>PutAccountPolicy</code>. If you do so, that log
 *       group will use only that log-group level policy, and will ignore the account-level policy that
 *       you create with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html">PutAccountPolicy</a>.</p>
 *          <p>
 *             <b>Metric extraction policy</b>
 *          </p>
 *          <p>A metric extraction policy controls whether CloudWatch Metrics can be created through the
 *       Embedded Metrics Format (EMF) for log groups in your account. By default, EMF metric creation
 *       is enabled for all log groups. You can use metric extraction policies to disable EMF metric
 *       creation for your entire account or specific log groups.</p>
 *          <p>When a policy disables EMF metric creation for a log group, log events in the EMF format
 *       are still ingested, but no CloudWatch Metrics are created from them.</p>
 *          <important>
 *             <p>Creating a policy disables metrics for AWS features that use EMF to create metrics, such
 *         as CloudWatch Container Insights and CloudWatch Application Signals. To prevent turning off
 *         those features by accident, we recommend that you exclude the underlying log-groups through
 *         a selection-criteria such as <code>LogGroupNamePrefix NOT IN ["/aws/containerinsights",
 *           "/aws/ecs/containerinsights", "/aws/application-signals/data"]</code>.</p>
 *          </important>
 *          <p>Each account can have either one account-level metric extraction policy that applies to
 *       all log groups, or up to 5 policies that are each scoped to a subset of log groups with the
 *         <code>selectionCriteria</code> parameter. The selection criteria supports filtering by
 *         <code>LogGroupName</code> and <code>LogGroupNamePrefix</code> using the operators
 *         <code>IN</code> and <code>NOT IN</code>. You can specify up to 50 values in each
 *         <code>IN</code> or <code>NOT IN</code> list.</p>
 *          <p>The selection criteria can be specified in these formats:</p>
 *          <p>
 *             <code>LogGroupName IN ["log-group-1", "log-group-2"]</code>
 *          </p>
 *          <p>
 *             <code>LogGroupNamePrefix NOT IN ["/aws/prefix1", "/aws/prefix2"]</code>
 *          </p>
 *          <p>If you have multiple account-level metric extraction policies with selection criteria, no
 *       two of them can have overlapping criteria. For example, if you have one policy with selection
 *       criteria <code>LogGroupNamePrefix IN ["my-log"]</code>, you can't have another metric
 *       extraction policy with selection criteria <code>LogGroupNamePrefix IN ["/my-log-prod"]</code>
 *       or <code>LogGroupNamePrefix IN ["/my-logging"]</code>, as the set of log groups matching these
 *       prefixes would be a subset of the log groups matching the first policy's prefix, creating an
 *       overlap.</p>
 *          <p>When using <code>NOT IN</code>, only one policy with this operator is allowed per
 *       account.</p>
 *          <p>When combining policies with <code>IN</code> and <code>NOT IN</code> operators, the
 *       overlap check ensures that policies don't have conflicting effects. Two policies with
 *         <code>IN</code> and <code>NOT IN</code> operators do not overlap if and only if every value
 *       in the <code>IN </code>policy is completely contained within some value in the <code>NOT
 *         IN</code> policy. For example:</p>
 *          <ul>
 *             <li>
 *                <p>If you have a <code>NOT IN</code> policy for prefix <code>"/aws/lambda"</code>, you
 *           can create an <code>IN</code> policy for the exact log group name
 *             <code>"/aws/lambda/function1"</code> because the set of log groups matching
 *             <code>"/aws/lambda/function1"</code> is a subset of the log groups matching
 *             <code>"/aws/lambda"</code>.</p>
 *             </li>
 *             <li>
 *                <p>If you have a <code>NOT IN</code> policy for prefix <code>"/aws/lambda"</code>, you
 *           cannot create an <code>IN</code> policy for prefix <code>"/aws"</code> because the set of
 *           log groups matching <code>"/aws"</code> is not a subset of the log groups matching
 *             <code>"/aws/lambda"</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutAccountPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutAccountPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutAccountPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   policyDocument: "STRING_VALUE", // required
 *   policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY" || "FIELD_INDEX_POLICY" || "TRANSFORMER_POLICY" || "METRIC_EXTRACTION_POLICY", // required
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
 * //     policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY" || "FIELD_INDEX_POLICY" || "TRANSFORMER_POLICY" || "METRIC_EXTRACTION_POLICY",
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "PutAccountPolicy", {})
  .n("CloudWatchLogsClient", "PutAccountPolicyCommand")
  .sc(PutAccountPolicy)
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
