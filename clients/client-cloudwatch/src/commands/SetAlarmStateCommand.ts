// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetAlarmStateInput } from "../models/models_0";
import { SetAlarmState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to `ALARM` sends an SNS message.
 *
 * Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's **History** tab in the Amazon CloudWatch console or through [DescribeAlarmHistory](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html).
 *
 * If you use `SetAlarmState` on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.
 *
 * If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the `StateReasonData` parameter to enable the policy to take the correct action.
 *
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
 *
 * Data was not syntactically valid JSON.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * The named resource does not exist.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class SetAlarmStateCommand extends command<SetAlarmStateCommandInput, SetAlarmStateCommandOutput>(
  _ep0,
  _mw0,
  "SetAlarmState",
  SetAlarmState$
) {
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
