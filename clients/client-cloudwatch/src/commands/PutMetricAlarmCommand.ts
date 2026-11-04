// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutMetricAlarmInput } from "../models/models_0";
import { PutMetricAlarm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, Metrics Insights query, or PromQL query. For more information about using a Metrics Insights query for an alarm, see [Create alarms on Metrics Insights queries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html).
 *
 * Alarms based on anomaly detection models cannot have Auto Scaling actions.
 *
 * When this operation creates an alarm, the alarm state is immediately set to `INSUFFICIENT_DATA`. For PromQL alarms, the alarm state is instead immediately set to `OK`. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.
 *
 * When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.
 *
 * If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:
 *
 * - The `iam:CreateServiceLinkedRole` permission for all alarms with EC2 actions
 * - The `iam:CreateServiceLinkedRole` permissions to create an alarm with Systems Manager OpsItem or response plan actions.
 *
 * The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called `AWSServiceRoleForCloudWatchEvents` and `AWSServiceRoleForCloudWatchAlarms_ActionSSM`. For more information, see [Amazon Web Services service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role).
 *
 * Each `PutMetricAlarm` action has a maximum uncompressed payload of 120 KB.
 *
 * **Cross-account alarms**
 *
 * You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites:
 *
 * - The account where the metrics are located (the *sharing account*) must already have a sharing role named **CloudWatch-CrossAccountSharingRole**. If it does not already have this role, you must create it using the instructions in **Set up a sharing account** in [Cross-account cross-Region CloudWatch console](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region). The policy for that role must grant access to the ID of the account where you are creating the alarm.
 * - The account where you are creating the alarm (the *monitoring account*) must already have a service-linked role named **AWSServiceRoleForCloudWatchCrossAccount** to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in **Set up a monitoring account** in [Cross-account cross-Region CloudWatch console](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricAlarmCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricAlarmCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
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
 *   EvaluationPeriods: Number("int"),
 *   DatapointsToAlarm: Number("int"),
 *   Threshold: Number("double"),
 *   ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold" || "LessThanLowerOrGreaterThanUpperThreshold" || "LessThanLowerThreshold" || "GreaterThanUpperThreshold",
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
 *   EvaluationWindow: { // EvaluationWindow Union: only one key present
 *     WallClockWindow: { // WallClockWindow
 *       Timezone: "STRING_VALUE",
 *     },
 *     SlidingWindow: {},
 *   },
 *   WarmUpConfiguration: { // WarmUpConfiguration
 *     WarmUpPeriodDurationInMinutes: Number("int"), // required
 *     OnlyStartEvaluatingAfterWarmUpPeriodEnds: true || false,
 *   },
 *   EvaluationCriteria: { // EvaluationCriteria Union: only one key present
 *     PromQLCriteria: { // AlarmPromQLCriteria
 *       Query: "STRING_VALUE", // required
 *       PendingPeriod: Number("int"),
 *       RecoveryPeriod: Number("int"),
 *     },
 *   },
 *   EvaluationInterval: Number("int"),
 *   ActionConfiguration: { // ActionConfiguration
 *     AlarmTagsPropagation: { // AlarmTagsPropagation
 *       Enabled: true || false, // required
 *       IncludedTagKeys: [ // AlarmTagsPropagationTagKeys
 *         "STRING_VALUE",
 *       ],
 *       ExcludedTagKeys: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
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
 *
 * The quota for alarms for this customer has already been reached.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class PutMetricAlarmCommand extends command<PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput>(
  _ep0,
  _mw0,
  "PutMetricAlarm",
  PutMetricAlarm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMetricAlarmInput;
      output: {};
    };
    sdk: {
      input: PutMetricAlarmCommandInput;
      output: PutMetricAlarmCommandOutput;
    };
  };
}
