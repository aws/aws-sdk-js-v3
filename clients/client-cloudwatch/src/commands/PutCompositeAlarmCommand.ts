// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutCompositeAlarmInput } from "../models/models_0";
import { PutCompositeAlarm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutCompositeAlarmCommand}.
 */
export interface PutCompositeAlarmCommandInput extends PutCompositeAlarmInput {}
/**
 * @public
 *
 * The output of {@link PutCompositeAlarmCommand}.
 */
export interface PutCompositeAlarmCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates a <i>composite alarm</i>. When you create a composite
 *             alarm, you specify a rule expression for the alarm that takes into account the alarm
 *             states of other alarms that you have created. The composite alarm goes into ALARM state
 *             only if all conditions of the rule are met.</p>
 *          <p>The alarms specified in a composite alarm's rule expression can include metric alarms
 *             and other composite alarms. The rule expression of a composite alarm can include as many
 *             as 100 underlying alarms. Any single alarm can be included in the rule expressions of as
 *             many as 150 composite alarms.</p>
 *          <p>Using composite alarms can reduce alarm noise. You can create multiple metric alarms,
 *             and also create a composite alarm and set up alerts only for the composite alarm. For
 *             example, you could create a composite alarm that goes into ALARM state only when more
 *             than one of the underlying metric alarms are in ALARM state.</p>
 *          <p>Composite alarms can take the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>Notify Amazon SNS topics.</p>
 *             </li>
 *             <li>
 *                <p>Invoke Lambda functions.</p>
 *             </li>
 *             <li>
 *                <p>Create OpsItems in Systems Manager Ops Center.</p>
 *             </li>
 *             <li>
 *                <p>Create incidents in Systems Manager Incident Manager.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>It is possible to create a loop or cycle of composite alarms, where composite
 *                 alarm A depends on composite alarm B, and composite alarm B also depends on
 *                 composite alarm A. In this scenario, you can't delete any composite alarm that is
 *                 part of the cycle because there is always still a composite alarm that depends on
 *                 that alarm that you want to delete.</p>
 *             <p>To get out of such a situation, you must break the cycle by changing the rule of
 *                 one of the composite alarms in the cycle to remove a dependency that creates the
 *                 cycle. The simplest change to make to break a cycle is to change the
 *                 <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p>
 *             <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a
 *                 cycle in the evaluation path. </p>
 *          </note>
 *          <p>When this operation creates an alarm, the alarm state is immediately set to
 *             <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 *             appropriately. Any actions associated with the new state are then executed. For a
 *             composite alarm, this initial time after creation is the only time that the alarm can be
 *             in <code>INSUFFICIENT_DATA</code> state.</p>
 *          <p>When you update an existing alarm, its state is left unchanged, but the update
 *             completely overwrites the previous configuration of the alarm.</p>
 *          <p>To use this operation, you must be signed on with the
 *             <code>cloudwatch:PutCompositeAlarm</code> permission that is scoped to
 *             <code>*</code>. You can't create a composite alarms if your
 *             <code>cloudwatch:PutCompositeAlarm</code> permission has a narrower scope.</p>
 *          <p>If you are an IAM user, you must have
 *             <code>iam:CreateServiceLinkedRole</code> to create a composite alarm that has
 *             Systems Manager OpsItem actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutCompositeAlarmCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutCompositeAlarmCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutCompositeAlarmInput
 *   ActionsEnabled: true || false,
 *   AlarmActions: [ // ResourceList
 *     "STRING_VALUE",
 *   ],
 *   AlarmDescription: "STRING_VALUE",
 *   AlarmName: "STRING_VALUE", // required
 *   AlarmRule: "STRING_VALUE", // required
 *   InsufficientDataActions: [
 *     "STRING_VALUE",
 *   ],
 *   OKActions: [
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ActionsSuppressor: "STRING_VALUE",
 *   ActionsSuppressorWaitPeriod: Number("int"),
 *   ActionsSuppressorExtensionPeriod: Number("int"),
 * };
 * const command = new PutCompositeAlarmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCompositeAlarmCommandInput - {@link PutCompositeAlarmCommandInput}
 * @returns {@link PutCompositeAlarmCommandOutput}
 * @see {@link PutCompositeAlarmCommandInput} for command's `input` shape.
 * @see {@link PutCompositeAlarmCommandOutput} for command's `response` shape.
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
export class PutCompositeAlarmCommand extends $Command
  .classBuilder<
    PutCompositeAlarmCommandInput,
    PutCompositeAlarmCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "PutCompositeAlarm", {})
  .n("CloudWatchClient", "PutCompositeAlarmCommand")
  .sc(PutCompositeAlarm$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutCompositeAlarmInput;
      output: {};
    };
    sdk: {
      input: PutCompositeAlarmCommandInput;
      output: PutCompositeAlarmCommandOutput;
    };
  };
}
