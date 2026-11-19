// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCampaignRequest, CreateCampaignResponse } from "../models/models_0";
import { CreateCampaign$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandInput extends CreateCampaignRequest {}
/**
 * @public
 *
 * The output of {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandOutput extends CreateCampaignResponse, __MetadataBearer {}

/**
 * Creates a new marketing campaign.
 *
 * Returns the identity of the new campaign, not the campaign. Growing a response is
 * backward compatible and shrinking one is not, and the caller's next step is a
 * `GetCampaign` anyway — a write that supplies an audience cannot report its scan verdict,
 * because that is decided after it commits.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, CreateCampaignCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, CreateCampaignCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // CreateCampaignRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   Name: "STRING_VALUE", // required
 *   CampaignTemplateId: "STRING_VALUE", // required
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
 *   EstimatedBudget: { // MonetaryValue
 *     Amount: "STRING_VALUE", // required
 *     CurrencyCode: "STRING_VALUE", // required
 *   },
 *   TotalBudget: {
 *     Amount: "STRING_VALUE", // required
 *     CurrencyCode: "STRING_VALUE", // required
 *   },
 *   StartOn: "STRING_VALUE",
 *   EndOn: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * // { // CreateCampaignResponse
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCampaignCommandInput - {@link CreateCampaignCommandInput}
 * @returns {@link CreateCampaignCommandOutput}
 * @see {@link CreateCampaignCommandInput} for command's `input` shape.
 * @see {@link CreateCampaignCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request exceeds a service quota.
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
 * @example Create a campaign
 * ```javascript
 * //
 * const input = {
 *   CampaignTemplateId: "tmpl-a1b2c3d4e5f6g",
 *   Catalog: "AWS",
 *   EndOn: "2026-12-31",
 *   Name: "Q4 GenAI Campaign",
 *   StartOn: "2026-11-01",
 *   TotalBudget: {
 *     Amount: "25000.00",
 *     CurrencyCode: "USD"
 *   }
 * };
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/campaign/camp-5Hq2m8x4k1p9w",
 *   Id: "camp-5Hq2m8x4k1p9w"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCampaignCommand extends command<CreateCampaignCommandInput, CreateCampaignCommandOutput>(
  _ep0,
  _mw0,
  "CreateCampaign",
  CreateCampaign$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCampaignRequest;
      output: CreateCampaignResponse;
    };
    sdk: {
      input: CreateCampaignCommandInput;
      output: CreateCampaignCommandOutput;
    };
  };
}
