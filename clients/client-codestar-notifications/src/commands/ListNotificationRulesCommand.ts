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
import { ListNotificationRulesRequest, ListNotificationRulesResult } from "../models/models_0";
import { de_ListNotificationRulesCommand, se_ListNotificationRulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotificationRulesCommand}.
 */
export interface ListNotificationRulesCommandInput extends ListNotificationRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListNotificationRulesCommand}.
 */
export interface ListNotificationRulesCommandOutput extends ListNotificationRulesResult, __MetadataBearer {}

/**
 * <p>Returns a list of the notification rules for an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListNotificationRulesCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListNotificationRulesCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * // import type { CodestarNotificationsClientConfig } from "@aws-sdk/client-codestar-notifications";
 * const config = {}; // type is CodestarNotificationsClientConfig
 * const client = new CodestarNotificationsClient(config);
 * const input = { // ListNotificationRulesRequest
 *   Filters: [ // ListNotificationRulesFilters
 *     { // ListNotificationRulesFilter
 *       Name: "EVENT_TYPE_ID" || "CREATED_BY" || "RESOURCE" || "TARGET_ADDRESS", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListNotificationRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationRulesResult
 * //   NextToken: "STRING_VALUE",
 * //   NotificationRules: [ // NotificationRuleBatch
 * //     { // NotificationRuleSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNotificationRulesCommandInput - {@link ListNotificationRulesCommandInput}
 * @returns {@link ListNotificationRulesCommandOutput}
 * @see {@link ListNotificationRulesCommandInput} for command's `input` shape.
 * @see {@link ListNotificationRulesCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The value for the enumeration token used in the request to return the next batch of the results is not valid. </p>
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
export class ListNotificationRulesCommand extends $Command
  .classBuilder<
    ListNotificationRulesCommandInput,
    ListNotificationRulesCommandOutput,
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
  .s("CodeStarNotifications_20191015", "ListNotificationRules", {})
  .n("CodestarNotificationsClient", "ListNotificationRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListNotificationRulesCommand)
  .de(de_ListNotificationRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotificationRulesRequest;
      output: ListNotificationRulesResult;
    };
    sdk: {
      input: ListNotificationRulesCommandInput;
      output: ListNotificationRulesCommandOutput;
    };
  };
}
