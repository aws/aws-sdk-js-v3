// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutAlarmMuteRuleInput } from "../models/models_0";
import { PutAlarmMuteRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAlarmMuteRuleCommand}.
 */
export interface PutAlarmMuteRuleCommandInput extends PutAlarmMuteRuleInput {}
/**
 * @public
 *
 * The output of {@link PutAlarmMuteRuleCommand}.
 */
export interface PutAlarmMuteRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates an alarm mute rule.</p>
 *          <p>Alarm mute rules automatically mute alarm actions during predefined time windows. When a mute rule is active, targeted alarms continue to evaluate metrics and transition between states, but their configured actions (such as Amazon SNS notifications or Auto Scaling actions) are muted.</p>
 *          <p>You can create mute rules with recurring schedules using <code>cron</code> expressions or one-time mute windows using <code>at</code> expressions. Each mute rule can target up to 100 specific alarms by name.</p>
 *          <p>If you specify a rule name that already exists, this operation updates the existing rule with the new configuration.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To create or update a mute rule, you must have the <code>cloudwatch:PutAlarmMuteRule</code> permission on two types of resources: the alarm mute rule resource itself, and each alarm that the rule targets.</p>
 *          <p>For example, If you want to allow a user to create mute rules that target only specific alarms named "WebServerCPUAlarm" and "DatabaseConnectionAlarm", you would create an IAM policy with one statement granting <code>cloudwatch:PutAlarmMuteRule</code> on the alarm mute rule resource (<code>arn:aws:cloudwatch:[REGION]:123456789012:alarm-mute:*</code>), and another statement granting <code>cloudwatch:PutAlarmMuteRule</code> on the targeted alarm resources (<code>arn:aws:cloudwatch:[REGION]:123456789012:alarm:WebServerCPUAlarm</code> and <code>arn:aws:cloudwatch:[REGION]:123456789012:alarm:DatabaseConnectionAlarm</code>).</p>
 *          <p>You can also use IAM policy conditions to allow targeting alarms based on resource tags. For example, you can restrict users to create/update mute rules to only target alarms that have a specific tag key-value pair, such as <code>Team=TeamA</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutAlarmMuteRuleCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutAlarmMuteRuleCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutAlarmMuteRuleInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Rule: { // Rule
 *     Schedule: { // Schedule
 *       Expression: "STRING_VALUE", // required
 *       Duration: "STRING_VALUE", // required
 *       Timezone: "STRING_VALUE",
 *     },
 *   },
 *   MuteTargets: { // MuteTargets
 *     AlarmNames: [ // MuteTargetAlarmNameList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   StartDate: new Date("TIMESTAMP"),
 *   ExpireDate: new Date("TIMESTAMP"),
 * };
 * const command = new PutAlarmMuteRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAlarmMuteRuleCommandInput - {@link PutAlarmMuteRuleCommandInput}
 * @returns {@link PutAlarmMuteRuleCommandOutput}
 * @see {@link PutAlarmMuteRuleCommandInput} for command's `input` shape.
 * @see {@link PutAlarmMuteRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>The quota for alarms for this customer has already been reached.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class PutAlarmMuteRuleCommand extends $Command
  .classBuilder<
    PutAlarmMuteRuleCommandInput,
    PutAlarmMuteRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "PutAlarmMuteRule", {})
  .n("CloudWatchClient", "PutAlarmMuteRuleCommand")
  .sc(PutAlarmMuteRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAlarmMuteRuleInput;
      output: {};
    };
    sdk: {
      input: PutAlarmMuteRuleCommandInput;
      output: PutAlarmMuteRuleCommandOutput;
    };
  };
}
