// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCampaignRequest, UpdateCampaignResponse } from "../models/models_0";
import { UpdateCampaign$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCampaignCommand}.
 */
export interface UpdateCampaignCommandInput extends UpdateCampaignRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignCommand}.
 */
export interface UpdateCampaignCommandOutput extends UpdateCampaignResponse, __MetadataBearer {}

/**
 * Edits a campaign in place.
 *
 * Partial update: an omitted field is left unchanged, which is the standard meaning of an
 * `Update` verb — a full replacement would be a `Put`. Change-only, with no way to clear a
 * field back to empty, because the campaign's file members cannot round-trip: they are
 * written as an `s3://` reference and read back as a URL or as metadata, so a replacement
 * payload could not resend an unchanged recipient list without re-uploading it.
 *
 * Refused while an activation task runs (`CAMPAIGN_ACTIVATION_IN_PROGRESS`) and once the campaign is
 * completed (`CAMPAIGN_COMPLETED`, the UTC date is after its `EndOn`).
 *
 * Last-writer-wins, with no concurrency token: this is low-contention metadata owned by one
 * partner.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, UpdateCampaignCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, UpdateCampaignCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // UpdateCampaignRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   SenderEmail: "STRING_VALUE",
 *   PrivacyPolicyUrl: "STRING_VALUE",
 *   PartnerAddress: "STRING_VALUE",
 *   PartnerBadge: { // FileRef
 *     S3Uri: "STRING_VALUE", // required
 *     VersionId: "STRING_VALUE", // required
 *   },
 *   EmailTarget: {
 *     S3Uri: "STRING_VALUE", // required
 *     VersionId: "STRING_VALUE", // required
 *   },
 *   EmailTargetEngagementGroupIds: [ // EngagementGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   SocialConnections: { // CampaignSocialConnections
 *     "<keys>": [ // CampaignSocialConnectionIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   EstimatedBudget: { // MonetaryValue
 *     Amount: "STRING_VALUE", // required
 *     CurrencyCode: "STRING_VALUE", // required
 *   },
 *   TotalBudget: {
 *     Amount: "STRING_VALUE", // required
 *     CurrencyCode: "STRING_VALUE", // required
 *   },
 *   TargetAudience: { // TargetAudience
 *     Industries: [ // IndustryList
 *       "FINANCIAL_SERVICES" || "HEALTHCARE" || "MANUFACTURING" || "RETAIL" || "MEDIA_ENTERTAINMENT" || "ENERGY" || "EDUCATION" || "GOVERNMENT" || "TELECOMMUNICATIONS" || "AUTOMOTIVE" || "INSURANCE" || "OTHER",
 *     ],
 *     CompanySizes: [ // CompanySizeList
 *       "STARTUP" || "SMALL_BUSINESS" || "MID_MARKET" || "ENTERPRISE" || "GLOBAL_ENTERPRISE",
 *     ],
 *     Countries: [ // CountryCodeList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ClientToken: "STRING_VALUE",
 *   StartOn: "STRING_VALUE",
 *   EndOn: "STRING_VALUE",
 * };
 * const command = new UpdateCampaignCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCampaignResponse
 * //   Id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateCampaignCommandInput - {@link UpdateCampaignCommandInput}
 * @returns {@link UpdateCampaignCommandOutput}
 * @see {@link UpdateCampaignCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by the service.
 *
 * A caller branches on `Reason`, and where the rejection is attributable to particular fields it reads
 * `FieldList` rather than parsing `Message`, which is prose and may change.
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
 * @throws {@link PartnerCentralMarketingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralMarketing service.</p>
 *
 *
 * @example Rename a campaign and raise its budget
 * ```javascript
 * //
 * const input = {
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS",
 *   Name: "Q4 GenAI Campaign (EMEA)",
 *   TotalBudget: {
 *     Amount: "40000.00",
 *     CurrencyCode: "USD"
 *   }
 * };
 * const command = new UpdateCampaignCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Id: "camp-5Hq2m8x4k1p9w"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateCampaignCommand extends command<UpdateCampaignCommandInput, UpdateCampaignCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCampaign",
  UpdateCampaign$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignRequest;
      output: UpdateCampaignResponse;
    };
    sdk: {
      input: UpdateCampaignCommandInput;
      output: UpdateCampaignCommandOutput;
    };
  };
}
