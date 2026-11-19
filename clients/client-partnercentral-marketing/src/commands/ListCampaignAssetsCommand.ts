// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCampaignAssetsRequest, ListCampaignAssetsResponse } from "../models/models_0";
import { ListCampaignAssets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCampaignAssetsCommand}.
 */
export interface ListCampaignAssetsCommandInput extends ListCampaignAssetsRequest {}
/**
 * @public
 *
 * The output of {@link ListCampaignAssetsCommand}.
 */
export interface ListCampaignAssetsCommandOutput extends ListCampaignAssetsResponse, __MetadataBearer {}

/**
 * Lists assets for a campaign with pagination.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, ListCampaignAssetsCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, ListCampaignAssetsCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // ListCampaignAssetsRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCampaignAssetsCommand(input);
 * const response = await client.send(command);
 * // { // ListCampaignAssetsResponse
 * //   Items: [ // CampaignAssetSummaryList // required
 * //     { // CampaignAssetSummary
 * //       Id: "STRING_VALUE", // required
 * //       Category: "EMAIL" || "LANDING_PAGE" || "SOCIAL_POST" || "BANNER_AD" || "DOCUMENT", // required
 * //       Name: "STRING_VALUE", // required
 * //       LinkLabel: "STRING_VALUE",
 * //       State: "INACTIVE" || "ACTIVE",
 * //       LastActivationStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //       DeliveryStatus: "PENDING" || "DELIVERED" || "FAILED",
 * //       DeliveryStatusReason: "ASSET_NOT_FOUND" || "ASSET_NOT_STARTABLE" || "ASSET_START_IN_PROGRESS" || "ASSET_ALREADY_ACTIVE" || "SEND_WINDOW_TOO_SOON" || "REQUIRED_FIELD_MISSING" || "RECIPIENT_LIST_MISSING" || "ENGAGEMENT_GROUPS_UNAVAILABLE" || "SENDER_EMAIL_MISSING" || "END_ON_MISSING" || "ASSET_CONTENT_MISSING" || "ASSET_NOT_ACTIVATABLE" || "TEMPLATE_CHANGED" || "PARTNER_IMAGE_REJECTED" || "PREREQUISITE_ASSET_NOT_ACTIVE" || "PARTNER_NOT_PROVISIONED" || "RECIPIENT_LIST_EMPTY" || "RECIPIENT_LIMIT_EXCEEDED" || "CONTACT_OPT_IN_REQUIRED" || "MAILING_CREDITS_EXHAUSTED" || "SENDER_EMAIL_INVALID" || "SOCIAL_CONNECTION_MISSING" || "SOCIAL_CONNECTION_EXPIRED" || "SOCIAL_CONNECTION_PAGE_REQUIRED" || "DELIVERY_FAILED" || "INTERNAL_ERROR" || "MAILING_CREDITS_INSUFFICIENT" || "PARTNER_PROFILE_FIELD_MISSING" || "PARTNER_PROFILE_FIELD_DOES_NOT_FIT" || "SOCIAL_CONNECTION_NOT_CHOSEN" || "PRIVACY_POLICY_URL_MISSING" || "PARTNER_ADDRESS_MISSING" || "SEND_MODE_MISSING" || "CONTENT_REJECTED" || "URL_NOT_ALLOWED" || "SENDER_NOT_APPROVED",
 * //       SourceAssetTemplateId: "STRING_VALUE",
 * //       SocialPlatform: "FACEBOOK" || "LINKEDIN" || "X",
 * //       StartedAt: new Date("TIMESTAMP"),
 * //       FileFormat: "PDF" || "DOCX" || "PPTX" || "HTML" || "IMAGE",
 * //       SendMode: "ON_ACTIVATION" || "SCHEDULED",
 * //       ScheduledSendAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCampaignAssetsCommandInput - {@link ListCampaignAssetsCommandInput}
 * @returns {@link ListCampaignAssetsCommandOutput}
 * @see {@link ListCampaignAssetsCommandInput} for command's `input` shape.
 * @see {@link ListCampaignAssetsCommandOutput} for command's `response` shape.
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
 * @example List assets for a campaign
 * ```javascript
 * //
 * const input = {
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS"
 * };
 * const command = new ListCampaignAssetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCampaignAssetsCommand extends command<ListCampaignAssetsCommandInput, ListCampaignAssetsCommandOutput>(
  _ep0,
  _mw0,
  "ListCampaignAssets",
  ListCampaignAssets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCampaignAssetsRequest;
      output: ListCampaignAssetsResponse;
    };
    sdk: {
      input: ListCampaignAssetsCommandInput;
      output: ListCampaignAssetsCommandOutput;
    };
  };
}
