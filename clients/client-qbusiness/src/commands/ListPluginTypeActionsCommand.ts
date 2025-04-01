// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPluginTypeActionsRequest, ListPluginTypeActionsResponse } from "../models/models_0";
import { de_ListPluginTypeActionsCommand, se_ListPluginTypeActionsCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPluginTypeActionsCommand}.
 */
export interface ListPluginTypeActionsCommandInput extends ListPluginTypeActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPluginTypeActionsCommand}.
 */
export interface ListPluginTypeActionsCommandOutput extends ListPluginTypeActionsResponse, __MetadataBearer {}

/**
 * <p>Lists configured Amazon Q Business actions for any plugin type—both
 *             built-in and custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListPluginTypeActionsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListPluginTypeActionsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // ListPluginTypeActionsRequest
 *   pluginType: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM" || "QUICKSIGHT" || "SERVICENOW_NOW_PLATFORM" || "JIRA_CLOUD" || "SALESFORCE_CRM" || "ZENDESK_SUITE" || "ATLASSIAN_CONFLUENCE" || "GOOGLE_CALENDAR" || "MICROSOFT_TEAMS" || "MICROSOFT_EXCHANGE" || "PAGERDUTY_ADVANCE" || "SMARTSHEET" || "ASANA", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPluginTypeActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPluginTypeActionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // Actions
 * //     { // ActionSummary
 * //       actionIdentifier: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       instructionExample: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPluginTypeActionsCommandInput - {@link ListPluginTypeActionsCommandInput}
 * @returns {@link ListPluginTypeActionsCommandOutput}
 * @see {@link ListPluginTypeActionsCommandInput} for command's `input` shape.
 * @see {@link ListPluginTypeActionsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class ListPluginTypeActionsCommand extends $Command
  .classBuilder<
    ListPluginTypeActionsCommandInput,
    ListPluginTypeActionsCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "ListPluginTypeActions", {})
  .n("QBusinessClient", "ListPluginTypeActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListPluginTypeActionsCommand)
  .de(de_ListPluginTypeActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPluginTypeActionsRequest;
      output: ListPluginTypeActionsResponse;
    };
    sdk: {
      input: ListPluginTypeActionsCommandInput;
      output: ListPluginTypeActionsCommandOutput;
    };
  };
}
