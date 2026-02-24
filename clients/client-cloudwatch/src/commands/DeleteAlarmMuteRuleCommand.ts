// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAlarmMuteRuleInput } from "../models/models_0";
import { DeleteAlarmMuteRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAlarmMuteRuleCommand}.
 */
export interface DeleteAlarmMuteRuleCommandInput extends DeleteAlarmMuteRuleInput {}
/**
 * @public
 *
 * The output of {@link DeleteAlarmMuteRuleCommand}.
 */
export interface DeleteAlarmMuteRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a specific alarm mute rule.</p>
 *          <p>When you delete a mute rule, any alarms that are currently being muted by that rule are immediately unmuted. If those alarms are in an ALARM state, their configured actions will trigger.</p>
 *          <p>This operation is idempotent. If you delete a mute rule that does not exist, the operation succeeds without returning an error.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To delete a mute rule, you need the <code>cloudwatch:DeleteAlarmMuteRule</code> permission on the alarm mute rule resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteAlarmMuteRuleCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteAlarmMuteRuleCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DeleteAlarmMuteRuleInput
 *   AlarmMuteRuleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAlarmMuteRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAlarmMuteRuleCommandInput - {@link DeleteAlarmMuteRuleCommandInput}
 * @returns {@link DeleteAlarmMuteRuleCommandOutput}
 * @see {@link DeleteAlarmMuteRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteAlarmMuteRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DeleteAlarmMuteRuleCommand extends $Command
  .classBuilder<
    DeleteAlarmMuteRuleCommandInput,
    DeleteAlarmMuteRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "DeleteAlarmMuteRule", {})
  .n("CloudWatchClient", "DeleteAlarmMuteRuleCommand")
  .sc(DeleteAlarmMuteRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAlarmMuteRuleInput;
      output: {};
    };
    sdk: {
      input: DeleteAlarmMuteRuleCommandInput;
      output: DeleteAlarmMuteRuleCommandOutput;
    };
  };
}
