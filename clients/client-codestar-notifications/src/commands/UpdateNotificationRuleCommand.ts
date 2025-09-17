// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateNotificationRuleRequest,
  UpdateNotificationRuleRequestFilterSensitiveLog,
  UpdateNotificationRuleResult,
} from "../models/models_0";
import { de_UpdateNotificationRuleCommand, se_UpdateNotificationRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotificationRuleCommand}.
 */
export interface UpdateNotificationRuleCommandInput extends UpdateNotificationRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNotificationRuleCommand}.
 */
export interface UpdateNotificationRuleCommandOutput extends UpdateNotificationRuleResult, __MetadataBearer {}

/**
 * <p>Updates a notification rule for a resource. You can change the events that trigger the
 *             notification rule, the status of the rule, and the targets that receive the
 *             notifications.</p>
 *          <note>
 *             <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, UpdateNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, UpdateNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * // import type { CodestarNotificationsClientConfig } from "@aws-sdk/client-codestar-notifications";
 * const config = {}; // type is CodestarNotificationsClientConfig
 * const client = new CodestarNotificationsClient(config);
 * const input = { // UpdateNotificationRuleRequest
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Status: "ENABLED" || "DISABLED",
 *   EventTypeIds: [ // EventTypeIds
 *     "STRING_VALUE",
 *   ],
 *   Targets: [ // Targets
 *     { // Target
 *       TargetType: "STRING_VALUE",
 *       TargetAddress: "STRING_VALUE",
 *     },
 *   ],
 *   DetailType: "BASIC" || "FULL",
 * };
 * const command = new UpdateNotificationRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotificationRuleCommandInput - {@link UpdateNotificationRuleCommandInput}
 * @returns {@link UpdateNotificationRuleCommandOutput}
 * @see {@link UpdateNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link ConfigurationException} (client fault)
 *  <p>Some or all of the configuration is incomplete, missing, or not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>CodeStar Notifications can't find a resource that matches the provided ARN. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link CodestarNotificationsServiceException}
 * <p>Base exception class for all service exceptions from CodestarNotifications service.</p>
 *
 *
 * @public
 */
export class UpdateNotificationRuleCommand extends $Command
  .classBuilder<
    UpdateNotificationRuleCommandInput,
    UpdateNotificationRuleCommandOutput,
    CodestarNotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodestarNotificationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStarNotifications_20191015", "UpdateNotificationRule", {})
  .n("CodestarNotificationsClient", "UpdateNotificationRuleCommand")
  .f(UpdateNotificationRuleRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateNotificationRuleCommand)
  .de(de_UpdateNotificationRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotificationRuleRequest;
      output: {};
    };
    sdk: {
      input: UpdateNotificationRuleCommandInput;
      output: UpdateNotificationRuleCommandOutput;
    };
  };
}
