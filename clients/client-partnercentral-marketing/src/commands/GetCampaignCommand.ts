// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCampaignRequest, GetCampaignResponse } from "../models/models_0";
import { GetCampaign$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCampaignCommand}.
 */
export interface GetCampaignCommandInput extends GetCampaignRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignCommand}.
 */
export interface GetCampaignCommandOutput extends GetCampaignResponse, __MetadataBearer {}

/**
 * Retrieves a campaign by its identifier.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, GetCampaignCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, GetCampaignCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // GetCampaignRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCampaignCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignResponse
 * //   Campaign: { // Campaign
 * //     CampaignId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     State: "DRAFT" || "ACTIVE" || "COMPLETED", // required
 * //     CampaignTemplateId: "STRING_VALUE",
 * //     Language: "en" || "es" || "es-419" || "fr" || "de" || "it" || "pt-BR" || "id" || "tr" || "ja" || "ko" || "zh-Hans" || "zh-Hant" || "ar",
 * //     PartnerProfile: { // PartnerProfileBranding
 * //       DisplayName: "STRING_VALUE",
 * //       WebsiteUrl: "STRING_VALUE",
 * //       LogoUrl: "STRING_VALUE",
 * //       RefreshedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //     SenderEmail: "STRING_VALUE",
 * //     PrivacyPolicyUrl: "STRING_VALUE",
 * //     PartnerAddress: "STRING_VALUE",
 * //     PartnerBadge: { // PartnerBadgeDetail
 * //       Url: "STRING_VALUE", // required
 * //       AttachedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //     EmailTarget: { // EmailTargetDetail
 * //       ScanStatus: "PENDING" || "CLEAN" || "REJECTED",
 * //       AttachedAt: new Date("TIMESTAMP"),
 * //       ValidCount: Number("int"),
 * //       RejectedCount: Number("int"),
 * //       DuplicateCount: Number("int"),
 * //       FileName: "STRING_VALUE",
 * //     },
 * //     EmailTargetEngagementGroupIds: [ // EngagementGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     SocialConnections: { // CampaignSocialConnections
 * //       "<keys>": [ // CampaignSocialConnectionIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     EstimatedBudget: { // MonetaryValue
 * //       Amount: "STRING_VALUE", // required
 * //       CurrencyCode: "STRING_VALUE", // required
 * //     },
 * //     TotalBudget: {
 * //       Amount: "STRING_VALUE", // required
 * //       CurrencyCode: "STRING_VALUE", // required
 * //     },
 * //     TargetAudience: { // TargetAudience
 * //       Industries: [ // IndustryList
 * //         "FINANCIAL_SERVICES" || "HEALTHCARE" || "MANUFACTURING" || "RETAIL" || "MEDIA_ENTERTAINMENT" || "ENERGY" || "EDUCATION" || "GOVERNMENT" || "TELECOMMUNICATIONS" || "AUTOMOTIVE" || "INSURANCE" || "OTHER",
 * //       ],
 * //       CompanySizes: [ // CompanySizeList
 * //         "STARTUP" || "SMALL_BUSINESS" || "MID_MARKET" || "ENTERPRISE" || "GLOBAL_ENTERPRISE",
 * //       ],
 * //       Countries: [ // CountryCodeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     StartOn: "STRING_VALUE",
 * //     EndOn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     ActivationIssues: [ // ActivationIssueList // required
 * //       { // ActivationIssue
 * //         Code: "ASSET_NOT_FOUND" || "ASSET_NOT_STARTABLE" || "ASSET_START_IN_PROGRESS" || "ASSET_ALREADY_ACTIVE" || "SEND_WINDOW_TOO_SOON" || "REQUIRED_FIELD_MISSING" || "RECIPIENT_LIST_MISSING" || "ENGAGEMENT_GROUPS_UNAVAILABLE" || "SENDER_EMAIL_MISSING" || "END_ON_MISSING" || "ASSET_CONTENT_MISSING" || "ASSET_NOT_ACTIVATABLE" || "TEMPLATE_CHANGED" || "PARTNER_IMAGE_REJECTED" || "PREREQUISITE_ASSET_NOT_ACTIVE" || "PARTNER_NOT_PROVISIONED" || "RECIPIENT_LIST_EMPTY" || "RECIPIENT_LIMIT_EXCEEDED" || "CONTACT_OPT_IN_REQUIRED" || "MAILING_CREDITS_EXHAUSTED" || "SENDER_EMAIL_INVALID" || "SOCIAL_CONNECTION_MISSING" || "SOCIAL_CONNECTION_EXPIRED" || "SOCIAL_CONNECTION_PAGE_REQUIRED" || "DELIVERY_FAILED" || "INTERNAL_ERROR" || "MAILING_CREDITS_INSUFFICIENT" || "PARTNER_PROFILE_FIELD_MISSING" || "PARTNER_PROFILE_FIELD_DOES_NOT_FIT" || "SOCIAL_CONNECTION_NOT_CHOSEN" || "PRIVACY_POLICY_URL_MISSING" || "PARTNER_ADDRESS_MISSING" || "SEND_MODE_MISSING" || "CONTENT_REJECTED" || "URL_NOT_ALLOWED" || "SENDER_NOT_APPROVED", // required
 * //         FieldId: "STRING_VALUE",
 * //         CampaignSetting: "SENDER_EMAIL" || "END_ON" || "EMAIL_TARGET" || "PRIVACY_POLICY_URL" || "PARTNER_ADDRESS" || "PARTNER_BADGE",
 * //         PartnerProfileField: "DISPLAY_NAME" || "WEBSITE_URL" || "LOGO" || "WEBSITE_DOMAIN" || "COPYRIGHT_LINE" || "PARTNER_DETAILS" || "COPYRIGHT_AND_DETAILS" || "COPYRIGHT_YEAR_LINE",
 * //         AffectedAssetIds: [ // CampaignAssetIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         Message: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCampaignCommandInput - {@link GetCampaignCommandInput}
 * @returns {@link GetCampaignCommandOutput}
 * @see {@link GetCampaignCommandInput} for command's `input` shape.
 * @see {@link GetCampaignCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * An IAM denial carries no `Reason`. A refusal for the caller's Partner Central state carries one, so a client tells
 * the two apart by its presence.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by the service.
 *
 * A caller branches on `Reason`, and where the rejection is attributable to particular fields it reads
 * `FieldList` rather than parsing `Message`, which is prose and may change.
 *
 * @throws {@link PartnerCentralMarketingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralMarketing service.</p>
 *
 *
 * @example Get a campaign
 * ```javascript
 * //
 * const input = {
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS"
 * };
 * const command = new GetCampaignCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Campaign: {
 *     ActivationIssues: [
 *       {
 *         AffectedAssetIds: [
 *           "ast-4b81e0c9f2a7b"
 *         ],
 *         CampaignSetting: "EMAIL_TARGET",
 *         Code: "RECIPIENT_LIST_MISSING",
 *         Message: "The campaign has no recipient list."
 *       }
 *     ],
 *     Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/campaign/camp-5Hq2m8x4k1p9w",
 *     CampaignId: "camp-5Hq2m8x4k1p9w",
 *     Name: "Q4 GenAI Campaign",
 *     PartnerProfile: {
 *       DisplayName: "Example Partner",
 *       LogoUrl: "https://d111111abcdef8.cloudfront.net/logos/0f1e2d3c4b5a69788796a5b4c3d2e1f0.png",
 *       RefreshedAt: "2026-10-05T12:00:00Z",
 *       WebsiteUrl: "https://example.com"
 *     },
 *     State: "DRAFT"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetCampaignCommand extends command<GetCampaignCommandInput, GetCampaignCommandOutput>(
  _ep0,
  _mw0,
  "GetCampaign",
  GetCampaign$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCampaignRequest;
      output: GetCampaignResponse;
    };
    sdk: {
      input: GetCampaignCommandInput;
      output: GetCampaignCommandOutput;
    };
  };
}
