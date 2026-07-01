// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNotificationRulesRequest, ListNotificationRulesResult } from "../models/models_0";
import { ListNotificationRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class ListNotificationRulesCommand extends command<ListNotificationRulesCommandInput, ListNotificationRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListNotificationRules",
  ListNotificationRules$
) {
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
