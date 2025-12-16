// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import type { DescribeAlarmRequest, DescribeAlarmResponse } from "../models/models_0";
import { DescribeAlarm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlarmCommand}.
 */
export interface DescribeAlarmCommandInput extends DescribeAlarmRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAlarmCommand}.
 */
export interface DescribeAlarmCommandOutput extends DescribeAlarmResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an alarm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, DescribeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, DescribeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * // import type { IoTEventsDataClientConfig } from "@aws-sdk/client-iot-events-data";
 * const config = {}; // type is IoTEventsDataClientConfig
 * const client = new IoTEventsDataClient(config);
 * const input = { // DescribeAlarmRequest
 *   alarmModelName: "STRING_VALUE", // required
 *   keyValue: "STRING_VALUE",
 * };
 * const command = new DescribeAlarmCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlarmResponse
 * //   alarm: { // Alarm
 * //     alarmModelName: "STRING_VALUE",
 * //     alarmModelVersion: "STRING_VALUE",
 * //     keyValue: "STRING_VALUE",
 * //     alarmState: { // AlarmState
 * //       stateName: "DISABLED" || "NORMAL" || "ACTIVE" || "ACKNOWLEDGED" || "SNOOZE_DISABLED" || "LATCHED",
 * //       ruleEvaluation: { // RuleEvaluation
 * //         simpleRuleEvaluation: { // SimpleRuleEvaluation
 * //           inputPropertyValue: "STRING_VALUE",
 * //           operator: "GREATER" || "GREATER_OR_EQUAL" || "LESS" || "LESS_OR_EQUAL" || "EQUAL" || "NOT_EQUAL",
 * //           thresholdValue: "STRING_VALUE",
 * //         },
 * //       },
 * //       customerAction: { // CustomerAction
 * //         actionName: "SNOOZE" || "ENABLE" || "DISABLE" || "ACKNOWLEDGE" || "RESET",
 * //         snoozeActionConfiguration: { // SnoozeActionConfiguration
 * //           snoozeDuration: Number("int"),
 * //           note: "STRING_VALUE",
 * //         },
 * //         enableActionConfiguration: { // EnableActionConfiguration
 * //           note: "STRING_VALUE",
 * //         },
 * //         disableActionConfiguration: { // DisableActionConfiguration
 * //           note: "STRING_VALUE",
 * //         },
 * //         acknowledgeActionConfiguration: { // AcknowledgeActionConfiguration
 * //           note: "STRING_VALUE",
 * //         },
 * //         resetActionConfiguration: { // ResetActionConfiguration
 * //           note: "STRING_VALUE",
 * //         },
 * //       },
 * //       systemEvent: { // SystemEvent
 * //         eventType: "STATE_CHANGE",
 * //         stateChangeConfiguration: { // StateChangeConfiguration
 * //           triggerType: "SNOOZE_TIMEOUT",
 * //         },
 * //       },
 * //     },
 * //     severity: Number("int"),
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAlarmCommandInput - {@link DescribeAlarmCommandInput}
 * @returns {@link DescribeAlarmCommandOutput}
 * @see {@link DescribeAlarmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsDataServiceException}
 * <p>Base exception class for all service exceptions from IoTEventsData service.</p>
 *
 *
 * @public
 */
export class DescribeAlarmCommand extends $Command
  .classBuilder<
    DescribeAlarmCommandInput,
    DescribeAlarmCommandOutput,
    IoTEventsDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboDataService", "DescribeAlarm", {})
  .n("IoTEventsDataClient", "DescribeAlarmCommand")
  .sc(DescribeAlarm$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAlarmRequest;
      output: DescribeAlarmResponse;
    };
    sdk: {
      input: DescribeAlarmCommandInput;
      output: DescribeAlarmCommandOutput;
    };
  };
}
