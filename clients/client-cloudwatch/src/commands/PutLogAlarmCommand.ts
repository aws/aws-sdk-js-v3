// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutLogAlarmInput } from "../models/models_0";
import { PutLogAlarm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutLogAlarmCommand}.
 */
export interface PutLogAlarmCommandInput extends PutLogAlarmInput {}
/**
 * @public
 *
 * The output of {@link PutLogAlarmCommand}.
 */
export interface PutLogAlarmCommandOutput extends __MetadataBearer {}

/**
 * Creates or updates a log alarm. A log alarm evaluates the results of a CloudWatch Logs scheduled query against the configured threshold and comparison operator to determine its state.
 *
 * When you create a log alarm, the operation creates a service-managed CloudWatch Logs scheduled query that runs the query string you provide on the schedule you configure. Each scheduled query execution returns one or more aggregated values determined by the `AggregationExpression`, and each aggregated value is compared against the alarm `Threshold` to determine the alarm state. The alarm uses M-out-of-N evaluation: if `QueryResultsToAlarm` out of the most recent `QueryResultsToEvaluate` query results breach the threshold, the alarm transitions to `ALARM`.
 *
 * Log alarms support the alarm states (`OK`, `ALARM`, `INSUFFICIENT_DATA`). Configure transition actions using `OKActions`, `AlarmActions`, and `InsufficientDataActions`.
 *
 * If you call this operation with the name of an existing log alarm, the operation replaces the previous configuration of that alarm.
 *
 * **Permissions**
 *
 * To create or update a log alarm, you must have the `cloudwatch:PutLogAlarm` permission. The IAM role specified in `ScheduledQueryRoleARN` must grant the CloudWatch Alarms service permission to execute scheduled queries on the specified log groups. If you set `ActionLogLineCount`, the role specified in `ActionLogLineRoleArn` must grant permission to retrieve log events for inclusion in alarm notifications.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutLogAlarmCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutLogAlarmCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutLogAlarmInput
 *   AlarmName: "STRING_VALUE", // required
 *   AlarmDescription: "STRING_VALUE",
 *   ScheduledQueryConfiguration: { // ScheduledQueryConfiguration
 *     QueryString: "STRING_VALUE", // required
 *     LogGroupIdentifiers: [ // LogGroupIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     QueryARN: "STRING_VALUE",
 *     ScheduledQueryRoleARN: "STRING_VALUE", // required
 *     ScheduleConfiguration: { // ScheduleConfiguration
 *       ScheduleExpression: "STRING_VALUE", // required
 *       StartTimeOffset: Number("long"), // required
 *       EndTimeOffset: Number("long"),
 *     },
 *     AggregationExpression: "STRING_VALUE", // required
 *     Tags: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   ActionLogLineCount: Number("int"),
 *   ActionLogLineRoleArn: "STRING_VALUE",
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
 *   QueryResultsToEvaluate: Number("int"), // required
 *   QueryResultsToAlarm: Number("int"), // required
 *   Threshold: Number("double"), // required
 *   ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold" || "LessThanLowerOrGreaterThanUpperThreshold" || "LessThanLowerThreshold" || "GreaterThanUpperThreshold", // required
 *   TreatMissingData: "STRING_VALUE",
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   WarmUpConfiguration: { // WarmUpConfiguration
 *     WarmUpPeriodDurationInMinutes: Number("int"), // required
 *     OnlyStartEvaluatingAfterWarmUpPeriodEnds: true || false,
 *   },
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
 * const command = new PutLogAlarmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutLogAlarmCommandInput - {@link PutLogAlarmCommandInput}
 * @returns {@link PutLogAlarmCommandOutput}
 * @see {@link PutLogAlarmCommandInput} for command's `input` shape.
 * @see {@link PutLogAlarmCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * The quota for alarms for this customer has already been reached.
 *
 * @throws {@link ResourceConflict} (client fault)
 *
 * The operation could not be completed because the request conflicts with the current state of the alarm or its underlying scheduled query resource.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class PutLogAlarmCommand extends command<PutLogAlarmCommandInput, PutLogAlarmCommandOutput>(
  _ep0,
  _mw0,
  "PutLogAlarm",
  PutLogAlarm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLogAlarmInput;
      output: {};
    };
    sdk: {
      input: PutLogAlarmCommandInput;
      output: PutLogAlarmCommandOutput;
    };
  };
}
