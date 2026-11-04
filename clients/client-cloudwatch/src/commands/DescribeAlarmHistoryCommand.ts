// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAlarmHistoryInput, DescribeAlarmHistoryOutput } from "../models/models_0";
import { DescribeAlarmHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAlarmHistoryCommand}.
 */
export interface DescribeAlarmHistoryCommandInput extends DescribeAlarmHistoryInput {}
/**
 * @public
 *
 * The output of {@link DescribeAlarmHistoryCommand}.
 */
export interface DescribeAlarmHistoryCommandOutput extends DescribeAlarmHistoryOutput, __MetadataBearer {}

/**
 * Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.
 *
 * CloudWatch retains the history of an alarm even if you delete the alarm.
 *
 * To use this operation and return information about a composite alarm, you must be signed on with the `cloudwatch:DescribeAlarmHistory` permission that is scoped to `*`. You can't return information about composite alarms if your `cloudwatch:DescribeAlarmHistory` permission has a narrower scope.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmHistoryCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmHistoryCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DescribeAlarmHistoryInput
 *   AlarmName: "STRING_VALUE",
 *   AlarmContributorId: "STRING_VALUE",
 *   AlarmTypes: [ // AlarmTypes
 *     "CompositeAlarm" || "MetricAlarm" || "LogAlarm",
 *   ],
 *   HistoryItemType: "ConfigurationUpdate" || "StateUpdate" || "Action" || "AlarmContributorStateUpdate" || "AlarmContributorAction",
 *   StartDate: new Date("TIMESTAMP"),
 *   EndDate: new Date("TIMESTAMP"),
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ScanBy: "TimestampDescending" || "TimestampAscending",
 * };
 * const command = new DescribeAlarmHistoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlarmHistoryOutput
 * //   AlarmHistoryItems: [ // AlarmHistoryItems
 * //     { // AlarmHistoryItem
 * //       AlarmName: "STRING_VALUE",
 * //       AlarmContributorId: "STRING_VALUE",
 * //       AlarmType: "CompositeAlarm" || "MetricAlarm" || "LogAlarm",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       HistoryItemType: "ConfigurationUpdate" || "StateUpdate" || "Action" || "AlarmContributorStateUpdate" || "AlarmContributorAction",
 * //       HistorySummary: "STRING_VALUE",
 * //       HistoryData: "STRING_VALUE",
 * //       AlarmContributorAttributes: { // ContributorAttributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAlarmHistoryCommandInput - {@link DescribeAlarmHistoryCommandInput}
 * @returns {@link DescribeAlarmHistoryCommandOutput}
 * @see {@link DescribeAlarmHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmHistoryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The next token specified is invalid.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class DescribeAlarmHistoryCommand extends command<DescribeAlarmHistoryCommandInput, DescribeAlarmHistoryCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAlarmHistory",
  DescribeAlarmHistory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAlarmHistoryInput;
      output: DescribeAlarmHistoryOutput;
    };
    sdk: {
      input: DescribeAlarmHistoryCommandInput;
      output: DescribeAlarmHistoryCommandOutput;
    };
  };
}
