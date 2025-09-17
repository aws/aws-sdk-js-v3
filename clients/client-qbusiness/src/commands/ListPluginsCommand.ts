// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPluginsRequest, ListPluginsResponse } from "../models/models_0";
import { de_ListPluginsCommand, se_ListPluginsCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPluginsCommand}.
 */
export interface ListPluginsCommandInput extends ListPluginsRequest {}
/**
 * @public
 *
 * The output of {@link ListPluginsCommand}.
 */
export interface ListPluginsCommandOutput extends ListPluginsResponse, __MetadataBearer {}

/**
 * <p>Lists configured Amazon Q Business plugins.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListPluginsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListPluginsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListPluginsRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPluginsCommand(input);
 * const response = await client.send(command);
 * // { // ListPluginsResponse
 * //   nextToken: "STRING_VALUE",
 * //   plugins: [ // Plugins
 * //     { // Plugin
 * //       pluginId: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       type: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM" || "QUICKSIGHT" || "SERVICENOW_NOW_PLATFORM" || "JIRA_CLOUD" || "SALESFORCE_CRM" || "ZENDESK_SUITE" || "ATLASSIAN_CONFLUENCE" || "GOOGLE_CALENDAR" || "MICROSOFT_TEAMS" || "MICROSOFT_EXCHANGE" || "PAGERDUTY_ADVANCE" || "SMARTSHEET" || "ASANA",
 * //       serverUrl: "STRING_VALUE",
 * //       state: "ENABLED" || "DISABLED",
 * //       buildStatus: "READY" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPluginsCommandInput - {@link ListPluginsCommandInput}
 * @returns {@link ListPluginsCommandOutput}
 * @see {@link ListPluginsCommandInput} for command's `input` shape.
 * @see {@link ListPluginsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class ListPluginsCommand extends $Command
  .classBuilder<
    ListPluginsCommandInput,
    ListPluginsCommandOutput,
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
  .s("ExpertQ", "ListPlugins", {})
  .n("QBusinessClient", "ListPluginsCommand")
  .f(void 0, void 0)
  .ser(se_ListPluginsCommand)
  .de(de_ListPluginsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPluginsRequest;
      output: ListPluginsResponse;
    };
    sdk: {
      input: ListPluginsCommandInput;
      output: ListPluginsCommandOutput;
    };
  };
}
