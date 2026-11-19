// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCampaignTemplateRequest, GetCampaignTemplateResponse } from "../models/models_0";
import { GetCampaignTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCampaignTemplateCommand}.
 */
export interface GetCampaignTemplateCommandInput extends GetCampaignTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignTemplateCommand}.
 */
export interface GetCampaignTemplateCommandOutput extends GetCampaignTemplateResponse, __MetadataBearer {}

/**
 * Retrieves full detail of one campaign template, including its ordered asset
 * templates with their field schema and layout previews.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, GetCampaignTemplateCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, GetCampaignTemplateCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // GetCampaignTemplateRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetCampaignTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignTemplateResponse
 * //   CampaignTemplate: { // CampaignTemplate
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Industry: "FINANCIAL_SERVICES" || "HEALTHCARE" || "MANUFACTURING" || "RETAIL" || "MEDIA_ENTERTAINMENT" || "ENERGY" || "EDUCATION" || "GOVERNMENT" || "TELECOMMUNICATIONS" || "AUTOMOTIVE" || "INSURANCE" || "OTHER",
 * //     UseCase: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LanguageCode: "en" || "es" || "es-419" || "fr" || "de" || "it" || "pt-BR" || "id" || "tr" || "ja" || "ko" || "zh-Hans" || "zh-Hant" || "ar",
 * //     Collection: "GENERAL" || "BUILD_WITH_AI", // required
 * //     AwsServices: [ // AwsServicesList
 * //       "STRING_VALUE",
 * //     ],
 * //     CustomerSegments: [ // CustomerSegmentList
 * //       "ENTERPRISE" || "SMB" || "PUBLIC_SECTOR" || "ISV",
 * //     ],
 * //     Themes: [ // ThemeList
 * //       "AI" || "MIGRATION_MODERNIZATION" || "SECURITY" || "DATA_ANALYTICS" || "AWS_TRAINING_CERTIFICATION" || "AWS_MARKETPLACE" || "CONNECT" || "EVENTS",
 * //     ],
 * //     SetupDuration: "STRING_VALUE",
 * //     ThumbnailUrl: "STRING_VALUE",
 * //     EffectiveDateBegin: new Date("TIMESTAMP"),
 * //     AssetTemplates: [ // CampaignAssetTemplateList
 * //       { // CampaignAssetTemplate
 * //         Id: "STRING_VALUE", // required
 * //         Type: "EMAIL" || "SOCIAL_POST" || "LANDING_PAGE" || "BANNER_AD" || "DOCUMENT", // required
 * //         Label: "STRING_VALUE", // required
 * //         DisplayOrder: Number("int"),
 * //         Fields: [ // CampaignAssetTemplateFieldList
 * //           { // CampaignAssetTemplateField
 * //             FieldId: "STRING_VALUE", // required
 * //             Label: "STRING_VALUE",
 * //             Description: "STRING_VALUE",
 * //             Section: "HEADER" || "BODY" || "FOOTER",
 * //             Page: Number("int"),
 * //             Required: true || false,
 * //             Type: { // FieldType Union: only one key present
 * //               Text: { // TextFieldType
 * //                 MinLength: Number("int"),
 * //                 MaxLength: Number("int"),
 * //                 Pattern: "STRING_VALUE",
 * //                 Placeholder: "STRING_VALUE",
 * //               },
 * //               RichText: { // RichTextFieldType
 * //                 MaxLength: Number("int"),
 * //                 AllowedTags: [ // AllowedTagList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Placeholder: "STRING_VALUE",
 * //               },
 * //               Image: { // ImageFieldType
 * //                 MaxSizeBytes: Number("long"),
 * //                 AllowedFormats: [ // ImageFormatList
 * //                   "PNG" || "JPEG",
 * //                 ],
 * //                 DefaultValue: { // LayoutPreview
 * //                   Format: "HTML" || "PDF" || "IMAGE", // required
 * //                   Url: "STRING_VALUE", // required
 * //                   PageType: "FORM" || "CONFIRMATION",
 * //                 },
 * //                 RecommendedWidthPixels: Number("int"),
 * //                 RecommendedHeightPixels: Number("int"),
 * //               },
 * //               AssetLink: { // AssetLinkFieldType
 * //                 Category: "EMAIL" || "LANDING_PAGE" || "SOCIAL_POST" || "BANNER_AD" || "DOCUMENT", // required
 * //                 LabelFieldId: "STRING_VALUE",
 * //               },
 * //             },
 * //             CampaignSetting: "SENDER_EMAIL" || "END_ON" || "EMAIL_TARGET" || "PRIVACY_POLICY_URL" || "PARTNER_ADDRESS" || "PARTNER_BADGE",
 * //             PartnerProfileField: "DISPLAY_NAME" || "WEBSITE_URL" || "LOGO" || "WEBSITE_DOMAIN" || "COPYRIGHT_LINE" || "PARTNER_DETAILS" || "COPYRIGHT_AND_DETAILS" || "COPYRIGHT_YEAR_LINE",
 * //           },
 * //         ],
 * //         LayoutPreviews: [ // LayoutPreviewList
 * //           {
 * //             Format: "HTML" || "PDF" || "IMAGE", // required
 * //             Url: "STRING_VALUE", // required
 * //             PageType: "FORM" || "CONFIRMATION",
 * //           },
 * //         ],
 * //         PrerequisiteAssetTemplateIds: [ // CampaignAssetTemplateIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         SocialPlatform: "FACEBOOK" || "LINKEDIN" || "X",
 * //       },
 * //     ],
 * //     ReferenceMaterials: [ // ReferenceMaterialList
 * //       { // ReferenceMaterial
 * //         Name: "STRING_VALUE", // required
 * //         Url: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCampaignTemplateCommandInput - {@link GetCampaignTemplateCommandInput}
 * @returns {@link GetCampaignTemplateCommandOutput}
 * @see {@link GetCampaignTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCampaignTemplateCommandOutput} for command's `response` shape.
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
 * @example Get a campaign template
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   Identifier: "tmpl-987xyz654abcd"
 * };
 * const command = new GetCampaignTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CampaignTemplate: {
 *     Collection: "GENERAL",
 *     Id: "tmpl-987xyz654abcd",
 *     Name: "GenAI for Financial Services"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetCampaignTemplateCommand extends command<GetCampaignTemplateCommandInput, GetCampaignTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetCampaignTemplate",
  GetCampaignTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCampaignTemplateRequest;
      output: GetCampaignTemplateResponse;
    };
    sdk: {
      input: GetCampaignTemplateCommandInput;
      output: GetCampaignTemplateCommandOutput;
    };
  };
}
