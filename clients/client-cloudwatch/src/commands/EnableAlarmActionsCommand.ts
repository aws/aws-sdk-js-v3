// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableAlarmActionsInput } from "../models/models_0";
import { de_EnableAlarmActionsCommand, se_EnableAlarmActionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableAlarmActionsCommand}.
 */
export interface EnableAlarmActionsCommandInput extends EnableAlarmActionsInput {}
/**
 * @public
 *
 * The output of {@link EnableAlarmActionsCommand}.
 */
export interface EnableAlarmActionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the actions for the specified alarms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, EnableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, EnableAlarmActionsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // EnableAlarmActionsInput
 *   AlarmNames: [ // AlarmNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new EnableAlarmActionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableAlarmActionsCommandInput - {@link EnableAlarmActionsCommandInput}
 * @returns {@link EnableAlarmActionsCommandOutput}
 * @see {@link EnableAlarmActionsCommandInput} for command's `input` shape.
 * @see {@link EnableAlarmActionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 * @public
 */
export class EnableAlarmActionsCommand extends $Command
  .classBuilder<
    EnableAlarmActionsCommandInput,
    EnableAlarmActionsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "EnableAlarmActions", {})
  .n("CloudWatchClient", "EnableAlarmActionsCommand")
  .f(void 0, void 0)
  .ser(se_EnableAlarmActionsCommand)
  .de(de_EnableAlarmActionsCommand)
  .build() {}
