// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCustomPermissionsRequest, ListCustomPermissionsResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListCustomPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomPermissionsCommand}.
 */
export interface ListCustomPermissionsCommandInput extends ListCustomPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomPermissionsCommand}.
 */
export interface ListCustomPermissionsCommandOutput extends ListCustomPermissionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the custom permissions profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListCustomPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListCustomPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListCustomPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomPermissionsResponse
 * //   Status: Number("int"),
 * //   CustomPermissionsList: [ // CustomPermissionsList
 * //     { // CustomPermissions
 * //       Arn: "STRING_VALUE",
 * //       CustomPermissionsName: "STRING_VALUE",
 * //       Capabilities: { // Capabilities
 * //         ExportToCsv: "DENY",
 * //         ExportToExcel: "DENY",
 * //         ExportToPdf: "DENY",
 * //         PrintReports: "DENY",
 * //         CreateAndUpdateThemes: "DENY",
 * //         AddOrRunAnomalyDetectionForAnalyses: "DENY",
 * //         ShareAnalyses: "DENY",
 * //         CreateAndUpdateDatasets: "DENY",
 * //         ShareDatasets: "DENY",
 * //         SubscribeDashboardEmailReports: "DENY",
 * //         CreateAndUpdateDashboardEmailReports: "DENY",
 * //         ShareDashboards: "DENY",
 * //         CreateAndUpdateThresholdAlerts: "DENY",
 * //         RenameSharedFolders: "DENY",
 * //         CreateSharedFolders: "DENY",
 * //         CreateAndUpdateDataSources: "DENY",
 * //         ShareDataSources: "DENY",
 * //         ViewAccountSPICECapacity: "DENY",
 * //         CreateSPICEDataset: "DENY",
 * //         ExportToPdfInScheduledReports: "DENY",
 * //         ExportToCsvInScheduledReports: "DENY",
 * //         ExportToExcelInScheduledReports: "DENY",
 * //         IncludeContentInScheduledReportsEmail: "DENY",
 * //         Dashboard: "DENY",
 * //         Analysis: "DENY",
 * //         Automate: "DENY",
 * //         Flow: "DENY",
 * //         PublishWithoutApproval: "DENY",
 * //         UseBedrockModels: "DENY",
 * //         PerformFlowUiTask: "DENY",
 * //         UseAgentWebSearch: "DENY",
 * //         KnowledgeBase: "DENY",
 * //         Action: "DENY",
 * //         GenericHTTPAction: "DENY",
 * //         CreateAndUpdateGenericHTTPAction: "DENY",
 * //         ShareGenericHTTPAction: "DENY",
 * //         UseGenericHTTPAction: "DENY",
 * //         AsanaAction: "DENY",
 * //         CreateAndUpdateAsanaAction: "DENY",
 * //         ShareAsanaAction: "DENY",
 * //         UseAsanaAction: "DENY",
 * //         SlackAction: "DENY",
 * //         CreateAndUpdateSlackAction: "DENY",
 * //         ShareSlackAction: "DENY",
 * //         UseSlackAction: "DENY",
 * //         ServiceNowAction: "DENY",
 * //         CreateAndUpdateServiceNowAction: "DENY",
 * //         ShareServiceNowAction: "DENY",
 * //         UseServiceNowAction: "DENY",
 * //         SalesforceAction: "DENY",
 * //         CreateAndUpdateSalesforceAction: "DENY",
 * //         ShareSalesforceAction: "DENY",
 * //         UseSalesforceAction: "DENY",
 * //         MSExchangeAction: "DENY",
 * //         CreateAndUpdateMSExchangeAction: "DENY",
 * //         ShareMSExchangeAction: "DENY",
 * //         UseMSExchangeAction: "DENY",
 * //         PagerDutyAction: "DENY",
 * //         CreateAndUpdatePagerDutyAction: "DENY",
 * //         SharePagerDutyAction: "DENY",
 * //         UsePagerDutyAction: "DENY",
 * //         JiraAction: "DENY",
 * //         CreateAndUpdateJiraAction: "DENY",
 * //         ShareJiraAction: "DENY",
 * //         UseJiraAction: "DENY",
 * //         ConfluenceAction: "DENY",
 * //         CreateAndUpdateConfluenceAction: "DENY",
 * //         ShareConfluenceAction: "DENY",
 * //         UseConfluenceAction: "DENY",
 * //         OneDriveAction: "DENY",
 * //         CreateAndUpdateOneDriveAction: "DENY",
 * //         ShareOneDriveAction: "DENY",
 * //         UseOneDriveAction: "DENY",
 * //         SharePointAction: "DENY",
 * //         CreateAndUpdateSharePointAction: "DENY",
 * //         ShareSharePointAction: "DENY",
 * //         UseSharePointAction: "DENY",
 * //         MSTeamsAction: "DENY",
 * //         CreateAndUpdateMSTeamsAction: "DENY",
 * //         ShareMSTeamsAction: "DENY",
 * //         UseMSTeamsAction: "DENY",
 * //         GoogleCalendarAction: "DENY",
 * //         CreateAndUpdateGoogleCalendarAction: "DENY",
 * //         ShareGoogleCalendarAction: "DENY",
 * //         UseGoogleCalendarAction: "DENY",
 * //         ZendeskAction: "DENY",
 * //         CreateAndUpdateZendeskAction: "DENY",
 * //         ShareZendeskAction: "DENY",
 * //         UseZendeskAction: "DENY",
 * //         SmartsheetAction: "DENY",
 * //         CreateAndUpdateSmartsheetAction: "DENY",
 * //         ShareSmartsheetAction: "DENY",
 * //         UseSmartsheetAction: "DENY",
 * //         SAPBusinessPartnerAction: "DENY",
 * //         CreateAndUpdateSAPBusinessPartnerAction: "DENY",
 * //         ShareSAPBusinessPartnerAction: "DENY",
 * //         UseSAPBusinessPartnerAction: "DENY",
 * //         SAPProductMasterDataAction: "DENY",
 * //         CreateAndUpdateSAPProductMasterDataAction: "DENY",
 * //         ShareSAPProductMasterDataAction: "DENY",
 * //         UseSAPProductMasterDataAction: "DENY",
 * //         SAPPhysicalInventoryAction: "DENY",
 * //         CreateAndUpdateSAPPhysicalInventoryAction: "DENY",
 * //         ShareSAPPhysicalInventoryAction: "DENY",
 * //         UseSAPPhysicalInventoryAction: "DENY",
 * //         SAPBillOfMaterialAction: "DENY",
 * //         CreateAndUpdateSAPBillOfMaterialAction: "DENY",
 * //         ShareSAPBillOfMaterialAction: "DENY",
 * //         UseSAPBillOfMaterialAction: "DENY",
 * //         SAPMaterialStockAction: "DENY",
 * //         CreateAndUpdateSAPMaterialStockAction: "DENY",
 * //         ShareSAPMaterialStockAction: "DENY",
 * //         UseSAPMaterialStockAction: "DENY",
 * //         FactSetAction: "DENY",
 * //         CreateAndUpdateFactSetAction: "DENY",
 * //         ShareFactSetAction: "DENY",
 * //         UseFactSetAction: "DENY",
 * //         AmazonSThreeAction: "DENY",
 * //         CreateAndUpdateAmazonSThreeAction: "DENY",
 * //         ShareAmazonSThreeAction: "DENY",
 * //         UseAmazonSThreeAction: "DENY",
 * //         TextractAction: "DENY",
 * //         CreateAndUpdateTextractAction: "DENY",
 * //         ShareTextractAction: "DENY",
 * //         UseTextractAction: "DENY",
 * //         ComprehendAction: "DENY",
 * //         CreateAndUpdateComprehendAction: "DENY",
 * //         ShareComprehendAction: "DENY",
 * //         UseComprehendAction: "DENY",
 * //         ComprehendMedicalAction: "DENY",
 * //         CreateAndUpdateComprehendMedicalAction: "DENY",
 * //         ShareComprehendMedicalAction: "DENY",
 * //         UseComprehendMedicalAction: "DENY",
 * //         AmazonBedrockARSAction: "DENY",
 * //         CreateAndUpdateAmazonBedrockARSAction: "DENY",
 * //         ShareAmazonBedrockARSAction: "DENY",
 * //         UseAmazonBedrockARSAction: "DENY",
 * //         AmazonBedrockFSAction: "DENY",
 * //         CreateAndUpdateAmazonBedrockFSAction: "DENY",
 * //         ShareAmazonBedrockFSAction: "DENY",
 * //         UseAmazonBedrockFSAction: "DENY",
 * //         AmazonBedrockKRSAction: "DENY",
 * //         CreateAndUpdateAmazonBedrockKRSAction: "DENY",
 * //         ShareAmazonBedrockKRSAction: "DENY",
 * //         UseAmazonBedrockKRSAction: "DENY",
 * //         MCPAction: "DENY",
 * //         CreateAndUpdateMCPAction: "DENY",
 * //         ShareMCPAction: "DENY",
 * //         UseMCPAction: "DENY",
 * //         OpenAPIAction: "DENY",
 * //         CreateAndUpdateOpenAPIAction: "DENY",
 * //         ShareOpenAPIAction: "DENY",
 * //         UseOpenAPIAction: "DENY",
 * //         SandPGMIAction: "DENY",
 * //         CreateAndUpdateSandPGMIAction: "DENY",
 * //         ShareSandPGMIAction: "DENY",
 * //         UseSandPGMIAction: "DENY",
 * //         SandPGlobalEnergyAction: "DENY",
 * //         CreateAndUpdateSandPGlobalEnergyAction: "DENY",
 * //         ShareSandPGlobalEnergyAction: "DENY",
 * //         UseSandPGlobalEnergyAction: "DENY",
 * //         BambooHRAction: "DENY",
 * //         CreateAndUpdateBambooHRAction: "DENY",
 * //         ShareBambooHRAction: "DENY",
 * //         UseBambooHRAction: "DENY",
 * //         BoxAgentAction: "DENY",
 * //         CreateAndUpdateBoxAgentAction: "DENY",
 * //         ShareBoxAgentAction: "DENY",
 * //         UseBoxAgentAction: "DENY",
 * //         CanvaAgentAction: "DENY",
 * //         CreateAndUpdateCanvaAgentAction: "DENY",
 * //         ShareCanvaAgentAction: "DENY",
 * //         UseCanvaAgentAction: "DENY",
 * //         GithubAction: "DENY",
 * //         CreateAndUpdateGithubAction: "DENY",
 * //         ShareGithubAction: "DENY",
 * //         UseGithubAction: "DENY",
 * //         NotionAction: "DENY",
 * //         CreateAndUpdateNotionAction: "DENY",
 * //         ShareNotionAction: "DENY",
 * //         UseNotionAction: "DENY",
 * //         LinearAction: "DENY",
 * //         CreateAndUpdateLinearAction: "DENY",
 * //         ShareLinearAction: "DENY",
 * //         UseLinearAction: "DENY",
 * //         HuggingFaceAction: "DENY",
 * //         CreateAndUpdateHuggingFaceAction: "DENY",
 * //         ShareHuggingFaceAction: "DENY",
 * //         UseHuggingFaceAction: "DENY",
 * //         MondayAction: "DENY",
 * //         CreateAndUpdateMondayAction: "DENY",
 * //         ShareMondayAction: "DENY",
 * //         UseMondayAction: "DENY",
 * //         HubspotAction: "DENY",
 * //         CreateAndUpdateHubspotAction: "DENY",
 * //         ShareHubspotAction: "DENY",
 * //         UseHubspotAction: "DENY",
 * //         IntercomAction: "DENY",
 * //         CreateAndUpdateIntercomAction: "DENY",
 * //         ShareIntercomAction: "DENY",
 * //         UseIntercomAction: "DENY",
 * //         NewRelicAction: "DENY",
 * //         CreateAndUpdateNewRelicAction: "DENY",
 * //         ShareNewRelicAction: "DENY",
 * //         UseNewRelicAction: "DENY",
 * //         Space: "DENY",
 * //         ChatAgent: "DENY",
 * //         CreateChatAgents: "DENY",
 * //         Research: "DENY",
 * //         SelfUpgradeUserRole: "DENY",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomPermissionsCommandInput - {@link ListCustomPermissionsCommandInput}
 * @returns {@link ListCustomPermissionsCommandOutput}
 * @see {@link ListCustomPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListCustomPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
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
export class ListCustomPermissionsCommand extends $Command
  .classBuilder<
    ListCustomPermissionsCommandInput,
    ListCustomPermissionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListCustomPermissions", {})
  .n("QuickSightClient", "ListCustomPermissionsCommand")
  .sc(ListCustomPermissions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomPermissionsRequest;
      output: ListCustomPermissionsResponse;
    };
    sdk: {
      input: ListCustomPermissionsCommandInput;
      output: ListCustomPermissionsCommandOutput;
    };
  };
}
