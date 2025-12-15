// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateEngagementContextRequest, CreateEngagementContextResponse } from "../models/models_0";
import type {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { CreateEngagementContext$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEngagementContextCommand}.
 */
export interface CreateEngagementContextCommandInput extends CreateEngagementContextRequest {}
/**
 * @public
 *
 * The output of {@link CreateEngagementContextCommand}.
 */
export interface CreateEngagementContextCommandOutput extends CreateEngagementContextResponse, __MetadataBearer {}

/**
 * <p>Creates a new context within an existing engagement. This action allows you to add contextual information such as customer projects or documents to an engagement, providing additional details that help facilitate collaboration between engagement members.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, CreateEngagementContextCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, CreateEngagementContextCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // CreateEngagementContextRequest
 *   Catalog: "STRING_VALUE", // required
 *   EngagementIdentifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   Type: "CustomerProject" || "Lead", // required
 *   Payload: { // EngagementContextPayload Union: only one key present
 *     CustomerProject: { // CustomerProjectsContext
 *       Customer: { // EngagementCustomer
 *         Industry: "Aerospace" || "Agriculture" || "Automotive" || "Computers and Electronics" || "Consumer Goods" || "Education" || "Energy - Oil and Gas" || "Energy - Power and Utilities" || "Financial Services" || "Gaming" || "Government" || "Healthcare" || "Hospitality" || "Life Sciences" || "Manufacturing" || "Marketing and Advertising" || "Media and Entertainment" || "Mining" || "Non-Profit Organization" || "Professional Services" || "Real Estate and Construction" || "Retail" || "Software and Internet" || "Telecommunications" || "Transportation and Logistics" || "Travel" || "Wholesale and Distribution" || "Other", // required
 *         CompanyName: "STRING_VALUE", // required
 *         WebsiteUrl: "STRING_VALUE", // required
 *         CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW", // required
 *       },
 *       Project: { // EngagementCustomerProjectDetails
 *         Title: "STRING_VALUE", // required
 *         BusinessProblem: "STRING_VALUE", // required
 *         TargetCompletionDate: "STRING_VALUE", // required
 *       },
 *     },
 *     Lead: { // LeadContext
 *       QualificationStatus: "STRING_VALUE",
 *       Customer: { // LeadCustomer
 *         Industry: "Aerospace" || "Agriculture" || "Automotive" || "Computers and Electronics" || "Consumer Goods" || "Education" || "Energy - Oil and Gas" || "Energy - Power and Utilities" || "Financial Services" || "Gaming" || "Government" || "Healthcare" || "Hospitality" || "Life Sciences" || "Manufacturing" || "Marketing and Advertising" || "Media and Entertainment" || "Mining" || "Non-Profit Organization" || "Professional Services" || "Real Estate and Construction" || "Retail" || "Software and Internet" || "Telecommunications" || "Transportation and Logistics" || "Travel" || "Wholesale and Distribution" || "Other",
 *         CompanyName: "STRING_VALUE", // required
 *         WebsiteUrl: "STRING_VALUE",
 *         Address: { // AddressSummary
 *           City: "STRING_VALUE",
 *           PostalCode: "STRING_VALUE",
 *           StateOrRegion: "STRING_VALUE",
 *           CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW",
 *         },
 *         AwsMaturity: "STRING_VALUE",
 *         MarketSegment: "Enterprise" || "Large" || "Medium" || "Small" || "Micro",
 *       },
 *       Interactions: [ // LeadInteractionList // required
 *         { // LeadInteraction
 *           SourceType: "STRING_VALUE", // required
 *           SourceId: "STRING_VALUE", // required
 *           SourceName: "STRING_VALUE", // required
 *           Usecase: "STRING_VALUE",
 *           InteractionDate: new Date("TIMESTAMP"),
 *           CustomerAction: "STRING_VALUE", // required
 *           BusinessProblem: "STRING_VALUE",
 *           Contact: { // LeadContact
 *             BusinessTitle: "STRING_VALUE", // required
 *             Email: "STRING_VALUE", // required
 *             FirstName: "STRING_VALUE", // required
 *             LastName: "STRING_VALUE", // required
 *             Phone: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateEngagementContextCommand(input);
 * const response = await client.send(command);
 * // { // CreateEngagementContextResponse
 * //   EngagementId: "STRING_VALUE",
 * //   EngagementArn: "STRING_VALUE",
 * //   EngagementLastModifiedAt: new Date("TIMESTAMP"),
 * //   ContextId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEngagementContextCommandInput - {@link CreateEngagementContextCommandInput}
 * @returns {@link CreateEngagementContextCommandOutput}
 * @see {@link CreateEngagementContextCommandInput} for command's `input` shape.
 * @see {@link CreateEngagementContextCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This error occurs when the request can’t be processed due to a conflict with the target resource's current state, which could result from updating or deleting the resource.</p> <p>Suggested action: Fetch the latest state of the resource, verify the state, and retry the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This error occurs when the request would cause a service quota to be exceeded. Service quotas represent the maximum allowed use of a specific resource, and this error indicates that the request would surpass that limit.</p> <p>Suggested action: Review the <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> for the resource, and either reduce usage or request a quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.</p> <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class CreateEngagementContextCommand extends $Command
  .classBuilder<
    CreateEngagementContextCommandInput,
    CreateEngagementContextCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPartnerCentralSelling", "CreateEngagementContext", {})
  .n("PartnerCentralSellingClient", "CreateEngagementContextCommand")
  .sc(CreateEngagementContext$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEngagementContextRequest;
      output: CreateEngagementContextResponse;
    };
    sdk: {
      input: CreateEngagementContextCommandInput;
      output: CreateEngagementContextCommandOutput;
    };
  };
}
