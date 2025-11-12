// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableAlarmActionsInput } from "../models/models_0";
import { DisableAlarmActions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableAlarmActionsCommand}.
 */
export interface DisableAlarmActionsCommandInput extends DisableAlarmActionsInput {}
/**
 * @public
 *
 * The output of {@link DisableAlarmActionsCommand}.
 */
export interface DisableAlarmActionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables the actions for the specified alarms. When an alarm's actions are
 *             disabled, the alarm actions do not execute when the alarm state changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DisableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DisableAlarmActionsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DisableAlarmActionsInput
 *   AlarmNames: [ // AlarmNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisableAlarmActionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableAlarmActionsCommandInput - {@link DisableAlarmActionsCommandInput}
 * @returns {@link DisableAlarmActionsCommandOutput}
 * @see {@link DisableAlarmActionsCommandInput} for command's `input` shape.
 * @see {@link DisableAlarmActionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DisableAlarmActionsCommand extends $Command
  .classBuilder<
    DisableAlarmActionsCommandInput,
    DisableAlarmActionsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "DisableAlarmActions", {})
  .n("CloudWatchClient", "DisableAlarmActionsCommand")
  .sc(DisableAlarmActions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableAlarmActionsInput;
      output: {};
    };
    sdk: {
      input: DisableAlarmActionsCommandInput;
      output: DisableAlarmActionsCommandOutput;
    };
  };
}
