// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutMetricAlarmInput } from "../models/models_0";
import { de_PutMetricAlarmCommand, se_PutMetricAlarmCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMetricAlarmCommand}.
 */
export interface PutMetricAlarmCommandInput extends PutMetricAlarmInput {}
/**
 * @public
 *
 * The output of {@link PutMetricAlarmCommand}.
 */
export interface PutMetricAlarmCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates an alarm and associates it with the specified metric, metric math expression,
 * 			anomaly detection model, or Metrics Insights query. For more information about using
 * 			a Metrics Insights query for an alarm, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p>
 *          <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p>
 *          <p>When this operation creates an alarm, the alarm state is immediately set to
 * 			<code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 * 			appropriately. Any actions associated with the new state are then executed.</p>
 *          <p>When you update an existing alarm, its state is left unchanged, but the
 * 			update completely overwrites the previous configuration of the alarm.</p>
 *          <p>If you are an IAM user, you must have
 * 			Amazon EC2 permissions for some alarm operations:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>iam:CreateServiceLinkedRole</code> permission for all alarms with EC2 actions</p>
 *             </li>
 *             <li>
 *                <p>The <code>iam:CreateServiceLinkedRole</code> permissions to create an alarm
 * 					with Systems Manager OpsItem or response plan actions.</p>
 *             </li>
 *          </ul>
 *          <p>The first time you create an alarm in the
 * 			Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch
 * 			creates the necessary service-linked role for you. The service-linked roles
 * 			are called <code>AWSServiceRoleForCloudWatchEvents</code> and
 * 			<code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>.
 * 			For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Amazon Web Services service-linked role</a>.</p>
 *          <p>Each <code>PutMetricAlarm</code> action has a maximum uncompressed payload of 120 KB.</p>
 *          <p>
 *             <b>Cross-account alarms</b>
 *          </p>
 *          <p>You can set an alarm on metrics in the current account, or in another
 * 			account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following
 * 			pre-requisites:</p>
 *          <ul>
 *             <li>
 *                <p>The account where the metrics are located (the <i>sharing account</i>) must
 * 				already have a sharing role named <b>CloudWatch-CrossAccountSharingRole</b>. If it does not already
 * 				have this role, you must create it using the instructions in <b>Set up a
 * 					sharing account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region">
 * 					Cross-account cross-Region CloudWatch console</a>. The policy for that
 * 				role must grant access
 * 				to the ID of the account where you are creating the alarm.
 * 			</p>
 *             </li>
 *             <li>
 *                <p>The account where you are creating the alarm (the <i>monitoring account</i>) must
 * 				already have a service-linked role named
 * 				<b>AWSServiceRoleForCloudWatchCrossAccount</b> to allow
 * 				CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in <b>Set up a
 * 					monitoring account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region">
 * 						Cross-account cross-Region CloudWatch console</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricAlarmCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricAlarmCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // PutMetricAlarmInput
 *   AlarmName: "STRING_VALUE", // required
 *   AlarmDescription: "STRING_VALUE",
 *   ActionsEnabled: true || false,
 *   OKActions: [ // ResourceList
 *     "STRING_VALUE",
 *   ],
 *   AlarmActions: [
 *     "STRING_VALUE",
 *   ],
 *   InsufficientDataActions: [
 *     "STRING_VALUE",
 *   ],
 *   MetricName: "STRING_VALUE",
 *   Namespace: "STRING_VALUE",
 *   Statistic: "SampleCount" || "Average" || "Sum" || "Minimum" || "Maximum",
 *   ExtendedStatistic: "STRING_VALUE",
 *   Dimensions: [ // Dimensions
 *     { // Dimension
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Period: Number("int"),
 *   Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *   EvaluationPeriods: Number("int"), // required
 *   DatapointsToAlarm: Number("int"),
 *   Threshold: Number("double"),
 *   ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold" || "LessThanLowerOrGreaterThanUpperThreshold" || "LessThanLowerThreshold" || "GreaterThanUpperThreshold", // required
 *   TreatMissingData: "STRING_VALUE",
 *   EvaluateLowSampleCountPercentile: "STRING_VALUE",
 *   Metrics: [ // MetricDataQueries
 *     { // MetricDataQuery
 *       Id: "STRING_VALUE", // required
 *       MetricStat: { // MetricStat
 *         Metric: { // Metric
 *           Namespace: "STRING_VALUE",
 *           MetricName: "STRING_VALUE",
 *           Dimensions: [
 *             {
 *               Name: "STRING_VALUE", // required
 *               Value: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         Period: Number("int"), // required
 *         Stat: "STRING_VALUE", // required
 *         Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *       },
 *       Expression: "STRING_VALUE",
 *       Label: "STRING_VALUE",
 *       ReturnData: true || false,
 *       Period: Number("int"),
 *       AccountId: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ThresholdMetricId: "STRING_VALUE",
 * };
 * const command = new PutMetricAlarmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMetricAlarmCommandInput - {@link PutMetricAlarmCommandInput}
 * @returns {@link PutMetricAlarmCommandOutput}
 * @see {@link PutMetricAlarmCommandInput} for command's `input` shape.
 * @see {@link PutMetricAlarmCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>The quota for alarms for this customer has already been reached.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 * @public
 */
export class PutMetricAlarmCommand extends $Command
  .classBuilder<
    PutMetricAlarmCommandInput,
    PutMetricAlarmCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "PutMetricAlarm", {})
  .n("CloudWatchClient", "PutMetricAlarmCommand")
  .f(void 0, void 0)
  .ser(se_PutMetricAlarmCommand)
  .de(de_PutMetricAlarmCommand)
  .build() {}
