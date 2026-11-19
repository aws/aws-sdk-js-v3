// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeactivateCampaignAssetRequest, DeactivateCampaignAssetResponse } from "../models/models_0";
import { DeactivateCampaignAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeactivateCampaignAssetCommand}.
 */
export interface DeactivateCampaignAssetCommandInput extends DeactivateCampaignAssetRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateCampaignAssetCommand}.
 */
export interface DeactivateCampaignAssetCommandOutput extends DeactivateCampaignAssetResponse, __MetadataBearer {}

/**
 * Stops a live campaign asset: an email's scheduled send is withdrawn, a
 * social post is removed before it publishes. On a completed campaign, it
 * also removes a published document, banner or landing page.
 *
 * Synchronous, and safe to repeat. Does not delete the asset record, so a
 * stopped email or social post can be started again.
 *
 * Not every asset can be stopped, and the reasons differ in kind. An email
 * that has begun sending **cannot** be recalled: the send is gone. A document,
 * a banner or a landing page is **refused** with `ASSET_NOT_DEACTIVATABLE` until
 * the campaign has completed (the UTC date is after its `EndOn`). Until then the
 * partner fixes one in place by updating it and activating it again, which keeps
 * its URL, so every email that already linked to it keeps working.
 *
 * Once the campaign has completed, the removal is permanent, because a completed
 * campaign can't activate anything again:
 *
 * - A document's published PDF is deleted. Its URL stops serving within about a
 *   minute (the CDN revalidates), and `PublicUrl` is no longer returned. Anything
 *   that linked to it, such as a landing page's download button or a sent email,
 *   reaches an error page. The export still contains the document.
 * - A banner's or landing page's published object is taken down at the delivery
 *   platform, and the images the partner put on it are deleted. A landing page
 *   stops capturing leads, and its `PublicUrl` is no longer returned. A partner
 *   site that embedded a banner shows nothing there. The platform's own CDN can
 *   keep serving a copy a visitor already cached, which collects nothing.
 *
 * A landing page and a document it links to can be removed in either order.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, DeactivateCampaignAssetCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, DeactivateCampaignAssetCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // DeactivateCampaignAssetRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   CampaignAssetIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeactivateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * // { // DeactivateCampaignAssetResponse
 * //   Id: "STRING_VALUE", // required
 * //   State: "INACTIVE" || "ACTIVE", // required
 * //   LastActivationStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //   StateReason: "ASSET_NOT_FOUND" || "ASSET_NOT_STARTABLE" || "ASSET_START_IN_PROGRESS" || "ASSET_ALREADY_ACTIVE" || "SEND_WINDOW_TOO_SOON" || "REQUIRED_FIELD_MISSING" || "RECIPIENT_LIST_MISSING" || "ENGAGEMENT_GROUPS_UNAVAILABLE" || "SENDER_EMAIL_MISSING" || "END_ON_MISSING" || "ASSET_CONTENT_MISSING" || "ASSET_NOT_ACTIVATABLE" || "TEMPLATE_CHANGED" || "PARTNER_IMAGE_REJECTED" || "PREREQUISITE_ASSET_NOT_ACTIVE" || "PARTNER_NOT_PROVISIONED" || "RECIPIENT_LIST_EMPTY" || "RECIPIENT_LIMIT_EXCEEDED" || "CONTACT_OPT_IN_REQUIRED" || "MAILING_CREDITS_EXHAUSTED" || "SENDER_EMAIL_INVALID" || "SOCIAL_CONNECTION_MISSING" || "SOCIAL_CONNECTION_EXPIRED" || "SOCIAL_CONNECTION_PAGE_REQUIRED" || "DELIVERY_FAILED" || "INTERNAL_ERROR" || "MAILING_CREDITS_INSUFFICIENT" || "PARTNER_PROFILE_FIELD_MISSING" || "PARTNER_PROFILE_FIELD_DOES_NOT_FIT" || "SOCIAL_CONNECTION_NOT_CHOSEN" || "PRIVACY_POLICY_URL_MISSING" || "PARTNER_ADDRESS_MISSING" || "SEND_MODE_MISSING" || "CONTENT_REJECTED" || "URL_NOT_ALLOWED" || "SENDER_NOT_APPROVED",
 * // };
 *
 * ```
 *
 * @param DeactivateCampaignAssetCommandInput - {@link DeactivateCampaignAssetCommandInput}
 * @returns {@link DeactivateCampaignAssetCommandOutput}
 * @see {@link DeactivateCampaignAssetCommandInput} for command's `input` shape.
 * @see {@link DeactivateCampaignAssetCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
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
 * @public
 */
export class DeactivateCampaignAssetCommand extends command<DeactivateCampaignAssetCommandInput, DeactivateCampaignAssetCommandOutput>(
  _ep0,
  _mw0,
  "DeactivateCampaignAsset",
  DeactivateCampaignAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateCampaignAssetRequest;
      output: DeactivateCampaignAssetResponse;
    };
    sdk: {
      input: DeactivateCampaignAssetCommandInput;
      output: DeactivateCampaignAssetCommandOutput;
    };
  };
}
