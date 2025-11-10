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
import { CreateNotificationRuleRequest, CreateNotificationRuleResult } from "../models/models_0";
import { CreateNotificationRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNotificationRuleCommand}.
 */
export interface CreateNotificationRuleCommandInput extends CreateNotificationRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateNotificationRuleCommand}.
 */
export interface CreateNotificationRuleCommandOutput extends CreateNotificationRuleResult, __MetadataBearer {}

/**
 * <p>Creates a notification rule for a resource. The rule specifies the events you want
 *             notifications about and the targets (such as Amazon Q Developer in chat applications topics or Amazon Q Developer in chat applications clients configured for Slack) where you want to receive
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, CreateNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, CreateNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * // import type { CodestarNotificationsClientConfig } from "@aws-sdk/client-codestar-notifications";
 * const config = {}; // type is CodestarNotificationsClientConfig
 * const client = new CodestarNotificationsClient(config);
 * const input = { // CreateNotificationRuleRequest
 *   Name: "STRING_VALUE", // required
 *   EventTypeIds: [ // EventTypeIds // required
 *     "STRING_VALUE",
 *   ],
 *   Resource: "STRING_VALUE", // required
 *   Targets: [ // Targets // required
 *     { // Target
 *       TargetType: "STRING_VALUE",
 *       TargetAddress: "STRING_VALUE",
 *     },
 *   ],
 *   DetailType: "BASIC" || "FULL", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Status: "ENABLED" || "DISABLED",
 * };
 * const command = new CreateNotificationRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotificationRuleResult
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNotificationRuleCommandInput - {@link CreateNotificationRuleCommandInput}
 * @returns {@link CreateNotificationRuleCommandOutput}
 * @see {@link CreateNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>CodeStar Notifications can't create the notification rule because you do not have sufficient
 *       permissions.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>CodeStar Notifications can't complete the request because the resource is being modified by
 *       another process. Wait a few minutes and try again.</p>
 *
 * @throws {@link ConfigurationException} (client fault)
 *  <p>Some or all of the configuration is incomplete, missing, or not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>One of the CodeStar Notifications limits has been exceeded. Limits apply to
 *             accounts, notification rules, notifications, resources, and targets. For more
 *             information, see Limits.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the same name or ID already exists. Notification rule names must be
 *             unique in your Amazon Web Services account.</p>
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
export class CreateNotificationRuleCommand extends $Command
  .classBuilder<
    CreateNotificationRuleCommandInput,
    CreateNotificationRuleCommandOutput,
    CodestarNotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodestarNotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStarNotifications_20191015", "CreateNotificationRule", {})
  .n("CodestarNotificationsClient", "CreateNotificationRuleCommand")
  .sc(CreateNotificationRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotificationRuleRequest;
      output: CreateNotificationRuleResult;
    };
    sdk: {
      input: CreateNotificationRuleCommandInput;
      output: CreateNotificationRuleCommandOutput;
    };
  };
}
