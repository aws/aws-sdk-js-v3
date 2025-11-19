// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPluginTypeMetadataRequest, ListPluginTypeMetadataResponse } from "../models/models_0";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { ListPluginTypeMetadata } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPluginTypeMetadataCommand}.
 */
export interface ListPluginTypeMetadataCommandInput extends ListPluginTypeMetadataRequest {}
/**
 * @public
 *
 * The output of {@link ListPluginTypeMetadataCommand}.
 */
export interface ListPluginTypeMetadataCommandOutput extends ListPluginTypeMetadataResponse, __MetadataBearer {}

/**
 * <p>Lists metadata for all Amazon Q Business plugin types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListPluginTypeMetadataCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListPluginTypeMetadataCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListPluginTypeMetadataRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPluginTypeMetadataCommand(input);
 * const response = await client.send(command);
 * // { // ListPluginTypeMetadataResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ListPluginTypeMetadataSummaries
 * //     { // PluginTypeMetadataSummary
 * //       type: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM" || "QUICKSIGHT" || "SERVICENOW_NOW_PLATFORM" || "JIRA_CLOUD" || "SALESFORCE_CRM" || "ZENDESK_SUITE" || "ATLASSIAN_CONFLUENCE" || "GOOGLE_CALENDAR" || "MICROSOFT_TEAMS" || "MICROSOFT_EXCHANGE" || "PAGERDUTY_ADVANCE" || "SMARTSHEET" || "ASANA",
 * //       category: "Customer relationship management (CRM)" || "Project management" || "Communication" || "Productivity" || "Ticketing and incident management",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPluginTypeMetadataCommandInput - {@link ListPluginTypeMetadataCommandInput}
 * @returns {@link ListPluginTypeMetadataCommandOutput}
 * @see {@link ListPluginTypeMetadataCommandInput} for command's `input` shape.
 * @see {@link ListPluginTypeMetadataCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
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
export class ListPluginTypeMetadataCommand extends $Command
  .classBuilder<
    ListPluginTypeMetadataCommandInput,
    ListPluginTypeMetadataCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "ListPluginTypeMetadata", {})
  .n("QBusinessClient", "ListPluginTypeMetadataCommand")
  .sc(ListPluginTypeMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPluginTypeMetadataRequest;
      output: ListPluginTypeMetadataResponse;
    };
    sdk: {
      input: ListPluginTypeMetadataCommandInput;
      output: ListPluginTypeMetadataCommandOutput;
    };
  };
}
