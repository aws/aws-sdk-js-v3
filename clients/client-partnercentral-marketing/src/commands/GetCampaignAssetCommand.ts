// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCampaignAssetRequest, GetCampaignAssetResponse } from "../models/models_0";
import { GetCampaignAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCampaignAssetCommand}.
 */
export interface GetCampaignAssetCommandInput extends GetCampaignAssetRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignAssetCommand}.
 */
export interface GetCampaignAssetCommandOutput extends GetCampaignAssetResponse, __MetadataBearer {}

/**
 * Retrieves an asset by its identifier.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, GetCampaignAssetCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, GetCampaignAssetCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // GetCampaignAssetRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   CampaignAssetIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCampaignAssetCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignAssetResponse
 * //   Asset: { // CampaignAsset
 * //     Id: "STRING_VALUE", // required
 * //     CampaignId: "STRING_VALUE", // required
 * //     Category: "EMAIL" || "LANDING_PAGE" || "SOCIAL_POST" || "BANNER_AD" || "DOCUMENT", // required
 * //     Name: "STRING_VALUE", // required
 * //     LinkLabel: "STRING_VALUE",
 * //     State: "INACTIVE" || "ACTIVE", // required
 * //     LastActivationStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //     DeliveryStatus: "PENDING" || "DELIVERED" || "FAILED",
 * //     DeliveryStatusReason: "ASSET_NOT_FOUND" || "ASSET_NOT_STARTABLE" || "ASSET_START_IN_PROGRESS" || "ASSET_ALREADY_ACTIVE" || "SEND_WINDOW_TOO_SOON" || "REQUIRED_FIELD_MISSING" || "RECIPIENT_LIST_MISSING" || "ENGAGEMENT_GROUPS_UNAVAILABLE" || "SENDER_EMAIL_MISSING" || "END_ON_MISSING" || "ASSET_CONTENT_MISSING" || "ASSET_NOT_ACTIVATABLE" || "TEMPLATE_CHANGED" || "PARTNER_IMAGE_REJECTED" || "PREREQUISITE_ASSET_NOT_ACTIVE" || "PARTNER_NOT_PROVISIONED" || "RECIPIENT_LIST_EMPTY" || "RECIPIENT_LIMIT_EXCEEDED" || "CONTACT_OPT_IN_REQUIRED" || "MAILING_CREDITS_EXHAUSTED" || "SENDER_EMAIL_INVALID" || "SOCIAL_CONNECTION_MISSING" || "SOCIAL_CONNECTION_EXPIRED" || "SOCIAL_CONNECTION_PAGE_REQUIRED" || "DELIVERY_FAILED" || "INTERNAL_ERROR" || "MAILING_CREDITS_INSUFFICIENT" || "PARTNER_PROFILE_FIELD_MISSING" || "PARTNER_PROFILE_FIELD_DOES_NOT_FIT" || "SOCIAL_CONNECTION_NOT_CHOSEN" || "PRIVACY_POLICY_URL_MISSING" || "PARTNER_ADDRESS_MISSING" || "SEND_MODE_MISSING" || "CONTENT_REJECTED" || "URL_NOT_ALLOWED" || "SENDER_NOT_APPROVED",
 * //     SourceAssetTemplateId: "STRING_VALUE",
 * //     SocialPlatform: "FACEBOOK" || "LINKEDIN" || "X",
 * //     FileFormat: "PDF" || "DOCX" || "PPTX" || "HTML" || "IMAGE",
 * //     SendMode: "ON_ACTIVATION" || "SCHEDULED",
 * //     ScheduledSendAt: new Date("TIMESTAMP"),
 * //     FieldValues: [ // CampaignAssetFieldValueList
 * //       { // CampaignAssetFieldValue
 * //         Field: { // CampaignAssetTemplateField
 * //           FieldId: "STRING_VALUE", // required
 * //           Label: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           Section: "HEADER" || "BODY" || "FOOTER",
 * //           Page: Number("int"),
 * //           Required: true || false,
 * //           Type: { // FieldType Union: only one key present
 * //             Text: { // TextFieldType
 * //               MinLength: Number("int"),
 * //               MaxLength: Number("int"),
 * //               Pattern: "STRING_VALUE",
 * //               Placeholder: "STRING_VALUE",
 * //             },
 * //             RichText: { // RichTextFieldType
 * //               MaxLength: Number("int"),
 * //               AllowedTags: [ // AllowedTagList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               Placeholder: "STRING_VALUE",
 * //             },
 * //             Image: { // ImageFieldType
 * //               MaxSizeBytes: Number("long"),
 * //               AllowedFormats: [ // ImageFormatList
 * //                 "PNG" || "JPEG",
 * //               ],
 * //               DefaultValue: { // LayoutPreview
 * //                 Format: "HTML" || "PDF" || "IMAGE", // required
 * //                 Url: "STRING_VALUE", // required
 * //                 PageType: "FORM" || "CONFIRMATION",
 * //               },
 * //               RecommendedWidthPixels: Number("int"),
 * //               RecommendedHeightPixels: Number("int"),
 * //             },
 * //             AssetLink: { // AssetLinkFieldType
 * //               Category: "EMAIL" || "LANDING_PAGE" || "SOCIAL_POST" || "BANNER_AD" || "DOCUMENT", // required
 * //               LabelFieldId: "STRING_VALUE",
 * //             },
 * //           },
 * //           CampaignSetting: "SENDER_EMAIL" || "END_ON" || "EMAIL_TARGET" || "PRIVACY_POLICY_URL" || "PARTNER_ADDRESS" || "PARTNER_BADGE",
 * //           PartnerProfileField: "DISPLAY_NAME" || "WEBSITE_URL" || "LOGO" || "WEBSITE_DOMAIN" || "COPYRIGHT_LINE" || "PARTNER_DETAILS" || "COPYRIGHT_AND_DETAILS" || "COPYRIGHT_YEAR_LINE",
 * //         },
 * //         Value: { // TemplateFieldValue Union: only one key present
 * //           Text: "STRING_VALUE",
 * //           ImageReference: "STRING_VALUE",
 * //           LinkedAssetId: "STRING_VALUE",
 * //           CampaignAssetImage: { // CampaignAssetImageSource
 * //             CampaignIdentifier: "STRING_VALUE", // required
 * //             CampaignAssetIdentifier: "STRING_VALUE", // required
 * //             FieldId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     LayoutPreviews: [ // LayoutPreviewList
 * //       {
 * //         Format: "HTML" || "PDF" || "IMAGE", // required
 * //         Url: "STRING_VALUE", // required
 * //         PageType: "FORM" || "CONFIRMATION",
 * //       },
 * //     ],
 * //     Layout: { // CampaignAssetLayout
 * //       Selected: "STRING_VALUE",
 * //       Options: [ // CampaignAssetLayoutOptionList // required
 * //         { // CampaignAssetLayoutOption
 * //           Value: "STRING_VALUE", // required
 * //           Label: "STRING_VALUE",
 * //           FieldIds: [ // TemplateFieldIdList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           LayoutPreviews: [
 * //             "<LayoutPreview>",
 * //           ],
 * //         },
 * //       ],
 * //     },
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
 * //     PublicUrl: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCampaignAssetCommandInput - {@link GetCampaignAssetCommandInput}
 * @returns {@link GetCampaignAssetCommandOutput}
 * @see {@link GetCampaignAssetCommandInput} for command's `input` shape.
 * @see {@link GetCampaignAssetCommandOutput} for command's `response` shape.
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
 * @example Get an asset
 * ```javascript
 * //
 * const input = {
 *   CampaignAssetIdentifier: "ast-4b81e0c9f2a7b",
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS"
 * };
 * const command = new GetCampaignAssetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Asset: {
 *     ActivationIssues:     [],
 *     CampaignId: "camp-5Hq2m8x4k1p9w",
 *     Category: "EMAIL",
 *     DeliveryStatus: "PENDING",
 *     FileFormat: "HTML",
 *     Id: "ast-4b81e0c9f2a7b",
 *     LastActivationStatus: "SUCCEEDED",
 *     Name: "Intro email",
 *     State: "ACTIVE"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetCampaignAssetCommand extends command<GetCampaignAssetCommandInput, GetCampaignAssetCommandOutput>(
  _ep0,
  _mw0,
  "GetCampaignAsset",
  GetCampaignAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCampaignAssetRequest;
      output: GetCampaignAssetResponse;
    };
    sdk: {
      input: GetCampaignAssetCommandInput;
      output: GetCampaignAssetCommandOutput;
    };
  };
}
