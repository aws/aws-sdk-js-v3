// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchCampaignTemplatesRequest, SearchCampaignTemplatesResponse } from "../models/models_0";
import { SearchCampaignTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchCampaignTemplatesCommand}.
 */
export interface SearchCampaignTemplatesCommandInput extends SearchCampaignTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link SearchCampaignTemplatesCommand}.
 */
export interface SearchCampaignTemplatesCommandOutput extends SearchCampaignTemplatesResponse, __MetadataBearer {}

/**
 * Searches and browses the AWS-authored campaign template catalog. With no
 * SearchText it returns the whole catalog in the default order, so browse and
 * keyword search share one shape; GetCampaignTemplate reads one template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, SearchCampaignTemplatesCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, SearchCampaignTemplatesCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // SearchCampaignTemplatesRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   SearchText: "STRING_VALUE",
 *   Industry: [ // IndustryFilterList
 *     "FINANCIAL_SERVICES" || "HEALTHCARE" || "MANUFACTURING" || "RETAIL" || "MEDIA_ENTERTAINMENT" || "ENERGY" || "EDUCATION" || "GOVERNMENT" || "TELECOMMUNICATIONS" || "AUTOMOTIVE" || "INSURANCE" || "OTHER",
 *   ],
 *   UseCase: [ // UseCaseFilterList
 *     "STRING_VALUE",
 *   ],
 *   Language: [ // LanguageFilterList
 *     "en" || "es" || "es-419" || "fr" || "de" || "it" || "pt-BR" || "id" || "tr" || "ja" || "ko" || "zh-Hans" || "zh-Hant" || "ar",
 *   ],
 *   AwsServices: [ // AwsServiceFilterList
 *     "STRING_VALUE",
 *   ],
 *   CustomerSegments: [ // CustomerSegmentFilterList
 *     "ENTERPRISE" || "SMB" || "PUBLIC_SECTOR" || "ISV",
 *   ],
 *   Themes: [ // ThemeFilterList
 *     "AI" || "MIGRATION_MODERNIZATION" || "SECURITY" || "DATA_ANALYTICS" || "AWS_TRAINING_CERTIFICATION" || "AWS_MARKETPLACE" || "CONNECT" || "EVENTS",
 *   ],
 *   Collection: [ // CampaignTemplateCollectionFilterList
 *     "GENERAL" || "BUILD_WITH_AI",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchCampaignTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // SearchCampaignTemplatesResponse
 * //   TotalResults: Number("int"), // required
 * //   CampaignTemplates: [ // CampaignTemplateSummaryList // required
 * //     { // CampaignTemplateSummary
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Industry: "FINANCIAL_SERVICES" || "HEALTHCARE" || "MANUFACTURING" || "RETAIL" || "MEDIA_ENTERTAINMENT" || "ENERGY" || "EDUCATION" || "GOVERNMENT" || "TELECOMMUNICATIONS" || "AUTOMOTIVE" || "INSURANCE" || "OTHER",
 * //       UseCase: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LanguageCode: "en" || "es" || "es-419" || "fr" || "de" || "it" || "pt-BR" || "id" || "tr" || "ja" || "ko" || "zh-Hans" || "zh-Hant" || "ar",
 * //       Collection: "GENERAL" || "BUILD_WITH_AI", // required
 * //       AwsServices: [ // AwsServicesList
 * //         "STRING_VALUE",
 * //       ],
 * //       CustomerSegments: [ // CustomerSegmentList
 * //         "ENTERPRISE" || "SMB" || "PUBLIC_SECTOR" || "ISV",
 * //       ],
 * //       Themes: [ // ThemeList
 * //         "AI" || "MIGRATION_MODERNIZATION" || "SECURITY" || "DATA_ANALYTICS" || "AWS_TRAINING_CERTIFICATION" || "AWS_MARKETPLACE" || "CONNECT" || "EVENTS",
 * //       ],
 * //       ThumbnailUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchCampaignTemplatesCommandInput - {@link SearchCampaignTemplatesCommandInput}
 * @returns {@link SearchCampaignTemplatesCommandOutput}
 * @see {@link SearchCampaignTemplatesCommandInput} for command's `input` shape.
 * @see {@link SearchCampaignTemplatesCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
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
 * @example Browse the whole catalog
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS"
 * };
 * const command = new SearchCampaignTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CampaignTemplates:   [],
 *   TotalResults: 0
 * }
 * *\/
 * ```
 *
 * @example Search with a facet filter
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   Industry: [
 *     "TELECOMMUNICATIONS"
 *   ],
 *   SearchText: "contact center"
 * };
 * const command = new SearchCampaignTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CampaignTemplates:   [],
 *   TotalResults: 0
 * }
 * *\/
 * ```
 *
 * @example Browse the Build with AI collection in one language
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   Collection: [
 *     "BUILD_WITH_AI"
 *   ],
 *   Language: [
 *     "ja"
 *   ]
 * };
 * const command = new SearchCampaignTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CampaignTemplates: [
 *     {
 *       Collection: "BUILD_WITH_AI",
 *       Id: "tmpl-z7icunek7m2x8",
 *       LanguageCode: "ja",
 *       Name: "Build with AI (Japanese)"
 *     }
 *   ],
 *   TotalResults: 1
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchCampaignTemplatesCommand extends command<SearchCampaignTemplatesCommandInput, SearchCampaignTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "SearchCampaignTemplates",
  SearchCampaignTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchCampaignTemplatesRequest;
      output: SearchCampaignTemplatesResponse;
    };
    sdk: {
      input: SearchCampaignTemplatesCommandInput;
      output: SearchCampaignTemplatesCommandOutput;
    };
  };
}
