// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCampaignAssetRequest, UpdateCampaignAssetResponse } from "../models/models_0";
import { UpdateCampaignAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCampaignAssetCommand}.
 */
export interface UpdateCampaignAssetCommandInput extends UpdateCampaignAssetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignAssetCommand}.
 */
export interface UpdateCampaignAssetCommandOutput extends UpdateCampaignAssetResponse, __MetadataBearer {}

/**
 * Updates an asset's field values, layout or send time. Refused with
 * `ConflictException` while the campaign's running activation task still owns the
 * asset (`ASSET_START_IN_PROGRESS`), and for a live email or social post
 * (`ASSET_ALREADY_ACTIVE`): deactivate it first.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, UpdateCampaignAssetCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, UpdateCampaignAssetCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // UpdateCampaignAssetRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   CampaignAssetIdentifier: "STRING_VALUE", // required
 *   FieldValues: [ // FieldValueInputList
 *     { // FieldValueInput
 *       FieldId: "STRING_VALUE", // required
 *       Value: { // TemplateFieldValue Union: only one key present
 *         Text: "STRING_VALUE",
 *         ImageReference: "STRING_VALUE",
 *         LinkedAssetId: "STRING_VALUE",
 *         CampaignAssetImage: { // CampaignAssetImageSource
 *           CampaignIdentifier: "STRING_VALUE", // required
 *           CampaignAssetIdentifier: "STRING_VALUE", // required
 *           FieldId: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   Layout: "STRING_VALUE",
 *   SendMode: "ON_ACTIVATION" || "SCHEDULED",
 *   ScheduledSendAt: new Date("TIMESTAMP"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCampaignAssetResponse
 * //   Id: "STRING_VALUE", // required
 * //   State: "INACTIVE" || "ACTIVE", // required
 * //   ActivationIssues: [ // ActivationIssueList // required
 * //     { // ActivationIssue
 * //       Code: "ASSET_NOT_FOUND" || "ASSET_NOT_STARTABLE" || "ASSET_START_IN_PROGRESS" || "ASSET_ALREADY_ACTIVE" || "SEND_WINDOW_TOO_SOON" || "REQUIRED_FIELD_MISSING" || "RECIPIENT_LIST_MISSING" || "ENGAGEMENT_GROUPS_UNAVAILABLE" || "SENDER_EMAIL_MISSING" || "END_ON_MISSING" || "ASSET_CONTENT_MISSING" || "ASSET_NOT_ACTIVATABLE" || "TEMPLATE_CHANGED" || "PARTNER_IMAGE_REJECTED" || "PREREQUISITE_ASSET_NOT_ACTIVE" || "PARTNER_NOT_PROVISIONED" || "RECIPIENT_LIST_EMPTY" || "RECIPIENT_LIMIT_EXCEEDED" || "CONTACT_OPT_IN_REQUIRED" || "MAILING_CREDITS_EXHAUSTED" || "SENDER_EMAIL_INVALID" || "SOCIAL_CONNECTION_MISSING" || "SOCIAL_CONNECTION_EXPIRED" || "SOCIAL_CONNECTION_PAGE_REQUIRED" || "DELIVERY_FAILED" || "INTERNAL_ERROR" || "MAILING_CREDITS_INSUFFICIENT" || "PARTNER_PROFILE_FIELD_MISSING" || "PARTNER_PROFILE_FIELD_DOES_NOT_FIT" || "SOCIAL_CONNECTION_NOT_CHOSEN" || "PRIVACY_POLICY_URL_MISSING" || "PARTNER_ADDRESS_MISSING" || "SEND_MODE_MISSING" || "CONTENT_REJECTED" || "URL_NOT_ALLOWED" || "SENDER_NOT_APPROVED", // required
 * //       FieldId: "STRING_VALUE",
 * //       CampaignSetting: "SENDER_EMAIL" || "END_ON" || "EMAIL_TARGET" || "PRIVACY_POLICY_URL" || "PARTNER_ADDRESS" || "PARTNER_BADGE",
 * //       PartnerProfileField: "DISPLAY_NAME" || "WEBSITE_URL" || "LOGO" || "WEBSITE_DOMAIN" || "COPYRIGHT_LINE" || "PARTNER_DETAILS" || "COPYRIGHT_AND_DETAILS" || "COPYRIGHT_YEAR_LINE",
 * //       AffectedAssetIds: [ // CampaignAssetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateCampaignAssetCommandInput - {@link UpdateCampaignAssetCommandInput}
 * @returns {@link UpdateCampaignAssetCommandOutput}
 * @see {@link UpdateCampaignAssetCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignAssetCommandOutput} for command's `response` shape.
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
 * @example Update asset content
 * ```javascript
 * //
 * const input = {
 *   CampaignAssetIdentifier: "ast-4b81e0c9f2a7b",
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS",
 *   FieldValues: [
 *     {
 *       FieldId: "Subject",
 *       Value: {
 *         Text: "New subject line"
 *       }
 *     }
 *   ]
 * };
 * const command = new UpdateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ActivationIssues: [
 *     {
 *       Code: "REQUIRED_FIELD_MISSING",
 *       FieldId: "Headline",
 *       Message: "This required field is empty."
 *     }
 *   ],
 *   Id: "ast-4b81e0c9f2a7b",
 *   State: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @example Reschedule a sendable asset
 * ```javascript
 * //
 * const input = {
 *   CampaignAssetIdentifier: "ast-4b81e0c9f2a7b",
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS",
 *   ClientToken: "f2a7c1e4-9b3d-4a51-8e6f-0c2d5b8a7e13",
 *   ScheduledSendAt: 1793491200,
 *   SendMode: "SCHEDULED"
 * };
 * const command = new UpdateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ActivationIssues:   [],
 *   Id: "ast-4b81e0c9f2a7b",
 *   State: "INACTIVE"
 * }
 * *\/
 * ```
 *
 * @example Copy an image from a previous campaign's asset
 * ```javascript
 * // The image already stored on another of your assets is copied into this field. It is checked
 * against this field's constraints and not scanned again. The call also needs
 * partnercentral:GetCampaignAsset on the source campaign.
 * const input = {
 *   CampaignAssetIdentifier: "ast-4b81e0c9f2a7b",
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS",
 *   FieldValues: [
 *     {
 *       FieldId: "HeaderImage",
 *       Value: {
 *         CampaignAssetImage: {
 *           CampaignAssetIdentifier: "ast-0f9e8d7c6b5a2",
 *           CampaignIdentifier: "camp-2Lp7d9f3j6s1z",
 *           FieldId: "HeaderImage"
 *         }
 *       }
 *     }
 *   ]
 * };
 * const command = new UpdateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ActivationIssues:   [],
 *   Id: "ast-4b81e0c9f2a7b",
 *   State: "INACTIVE"
 * }
 * *\/
 * ```
 *
 * @example Use a suggested image from Build with AI
 * ```javascript
 * // The URL Build with AI returned for a suggested image is sent unchanged as imageReference. The
 * image is copied into this asset and not scanned. Any other URL is refused.
 * const input = {
 *   CampaignAssetIdentifier: "ast-4b81e0c9f2a7b",
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS",
 *   FieldValues: [
 *     {
 *       FieldId: "HeaderImage",
 *       Value: {
 *         ImageReference: "https://d111111abcdef8.cloudfront.net/suggested-image-url-from-build-with-ai.jpg"
 *       }
 *     }
 *   ]
 * };
 * const command = new UpdateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ActivationIssues:   [],
 *   Id: "ast-4b81e0c9f2a7b",
 *   State: "INACTIVE"
 * }
 * *\/
 * ```
 *
 * @example An update refused for two fields at once
 * ```javascript
 * // Every failed field is reported in one refusal, and nothing applies — a declined image and an
 * over-long headline arrive together in `fieldList`, each with its own `code`. This replaced a
 * read-path `fileDetails[]` report (DG-040 Decision 11), so a partner handles image and text
 * failures the same way.
 * const input = {
 *   CampaignAssetIdentifier: "ast-4b81e0c9f2a7b",
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS",
 *   FieldValues: [
 *     {
 *       FieldId: "HeaderImage",
 *       Value: {
 *         ImageReference: "s3://staging-bucket/123456789012/hero.png?versionId=v1"
 *       }
 *     },
 *     {
 *       FieldId: "Headline",
 *       Value: {
 *         Text: "This headline is far longer than the field allows"
 *       }
 *     }
 *   ]
 * };
 * const command = new UpdateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateCampaignAssetCommand extends command<UpdateCampaignAssetCommandInput, UpdateCampaignAssetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCampaignAsset",
  UpdateCampaignAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignAssetRequest;
      output: UpdateCampaignAssetResponse;
    };
    sdk: {
      input: UpdateCampaignAssetCommandInput;
      output: UpdateCampaignAssetCommandOutput;
    };
  };
}
