// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNotificationRuleRequest, DeleteNotificationRuleResult } from "../models/models_0";
import { DeleteNotificationRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNotificationRuleCommand}.
 */
export interface DeleteNotificationRuleCommandInput extends DeleteNotificationRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNotificationRuleCommand}.
 */
export interface DeleteNotificationRuleCommandOutput extends DeleteNotificationRuleResult, __MetadataBearer {}

/**
 * <p>Deletes a notification rule for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DeleteNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DeleteNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * // import type { CodestarNotificationsClientConfig } from "@aws-sdk/client-codestar-notifications";
 * const config = {}; // type is CodestarNotificationsClientConfig
 * const client = new CodestarNotificationsClient(config);
 * const input = { // DeleteNotificationRuleRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotificationRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNotificationRuleResult
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNotificationRuleCommandInput - {@link DeleteNotificationRuleCommandInput}
 * @returns {@link DeleteNotificationRuleCommandOutput}
 * @see {@link DeleteNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>CodeStar Notifications can't complete the request because the resource is being modified by
 *       another process. Wait a few minutes and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>One of the CodeStar Notifications limits has been exceeded. Limits apply to
 *             accounts, notification rules, notifications, resources, and targets. For more
 *             information, see Limits.</p>
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
export class DeleteNotificationRuleCommand extends $Command
  .classBuilder<
    DeleteNotificationRuleCommandInput,
    DeleteNotificationRuleCommandOutput,
    CodestarNotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodestarNotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStarNotifications_20191015", "DeleteNotificationRule", {})
  .n("CodestarNotificationsClient", "DeleteNotificationRuleCommand")
  .sc(DeleteNotificationRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotificationRuleRequest;
      output: DeleteNotificationRuleResult;
    };
    sdk: {
      input: DeleteNotificationRuleCommandInput;
      output: DeleteNotificationRuleCommandOutput;
    };
  };
}
