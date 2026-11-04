// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAlarmMuteRuleInput } from "../models/models_0";
import { DeleteAlarmMuteRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a specific alarm mute rule.
 *
 * When you delete a mute rule, any alarms that are currently being muted by that rule are immediately unmuted. If those alarms are in an ALARM state, their configured actions will trigger.
 *
 * This operation is idempotent. If you delete a mute rule that does not exist, the operation succeeds without returning an error.
 *
 * **Permissions**
 *
 * To delete a mute rule, you need the `cloudwatch:DeleteAlarmMuteRule` permission on the alarm mute rule resource.
 *
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
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class DeleteAlarmMuteRuleCommand extends command<DeleteAlarmMuteRuleCommandInput, DeleteAlarmMuteRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAlarmMuteRule",
  DeleteAlarmMuteRule$
) {
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
