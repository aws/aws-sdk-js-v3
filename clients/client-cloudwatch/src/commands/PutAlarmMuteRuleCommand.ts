// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAlarmMuteRuleInput } from "../models/models_0";
import { PutAlarmMuteRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates an alarm mute rule.
 *
 * Alarm mute rules automatically mute alarm actions during predefined time windows. When a mute rule is active, targeted alarms continue to evaluate metrics and transition between states, but their configured actions (such as Amazon SNS notifications or Auto Scaling actions) are muted.
 *
 * You can create mute rules with recurring schedules using `cron` expressions or one-time mute windows using `at` expressions. Each mute rule can target up to 100 specific alarms by name.
 *
 * If you specify a rule name that already exists, this operation updates the existing rule with the new configuration.
 *
 * **Permissions**
 *
 * To create or update a mute rule, you must have the `cloudwatch:PutAlarmMuteRule` permission on two types of resources: the alarm mute rule resource itself, and each alarm that the rule targets.
 *
 * For example, If you want to allow a user to create mute rules that target only specific alarms named "WebServerCPUAlarm" and "DatabaseConnectionAlarm", you would create an IAM policy with one statement granting `cloudwatch:PutAlarmMuteRule` on the alarm mute rule resource (`arn:aws:cloudwatch:[REGION]:123456789012:alarm-mute-rule:*`), and another statement granting `cloudwatch:PutAlarmMuteRule` on the targeted alarm resources (`arn:aws:cloudwatch:[REGION]:123456789012:alarm:WebServerCPUAlarm` and `arn:aws:cloudwatch:[REGION]:123456789012:alarm:DatabaseConnectionAlarm`).
 *
 * You can also use IAM policy conditions to allow targeting alarms based on resource tags. For example, you can restrict users to create/update mute rules to only target alarms that have a specific tag key-value pair, such as `Team=TeamA`.
 *
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
 *
 * The quota for alarms for this customer has already been reached.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class PutAlarmMuteRuleCommand extends command<PutAlarmMuteRuleCommandInput, PutAlarmMuteRuleCommandOutput>(
  _ep0,
  _mw0,
  "PutAlarmMuteRule",
  PutAlarmMuteRule$
) {
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
