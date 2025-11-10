// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchActionConnectorsRequest, SearchActionConnectorsResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { SearchActionConnectors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchActionConnectorsCommand}.
 */
export interface SearchActionConnectorsCommandInput extends SearchActionConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link SearchActionConnectorsCommand}.
 */
export interface SearchActionConnectorsCommandOutput extends SearchActionConnectorsResponse, __MetadataBearer {}

/**
 * <p>Searches for action connectors in the specified Amazon Web Services account using filters. You can search by connector name, type, or user permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchActionConnectorsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchActionConnectorsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchActionConnectorsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // ActionConnectorSearchFilterList // required
 *     { // ActionConnectorSearchFilter
 *       Name: "ACTION_CONNECTOR_NAME" || "ACTION_CONNECTOR_TYPE" || "QUICKSIGHT_OWNER" || "QUICKSIGHT_VIEWER_OR_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER", // required
 *       Operator: "StringEquals" || "StringLike", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchActionConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // SearchActionConnectorsResponse
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   ActionConnectorSummaries: [ // ActionConnectorSummaryList
 * //     { // ActionConnectorSummary
 * //       Arn: "STRING_VALUE", // required
 * //       ActionConnectorId: "STRING_VALUE", // required
 * //       Type: "GENERIC_HTTP" || "SERVICENOW_NOW_PLATFORM" || "SALESFORCE_CRM" || "MICROSOFT_OUTLOOK" || "PAGERDUTY_ADVANCE" || "JIRA_CLOUD" || "ATLASSIAN_CONFLUENCE" || "AMAZON_S3" || "AMAZON_BEDROCK_AGENT_RUNTIME" || "AMAZON_BEDROCK_RUNTIME" || "AMAZON_BEDROCK_DATA_AUTOMATION_RUNTIME" || "AMAZON_TEXTRACT" || "AMAZON_COMPREHEND" || "AMAZON_COMPREHEND_MEDICAL" || "MICROSOFT_ONEDRIVE" || "MICROSOFT_SHAREPOINT" || "MICROSOFT_TEAMS" || "SAP_BUSINESSPARTNER" || "SAP_PRODUCTMASTERDATA" || "SAP_PHYSICALINVENTORY" || "SAP_BILLOFMATERIALS" || "SAP_MATERIALSTOCK" || "ZENDESK_SUITE" || "SMARTSHEET" || "SLACK" || "ASANA" || "BAMBOO_HR", // required
 * //       Name: "STRING_VALUE", // required
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //       Error: { // ActionConnectorError
 * //         Message: "STRING_VALUE",
 * //         Type: "INTERNAL_FAILURE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchActionConnectorsCommandInput - {@link SearchActionConnectorsCommandInput}
 * @returns {@link SearchActionConnectorsCommandOutput}
 * @see {@link SearchActionConnectorsCommandInput} for command's `input` shape.
 * @see {@link SearchActionConnectorsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class SearchActionConnectorsCommand extends $Command
  .classBuilder<
    SearchActionConnectorsCommandInput,
    SearchActionConnectorsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "SearchActionConnectors", {})
  .n("QuickSightClient", "SearchActionConnectorsCommand")
  .sc(SearchActionConnectors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchActionConnectorsRequest;
      output: SearchActionConnectorsResponse;
    };
    sdk: {
      input: SearchActionConnectorsCommandInput;
      output: SearchActionConnectorsCommandOutput;
    };
  };
}
