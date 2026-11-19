// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCampaignsRequest, ListCampaignsResponse } from "../models/models_0";
import { ListCampaigns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCampaignsCommand}.
 */
export interface ListCampaignsCommandInput extends ListCampaignsRequest {}
/**
 * @public
 *
 * The output of {@link ListCampaignsCommand}.
 */
export interface ListCampaignsCommandOutput extends ListCampaignsResponse, __MetadataBearer {}

/**
 * Lists campaigns with optional filters and pagination.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, ListCampaignsCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, ListCampaignsCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // ListCampaignsRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifiers: [ // CampaignIdentifierList
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   States: [ // CampaignStateList
 *     "DRAFT" || "ACTIVE" || "COMPLETED",
 *   ],
 *   Sort: { // CampaignSort
 *     SortBy: "NAME" || "STATE" || "START_ON" || "CREATED_AT", // required
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCampaignsCommand(input);
 * const response = await client.send(command);
 * // { // ListCampaignsResponse
 * //   Items: [ // CampaignSummaryList // required
 * //     { // CampaignSummary
 * //       CampaignId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       State: "DRAFT" || "ACTIVE" || "COMPLETED", // required
 * //       Language: "en" || "es" || "es-419" || "fr" || "de" || "it" || "pt-BR" || "id" || "tr" || "ja" || "ko" || "zh-Hans" || "zh-Hant" || "ar",
 * //       StartOn: "STRING_VALUE",
 * //       EndOn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCampaignsCommandInput - {@link ListCampaignsCommandInput}
 * @returns {@link ListCampaignsCommandOutput}
 * @see {@link ListCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListCampaignsCommandOutput} for command's `response` shape.
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
 * @example List campaigns
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS"
 * };
 * const command = new ListCampaignsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items:   []
 * }
 * *\/
 * ```
 *
 * @example Name the campaigns a page links to
 * ```javascript
 * //
 * const input = {
 *   CampaignIdentifiers: [
 *     "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/campaign/camp-5Hq2m8x4k1p9w",
 *     "camp-8Rt3w6y1n4b2v"
 *   ],
 *   Catalog: "AWS"
 * };
 * const command = new ListCampaignsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/campaign/camp-5Hq2m8x4k1p9w",
 *       CampaignId: "camp-5Hq2m8x4k1p9w",
 *       Name: "Q4 GenAI Campaign",
 *       StartOn: "2026-11-01",
 *       State: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Search active campaigns by name, by launch date
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   MaxResults: 20,
 *   Name: "genai",
 *   Sort: {
 *     SortBy: "START_ON",
 *     SortOrder: "ASCENDING"
 *   },
 *   States: [
 *     "ACTIVE"
 *   ]
 * };
 * const command = new ListCampaignsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/campaign/camp-5Hq2m8x4k1p9w",
 *       CampaignId: "camp-5Hq2m8x4k1p9w",
 *       Name: "Q4 GenAI Campaign",
 *       StartOn: "2026-11-01",
 *       State: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCampaignsCommand extends command<ListCampaignsCommandInput, ListCampaignsCommandOutput>(
  _ep0,
  _mw0,
  "ListCampaigns",
  ListCampaigns$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCampaignsRequest;
      output: ListCampaignsResponse;
    };
    sdk: {
      input: ListCampaignsCommandInput;
      output: ListCampaignsCommandOutput;
    };
  };
}
