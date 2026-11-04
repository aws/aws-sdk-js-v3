// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPluginsRequest, ListPluginsResponse } from "../models/models_0";
import { ListPlugins$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists configured Amazon Q Business plugins.
 *
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
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class ListPluginsCommand extends command<ListPluginsCommandInput, ListPluginsCommandOutput>(
  _ep0,
  _mw0,
  "ListPlugins",
  ListPlugins$
) {
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
