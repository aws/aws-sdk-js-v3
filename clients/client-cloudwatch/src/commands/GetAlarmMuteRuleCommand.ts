// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAlarmMuteRuleInput, GetAlarmMuteRuleOutput } from "../models/models_0";
import { GetAlarmMuteRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAlarmMuteRuleCommand}.
 */
export interface GetAlarmMuteRuleCommandInput extends GetAlarmMuteRuleInput {}
/**
 * @public
 *
 * The output of {@link GetAlarmMuteRuleCommand}.
 */
export interface GetAlarmMuteRuleCommandOutput extends GetAlarmMuteRuleOutput, __MetadataBearer {}

/**
 * <p>Retrieves details for a specific alarm mute rule.</p>
 *          <p>This operation returns complete information about the mute rule, including its configuration, status, targeted alarms, and metadata.</p>
 *          <p>The returned status indicates the current state of the mute rule:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>SCHEDULED</b>: The mute rule is configured and will become active in the future</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ACTIVE</b>: The mute rule is currently muting alarm actions</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>EXPIRED</b>: The mute rule has passed its expiration date and will no longer become active</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To retrieve details for a mute rule, you need the <code>cloudwatch:GetAlarmMuteRule</code> permission on the alarm mute rule resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetAlarmMuteRuleCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetAlarmMuteRuleCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // GetAlarmMuteRuleInput
 *   AlarmMuteRuleName: "STRING_VALUE", // required
 * };
 * const command = new GetAlarmMuteRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetAlarmMuteRuleOutput
 * //   Name: "STRING_VALUE",
 * //   AlarmMuteRuleArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Rule: { // Rule
 * //     Schedule: { // Schedule
 * //       Expression: "STRING_VALUE", // required
 * //       Duration: "STRING_VALUE", // required
 * //       Timezone: "STRING_VALUE",
 * //     },
 * //   },
 * //   MuteTargets: { // MuteTargets
 * //     AlarmNames: [ // MuteTargetAlarmNameList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   StartDate: new Date("TIMESTAMP"),
 * //   ExpireDate: new Date("TIMESTAMP"),
 * //   Status: "SCHEDULED" || "ACTIVE" || "EXPIRED",
 * //   LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //   MuteType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAlarmMuteRuleCommandInput - {@link GetAlarmMuteRuleCommandInput}
 * @returns {@link GetAlarmMuteRuleCommandOutput}
 * @see {@link GetAlarmMuteRuleCommandInput} for command's `input` shape.
 * @see {@link GetAlarmMuteRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class GetAlarmMuteRuleCommand extends $Command
  .classBuilder<
    GetAlarmMuteRuleCommandInput,
    GetAlarmMuteRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "GetAlarmMuteRule", {})
  .n("CloudWatchClient", "GetAlarmMuteRuleCommand")
  .sc(GetAlarmMuteRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAlarmMuteRuleInput;
      output: GetAlarmMuteRuleOutput;
    };
    sdk: {
      input: GetAlarmMuteRuleCommandInput;
      output: GetAlarmMuteRuleCommandOutput;
    };
  };
}
