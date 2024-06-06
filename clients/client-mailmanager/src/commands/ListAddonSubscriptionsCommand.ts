// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { ListAddonSubscriptionsRequest, ListAddonSubscriptionsResponse } from "../models/models_0";
import { de_ListAddonSubscriptionsCommand, se_ListAddonSubscriptionsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAddonSubscriptionsCommand}.
 */
export interface ListAddonSubscriptionsCommandInput extends ListAddonSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAddonSubscriptionsCommand}.
 */
export interface ListAddonSubscriptionsCommandOutput extends ListAddonSubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Lists all Add On subscriptions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListAddonSubscriptionsCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListAddonSubscriptionsCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // ListAddonSubscriptionsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListAddonSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAddonSubscriptionsResponse
 * //   AddonSubscriptions: [ // AddonSubscriptions
 * //     { // AddonSubscription
 * //       AddonSubscriptionId: "STRING_VALUE",
 * //       AddonName: "STRING_VALUE",
 * //       AddonSubscriptionArn: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAddonSubscriptionsCommandInput - {@link ListAddonSubscriptionsCommandInput}
 * @returns {@link ListAddonSubscriptionsCommandOutput}
 * @see {@link ListAddonSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListAddonSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class ListAddonSubscriptionsCommand extends $Command
  .classBuilder<
    ListAddonSubscriptionsCommandInput,
    ListAddonSubscriptionsCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "ListAddonSubscriptions", {})
  .n("MailManagerClient", "ListAddonSubscriptionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAddonSubscriptionsCommand)
  .de(de_ListAddonSubscriptionsCommand)
  .build() {}
