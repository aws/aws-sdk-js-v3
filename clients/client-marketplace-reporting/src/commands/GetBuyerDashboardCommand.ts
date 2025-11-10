// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceReportingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceReportingClient";
import { GetBuyerDashboardInput, GetBuyerDashboardOutput } from "../models/models_0";
import { GetBuyerDashboard } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBuyerDashboardCommand}.
 */
export interface GetBuyerDashboardCommandInput extends GetBuyerDashboardInput {}
/**
 * @public
 *
 * The output of {@link GetBuyerDashboardCommand}.
 */
export interface GetBuyerDashboardCommandOutput extends GetBuyerDashboardOutput, __MetadataBearer {}

/**
 * <p>Generates an embedding URL for an Amazon QuickSight dashboard for an anonymous user.</p>
 *          <note>
 *             <p>This API is available only to Amazon Web Services Organization management accounts or
 *       delegated administrators registered for the procurement insights
 *       (<code>procurement-insights.marketplace.amazonaws.com</code>) feature.</p>
 *          </note>
 *          <p>The following rules apply to a generated URL:</p>
 *          <ul>
 *             <li>
 *                <p>It contains a temporary bearer token, valid for 5 minutes after it is generated. Once redeemed within that period, it cannot be re-used again.</p>
 *             </li>
 *             <li>
 *                <p>It has a session lifetime of one hour. The 5-minute validity period runs separately from the session lifetime.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceReportingClient, GetBuyerDashboardCommand } from "@aws-sdk/client-marketplace-reporting"; // ES Modules import
 * // const { MarketplaceReportingClient, GetBuyerDashboardCommand } = require("@aws-sdk/client-marketplace-reporting"); // CommonJS import
 * // import type { MarketplaceReportingClientConfig } from "@aws-sdk/client-marketplace-reporting";
 * const config = {}; // type is MarketplaceReportingClientConfig
 * const client = new MarketplaceReportingClient(config);
 * const input = { // GetBuyerDashboardInput
 *   dashboardIdentifier: "STRING_VALUE", // required
 *   embeddingDomains: [ // EmbeddingDomains // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetBuyerDashboardCommand(input);
 * const response = await client.send(command);
 * // { // GetBuyerDashboardOutput
 * //   embedUrl: "STRING_VALUE", // required
 * //   dashboardIdentifier: "STRING_VALUE", // required
 * //   embeddingDomains: [ // EmbeddingDomains // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBuyerDashboardCommandInput - {@link GetBuyerDashboardCommandInput}
 * @returns {@link GetBuyerDashboardCommandOutput}
 * @see {@link GetBuyerDashboardCommandInput} for command's `input` shape.
 * @see {@link GetBuyerDashboardCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceReportingClientResolvedConfig | config} for MarketplaceReportingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed, or it contains an error such as an invalid parameter. Ensure the request has all required parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed due to a server error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link MarketplaceReportingServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceReporting service.</p>
 *
 *
 * @example Getting an agreements dashboard
 * ```javascript
 * // The following example shows how to obtain a dashboard for active agreements
 * const input = {
 *   dashboardIdentifier: "arn:aws:aws-marketplace::123456789012:AWSMarketplace/ReportingData/Agreement_V1/Dashboard/AgreementSummary_V1",
 *   embeddingDomains: [
 *     "https://*.amazon.com"
 *   ]
 * };
 * const command = new GetBuyerDashboardCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   dashboardIdentifier: "arn:aws:aws-marketplace::123456789012:AWSMarketplace/ReportingData/Agreement_V1/Dashboard/AgreementSummary_V1",
 *   embedUrl: "https://us-east-1.quicksight.aws.amazon.com/embed/1235asdbffffbbasdf123/dashboards/8a66afa6-f316-4e71-a1ed-0a5bea07a314?code=abcdefghijklmn&identityprovider=quicksight&isauthcode=true",
 *   embeddingDomains: [
 *     "https://*.amazon.com"
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Getting a cost-analysis dashboard
 * ```javascript
 * // The following example shows how to obtain a dashboard for cost analysis
 * const input = {
 *   dashboardIdentifier: "arn:aws:aws-marketplace::123456789012:AWSMarketplace/ReportingData/BillingEvent_V1/Dashboard/CostAnalysis_V1",
 *   embeddingDomains: [
 *     "https://*.amazon.com"
 *   ]
 * };
 * const command = new GetBuyerDashboardCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   dashboardIdentifier: "arn:aws:aws-marketplace::123456789012:AWSMarketplace/ReportingData/BillingEvent_V1/Dashboard/CostAnalysis_V1",
 *   embedUrl: "https://us-east-1.quicksight.aws.amazon.com/embed/1235asdbffffbbasdf123/dashboards/8a66afa6-f316-4e71-a1ed-0a5bea07a314?code=abcdefghijklmn&identityprovider=quicksight&isauthcode=true",
 *   embeddingDomains: [
 *     "https://*.amazon.com"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBuyerDashboardCommand extends $Command
  .classBuilder<
    GetBuyerDashboardCommandInput,
    GetBuyerDashboardCommandOutput,
    MarketplaceReportingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceReportingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMarketplaceReporting", "GetBuyerDashboard", {})
  .n("MarketplaceReportingClient", "GetBuyerDashboardCommand")
  .sc(GetBuyerDashboard)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBuyerDashboardInput;
      output: GetBuyerDashboardOutput;
    };
    sdk: {
      input: GetBuyerDashboardCommandInput;
      output: GetBuyerDashboardCommandOutput;
    };
  };
}
