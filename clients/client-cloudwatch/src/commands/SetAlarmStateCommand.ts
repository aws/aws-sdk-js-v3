// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetAlarmStateInput } from "../models/models_0";
import { SetAlarmState } from "../schemas/schemas_3_Alarm";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetAlarmStateCommand}.
 */
export interface SetAlarmStateCommandInput extends SetAlarmStateInput {}
/**
 * @public
 *
 * The output of {@link SetAlarmStateCommand}.
 */
export interface SetAlarmStateCommandOutput extends __MetadataBearer {}

/**
 * <p>Temporarily sets the state of an alarm for testing purposes. When the updated state
 *             differs from the previous value, the action configured for the appropriate state is
 *             invoked. For example, if your alarm is configured to send an Amazon SNS message when an
 *             alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an
 *             SNS message.</p>
 *          <p>Metric alarms returns to their actual state quickly, often within seconds. Because
 *             the metric alarm state change happens quickly, it is typically only visible in the
 *             alarm's <b>History</b> tab in the Amazon CloudWatch console or
 *             through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p>
 *          <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is
 *             not guaranteed to return to its actual state. It returns to its actual state only once
 *             any of its children alarms change state. It is also reevaluated if you update its
 *             configuration.</p>
 *          <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling
 *             policies, you must include information in the <code>StateReasonData</code> parameter to
 *             enable the policy to take the correct action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, SetAlarmStateCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, SetAlarmStateCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // SetAlarmStateInput
 *   AlarmName: "STRING_VALUE", // required
 *   StateValue: "OK" || "ALARM" || "INSUFFICIENT_DATA", // required
 *   StateReason: "STRING_VALUE", // required
 *   StateReasonData: "STRING_VALUE",
 * };
 * const command = new SetAlarmStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetAlarmStateCommandInput - {@link SetAlarmStateCommandInput}
 * @returns {@link SetAlarmStateCommandOutput}
 * @see {@link SetAlarmStateCommandInput} for command's `input` shape.
 * @see {@link SetAlarmStateCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidFormatFault} (client fault)
 *  <p>Data was not syntactically valid JSON.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class SetAlarmStateCommand extends $Command
  .classBuilder<
    SetAlarmStateCommandInput,
    SetAlarmStateCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "SetAlarmState", {})
  .n("CloudWatchClient", "SetAlarmStateCommand")
  .sc(SetAlarmState)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetAlarmStateInput;
      output: {};
    };
    sdk: {
      input: SetAlarmStateCommandInput;
      output: SetAlarmStateCommandOutput;
    };
  };
}
