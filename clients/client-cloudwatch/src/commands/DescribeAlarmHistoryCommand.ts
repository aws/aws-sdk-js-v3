// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAlarmHistoryInput, DescribeAlarmHistoryOutput } from "../models/models_0";
import { de_DescribeAlarmHistoryCommand, se_DescribeAlarmHistoryCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the history for the specified alarm. You can filter the results by date
 *             range or item type. If an alarm name is not specified, the histories for either all
 *             metric alarms or all composite alarms are returned.</p>
 *          <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p>
 *          <p>To use this operation and return information about a composite alarm, you must be
 *             signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is
 *             scoped to <code>*</code>. You can't return information about composite alarms if your
 *             <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmHistoryCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmHistoryCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DescribeAlarmHistoryInput
 *   AlarmName: "STRING_VALUE",
 *   AlarmTypes: [ // AlarmTypes
 *     "CompositeAlarm" || "MetricAlarm",
 *   ],
 *   HistoryItemType: "ConfigurationUpdate" || "StateUpdate" || "Action",
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
 * //       AlarmType: "CompositeAlarm" || "MetricAlarm",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       HistoryItemType: "ConfigurationUpdate" || "StateUpdate" || "Action",
 * //       HistorySummary: "STRING_VALUE",
 * //       HistoryData: "STRING_VALUE",
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
 *  <p>The next token specified is invalid.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DescribeAlarmHistoryCommand extends $Command
  .classBuilder<
    DescribeAlarmHistoryCommandInput,
    DescribeAlarmHistoryCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "DescribeAlarmHistory", {})
  .n("CloudWatchClient", "DescribeAlarmHistoryCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAlarmHistoryCommand)
  .de(de_DescribeAlarmHistoryCommand)
  .build() {
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
