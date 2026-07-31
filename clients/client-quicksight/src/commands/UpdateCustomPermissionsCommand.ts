// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCustomPermissionsRequest, UpdateCustomPermissionsResponse } from "../models/models_5";
import { UpdateCustomPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCustomPermissionsCommand}.
 */
export interface UpdateCustomPermissionsCommandInput extends UpdateCustomPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomPermissionsCommand}.
 */
export interface UpdateCustomPermissionsCommandOutput extends UpdateCustomPermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates a custom permissions profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateCustomPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateCustomPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateCustomPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   CustomPermissionsName: "STRING_VALUE", // required
 *   Capabilities: { // Capabilities
 *     ExportToCsv: "DENY" || "ALLOW",
 *     ExportToExcel: "DENY" || "ALLOW",
 *     ExportToPdf: "DENY" || "ALLOW",
 *     PrintReports: "DENY" || "ALLOW",
 *     CreateAndUpdateThemes: "DENY" || "ALLOW",
 *     AddOrRunAnomalyDetectionForAnalyses: "DENY" || "ALLOW",
 *     ShareAnalyses: "DENY" || "ALLOW",
 *     CreateAndUpdateDatasets: "DENY" || "ALLOW",
 *     ShareDatasets: "DENY" || "ALLOW",
 *     SubscribeDashboardEmailReports: "DENY" || "ALLOW",
 *     CreateAndUpdateDashboardEmailReports: "DENY" || "ALLOW",
 *     ShareDashboards: "DENY" || "ALLOW",
 *     CreateAndUpdateThresholdAlerts: "DENY" || "ALLOW",
 *     RenameSharedFolders: "DENY" || "ALLOW",
 *     CreateSharedFolders: "DENY" || "ALLOW",
 *     CreateAndUpdateDataSources: "DENY" || "ALLOW",
 *     ShareDataSources: "DENY" || "ALLOW",
 *     ViewAccountSPICECapacity: "DENY" || "ALLOW",
 *     CreateSPICEDataset: "DENY" || "ALLOW",
 *     ExportToPdfInScheduledReports: "DENY" || "ALLOW",
 *     ExportToCsvInScheduledReports: "DENY" || "ALLOW",
 *     ExportToExcelInScheduledReports: "DENY" || "ALLOW",
 *     IncludeContentInScheduledReportsEmail: "DENY" || "ALLOW",
 *     Dashboard: "DENY" || "ALLOW",
 *     Analysis: "DENY" || "ALLOW",
 *     Automate: "DENY" || "ALLOW",
 *     Flow: "DENY" || "ALLOW",
 *     Apps: "DENY" || "ALLOW",
 *     CreateAndUpdateApps: "DENY" || "ALLOW",
 *     ShareApps: "DENY" || "ALLOW",
 *     InvokeAppsAIInference: "DENY" || "ALLOW",
 *     AccessAppsNativeDataStore: "DENY" || "ALLOW",
 *     PublishWithoutApproval: "DENY" || "ALLOW",
 *     UseBedrockModels: "DENY" || "ALLOW",
 *     PerformFlowUiTask: "DENY" || "ALLOW",
 *     ApproveFlowShareRequests: "DENY" || "ALLOW",
 *     UseAgentWebSearch: "DENY" || "ALLOW",
 *     KnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateKnowledgeBases: "DENY" || "ALLOW",
 *     ShareKnowledgeBases: "DENY" || "ALLOW",
 *     SharePointKnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateSharePointKnowledgeBase: "DENY" || "ALLOW",
 *     ShareSharePointKnowledgeBase: "DENY" || "ALLOW",
 *     UseSharePointKnowledgeBase: "DENY" || "ALLOW",
 *     GoogleDriveKnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateGoogleDriveKnowledgeBase: "DENY" || "ALLOW",
 *     ShareGoogleDriveKnowledgeBase: "DENY" || "ALLOW",
 *     UseGoogleDriveKnowledgeBase: "DENY" || "ALLOW",
 *     WebCrawlerKnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateWebCrawlerKnowledgeBase: "DENY" || "ALLOW",
 *     ShareWebCrawlerKnowledgeBase: "DENY" || "ALLOW",
 *     UseWebCrawlerKnowledgeBase: "DENY" || "ALLOW",
 *     S3KnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateS3KnowledgeBase: "DENY" || "ALLOW",
 *     ShareS3KnowledgeBase: "DENY" || "ALLOW",
 *     UseS3KnowledgeBase: "DENY" || "ALLOW",
 *     ConfluenceKnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateConfluenceKnowledgeBase: "DENY" || "ALLOW",
 *     ShareConfluenceKnowledgeBase: "DENY" || "ALLOW",
 *     UseConfluenceKnowledgeBase: "DENY" || "ALLOW",
 *     OneDriveKnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateOneDriveKnowledgeBase: "DENY" || "ALLOW",
 *     ShareOneDriveKnowledgeBase: "DENY" || "ALLOW",
 *     UseOneDriveKnowledgeBase: "DENY" || "ALLOW",
 *     QBusinessKnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateQBusinessKnowledgeBase: "DENY" || "ALLOW",
 *     ShareQBusinessKnowledgeBase: "DENY" || "ALLOW",
 *     UseQBusinessKnowledgeBase: "DENY" || "ALLOW",
 *     BedrockManagedKnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateBedrockManagedKnowledgeBase: "DENY" || "ALLOW",
 *     ShareBedrockManagedKnowledgeBase: "DENY" || "ALLOW",
 *     UseBedrockManagedKnowledgeBase: "DENY" || "ALLOW",
 *     BoxKnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateBoxKnowledgeBase: "DENY" || "ALLOW",
 *     ShareBoxKnowledgeBase: "DENY" || "ALLOW",
 *     UseBoxKnowledgeBase: "DENY" || "ALLOW",
 *     IDCKnowledgeBase: "DENY" || "ALLOW",
 *     CreateAndUpdateIDCKnowledgeBase: "DENY" || "ALLOW",
 *     ShareIDCKnowledgeBase: "DENY" || "ALLOW",
 *     UseIDCKnowledgeBase: "DENY" || "ALLOW",
 *     Action: "DENY" || "ALLOW",
 *     GenericHTTPAction: "DENY" || "ALLOW",
 *     CreateAndUpdateGenericHTTPAction: "DENY" || "ALLOW",
 *     ShareGenericHTTPAction: "DENY" || "ALLOW",
 *     UseGenericHTTPAction: "DENY" || "ALLOW",
 *     AsanaAction: "DENY" || "ALLOW",
 *     CreateAndUpdateAsanaAction: "DENY" || "ALLOW",
 *     ShareAsanaAction: "DENY" || "ALLOW",
 *     UseAsanaAction: "DENY" || "ALLOW",
 *     SlackAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSlackAction: "DENY" || "ALLOW",
 *     ShareSlackAction: "DENY" || "ALLOW",
 *     UseSlackAction: "DENY" || "ALLOW",
 *     ServiceNowAction: "DENY" || "ALLOW",
 *     CreateAndUpdateServiceNowAction: "DENY" || "ALLOW",
 *     ShareServiceNowAction: "DENY" || "ALLOW",
 *     UseServiceNowAction: "DENY" || "ALLOW",
 *     SalesforceAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSalesforceAction: "DENY" || "ALLOW",
 *     ShareSalesforceAction: "DENY" || "ALLOW",
 *     UseSalesforceAction: "DENY" || "ALLOW",
 *     MSExchangeAction: "DENY" || "ALLOW",
 *     CreateAndUpdateMSExchangeAction: "DENY" || "ALLOW",
 *     ShareMSExchangeAction: "DENY" || "ALLOW",
 *     UseMSExchangeAction: "DENY" || "ALLOW",
 *     PagerDutyAction: "DENY" || "ALLOW",
 *     CreateAndUpdatePagerDutyAction: "DENY" || "ALLOW",
 *     SharePagerDutyAction: "DENY" || "ALLOW",
 *     UsePagerDutyAction: "DENY" || "ALLOW",
 *     JiraAction: "DENY" || "ALLOW",
 *     CreateAndUpdateJiraAction: "DENY" || "ALLOW",
 *     ShareJiraAction: "DENY" || "ALLOW",
 *     UseJiraAction: "DENY" || "ALLOW",
 *     ConfluenceAction: "DENY" || "ALLOW",
 *     CreateAndUpdateConfluenceAction: "DENY" || "ALLOW",
 *     ShareConfluenceAction: "DENY" || "ALLOW",
 *     UseConfluenceAction: "DENY" || "ALLOW",
 *     OneDriveAction: "DENY" || "ALLOW",
 *     CreateAndUpdateOneDriveAction: "DENY" || "ALLOW",
 *     ShareOneDriveAction: "DENY" || "ALLOW",
 *     UseOneDriveAction: "DENY" || "ALLOW",
 *     SharePointAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSharePointAction: "DENY" || "ALLOW",
 *     ShareSharePointAction: "DENY" || "ALLOW",
 *     UseSharePointAction: "DENY" || "ALLOW",
 *     MSTeamsAction: "DENY" || "ALLOW",
 *     CreateAndUpdateMSTeamsAction: "DENY" || "ALLOW",
 *     ShareMSTeamsAction: "DENY" || "ALLOW",
 *     UseMSTeamsAction: "DENY" || "ALLOW",
 *     GoogleCalendarAction: "DENY" || "ALLOW",
 *     CreateAndUpdateGoogleCalendarAction: "DENY" || "ALLOW",
 *     ShareGoogleCalendarAction: "DENY" || "ALLOW",
 *     UseGoogleCalendarAction: "DENY" || "ALLOW",
 *     ZendeskAction: "DENY" || "ALLOW",
 *     CreateAndUpdateZendeskAction: "DENY" || "ALLOW",
 *     ShareZendeskAction: "DENY" || "ALLOW",
 *     UseZendeskAction: "DENY" || "ALLOW",
 *     SmartsheetAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSmartsheetAction: "DENY" || "ALLOW",
 *     ShareSmartsheetAction: "DENY" || "ALLOW",
 *     UseSmartsheetAction: "DENY" || "ALLOW",
 *     SAPBusinessPartnerAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSAPBusinessPartnerAction: "DENY" || "ALLOW",
 *     ShareSAPBusinessPartnerAction: "DENY" || "ALLOW",
 *     UseSAPBusinessPartnerAction: "DENY" || "ALLOW",
 *     SAPProductMasterDataAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSAPProductMasterDataAction: "DENY" || "ALLOW",
 *     ShareSAPProductMasterDataAction: "DENY" || "ALLOW",
 *     UseSAPProductMasterDataAction: "DENY" || "ALLOW",
 *     SAPPhysicalInventoryAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSAPPhysicalInventoryAction: "DENY" || "ALLOW",
 *     ShareSAPPhysicalInventoryAction: "DENY" || "ALLOW",
 *     UseSAPPhysicalInventoryAction: "DENY" || "ALLOW",
 *     SAPBillOfMaterialAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSAPBillOfMaterialAction: "DENY" || "ALLOW",
 *     ShareSAPBillOfMaterialAction: "DENY" || "ALLOW",
 *     UseSAPBillOfMaterialAction: "DENY" || "ALLOW",
 *     SAPMaterialStockAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSAPMaterialStockAction: "DENY" || "ALLOW",
 *     ShareSAPMaterialStockAction: "DENY" || "ALLOW",
 *     UseSAPMaterialStockAction: "DENY" || "ALLOW",
 *     FactSetAction: "DENY" || "ALLOW",
 *     CreateAndUpdateFactSetAction: "DENY" || "ALLOW",
 *     ShareFactSetAction: "DENY" || "ALLOW",
 *     UseFactSetAction: "DENY" || "ALLOW",
 *     AmazonSThreeAction: "DENY" || "ALLOW",
 *     CreateAndUpdateAmazonSThreeAction: "DENY" || "ALLOW",
 *     ShareAmazonSThreeAction: "DENY" || "ALLOW",
 *     UseAmazonSThreeAction: "DENY" || "ALLOW",
 *     TextractAction: "DENY" || "ALLOW",
 *     CreateAndUpdateTextractAction: "DENY" || "ALLOW",
 *     ShareTextractAction: "DENY" || "ALLOW",
 *     UseTextractAction: "DENY" || "ALLOW",
 *     ComprehendAction: "DENY" || "ALLOW",
 *     CreateAndUpdateComprehendAction: "DENY" || "ALLOW",
 *     ShareComprehendAction: "DENY" || "ALLOW",
 *     UseComprehendAction: "DENY" || "ALLOW",
 *     ComprehendMedicalAction: "DENY" || "ALLOW",
 *     CreateAndUpdateComprehendMedicalAction: "DENY" || "ALLOW",
 *     ShareComprehendMedicalAction: "DENY" || "ALLOW",
 *     UseComprehendMedicalAction: "DENY" || "ALLOW",
 *     AmazonBedrockARSAction: "DENY" || "ALLOW",
 *     CreateAndUpdateAmazonBedrockARSAction: "DENY" || "ALLOW",
 *     ShareAmazonBedrockARSAction: "DENY" || "ALLOW",
 *     UseAmazonBedrockARSAction: "DENY" || "ALLOW",
 *     AmazonBedrockFSAction: "DENY" || "ALLOW",
 *     CreateAndUpdateAmazonBedrockFSAction: "DENY" || "ALLOW",
 *     ShareAmazonBedrockFSAction: "DENY" || "ALLOW",
 *     UseAmazonBedrockFSAction: "DENY" || "ALLOW",
 *     AmazonBedrockKRSAction: "DENY" || "ALLOW",
 *     CreateAndUpdateAmazonBedrockKRSAction: "DENY" || "ALLOW",
 *     ShareAmazonBedrockKRSAction: "DENY" || "ALLOW",
 *     UseAmazonBedrockKRSAction: "DENY" || "ALLOW",
 *     MCPAction: "DENY" || "ALLOW",
 *     CreateAndUpdateMCPAction: "DENY" || "ALLOW",
 *     ShareMCPAction: "DENY" || "ALLOW",
 *     UseMCPAction: "DENY" || "ALLOW",
 *     OpenAPIAction: "DENY" || "ALLOW",
 *     CreateAndUpdateOpenAPIAction: "DENY" || "ALLOW",
 *     ShareOpenAPIAction: "DENY" || "ALLOW",
 *     UseOpenAPIAction: "DENY" || "ALLOW",
 *     SandPGMIAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSandPGMIAction: "DENY" || "ALLOW",
 *     ShareSandPGMIAction: "DENY" || "ALLOW",
 *     UseSandPGMIAction: "DENY" || "ALLOW",
 *     SandPGlobalEnergyAction: "DENY" || "ALLOW",
 *     CreateAndUpdateSandPGlobalEnergyAction: "DENY" || "ALLOW",
 *     ShareSandPGlobalEnergyAction: "DENY" || "ALLOW",
 *     UseSandPGlobalEnergyAction: "DENY" || "ALLOW",
 *     BambooHRAction: "DENY" || "ALLOW",
 *     CreateAndUpdateBambooHRAction: "DENY" || "ALLOW",
 *     ShareBambooHRAction: "DENY" || "ALLOW",
 *     UseBambooHRAction: "DENY" || "ALLOW",
 *     BoxAgentAction: "DENY" || "ALLOW",
 *     CreateAndUpdateBoxAgentAction: "DENY" || "ALLOW",
 *     ShareBoxAgentAction: "DENY" || "ALLOW",
 *     UseBoxAgentAction: "DENY" || "ALLOW",
 *     CanvaAgentAction: "DENY" || "ALLOW",
 *     CreateAndUpdateCanvaAgentAction: "DENY" || "ALLOW",
 *     ShareCanvaAgentAction: "DENY" || "ALLOW",
 *     UseCanvaAgentAction: "DENY" || "ALLOW",
 *     GithubAction: "DENY" || "ALLOW",
 *     CreateAndUpdateGithubAction: "DENY" || "ALLOW",
 *     ShareGithubAction: "DENY" || "ALLOW",
 *     UseGithubAction: "DENY" || "ALLOW",
 *     NotionAction: "DENY" || "ALLOW",
 *     CreateAndUpdateNotionAction: "DENY" || "ALLOW",
 *     ShareNotionAction: "DENY" || "ALLOW",
 *     UseNotionAction: "DENY" || "ALLOW",
 *     LinearAction: "DENY" || "ALLOW",
 *     CreateAndUpdateLinearAction: "DENY" || "ALLOW",
 *     ShareLinearAction: "DENY" || "ALLOW",
 *     UseLinearAction: "DENY" || "ALLOW",
 *     HuggingFaceAction: "DENY" || "ALLOW",
 *     CreateAndUpdateHuggingFaceAction: "DENY" || "ALLOW",
 *     ShareHuggingFaceAction: "DENY" || "ALLOW",
 *     UseHuggingFaceAction: "DENY" || "ALLOW",
 *     MondayAction: "DENY" || "ALLOW",
 *     CreateAndUpdateMondayAction: "DENY" || "ALLOW",
 *     ShareMondayAction: "DENY" || "ALLOW",
 *     UseMondayAction: "DENY" || "ALLOW",
 *     HubspotAction: "DENY" || "ALLOW",
 *     CreateAndUpdateHubspotAction: "DENY" || "ALLOW",
 *     ShareHubspotAction: "DENY" || "ALLOW",
 *     UseHubspotAction: "DENY" || "ALLOW",
 *     IntercomAction: "DENY" || "ALLOW",
 *     CreateAndUpdateIntercomAction: "DENY" || "ALLOW",
 *     ShareIntercomAction: "DENY" || "ALLOW",
 *     UseIntercomAction: "DENY" || "ALLOW",
 *     NewRelicAction: "DENY" || "ALLOW",
 *     CreateAndUpdateNewRelicAction: "DENY" || "ALLOW",
 *     ShareNewRelicAction: "DENY" || "ALLOW",
 *     UseNewRelicAction: "DENY" || "ALLOW",
 *     Topic: "DENY" || "ALLOW",
 *     EditVisualWithQ: "DENY" || "ALLOW",
 *     BuildCalculatedFieldWithQ: "DENY" || "ALLOW",
 *     CreateDashboardExecutiveSummaryWithQ: "DENY" || "ALLOW",
 *     Space: "DENY" || "ALLOW",
 *     CreateSpaces: "DENY" || "ALLOW",
 *     ShareSpaces: "DENY" || "ALLOW",
 *     ChatAgent: "DENY" || "ALLOW",
 *     CreateChatAgents: "DENY" || "ALLOW",
 *     ShareChatAgents: "DENY" || "ALLOW",
 *     Research: "DENY" || "ALLOW",
 *     SelfUpgradeUserRole: "DENY" || "ALLOW",
 *     Extension: "DENY" || "ALLOW",
 *     UseBrowserExtension: "DENY" || "ALLOW",
 *     UseWordAddInExtension: "DENY" || "ALLOW",
 *     UseOutlookAddInExtension: "DENY" || "ALLOW",
 *     UseExcelAddInExtension: "DENY" || "ALLOW",
 *     UsePowerpointAddInExtension: "DENY" || "ALLOW",
 *     ManageSharedFolders: "DENY" || "ALLOW",
 *     GenerateAnalyses: "DENY" || "ALLOW",
 *     Story: "DENY" || "ALLOW",
 *     Scenario: "DENY" || "ALLOW",
 *     Trigger: "DENY" || "ALLOW",
 *     ScheduleTrigger: "DENY" || "ALLOW",
 *     InboundEmailTrigger: "DENY" || "ALLOW",
 *     QuickEventTrigger: "DENY" || "ALLOW",
 *   },
 *   Governance: { // Governance
 *     DefaultCategoryEffects: { // DefaultCategoryEffectsMap
 *       "<keys>": "DENY_BY_DEFAULT",
 *     },
 *   },
 * };
 * const command = new UpdateCustomPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomPermissionsResponse
 * //   Status: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCustomPermissionsCommandInput - {@link UpdateCustomPermissionsCommandInput}
 * @returns {@link UpdateCustomPermissionsCommandOutput}
 * @see {@link UpdateCustomPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class UpdateCustomPermissionsCommand extends command<UpdateCustomPermissionsCommandInput, UpdateCustomPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCustomPermissions",
  UpdateCustomPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomPermissionsRequest;
      output: UpdateCustomPermissionsResponse;
    };
    sdk: {
      input: UpdateCustomPermissionsCommandInput;
      output: UpdateCustomPermissionsCommandOutput;
    };
  };
}
