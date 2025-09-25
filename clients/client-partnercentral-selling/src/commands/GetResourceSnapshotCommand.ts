// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourceSnapshotRequest, GetResourceSnapshotResponse } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { GetResourceSnapshot } from "../schemas/schemas_3_Engagement";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceSnapshotCommand}.
 */
export interface GetResourceSnapshotCommandInput extends GetResourceSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceSnapshotCommand}.
 */
export interface GetResourceSnapshotCommandOutput extends GetResourceSnapshotResponse, __MetadataBearer {}

/**
 * <p>Use this action to retrieve a specific snapshot record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, GetResourceSnapshotCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, GetResourceSnapshotCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // GetResourceSnapshotRequest
 *   Catalog: "STRING_VALUE", // required
 *   EngagementIdentifier: "STRING_VALUE", // required
 *   ResourceType: "Opportunity", // required
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceSnapshotTemplateIdentifier: "STRING_VALUE", // required
 *   Revision: Number("int"),
 * };
 * const command = new GetResourceSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceSnapshotResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE",
 * //   CreatedBy: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   EngagementId: "STRING_VALUE",
 * //   ResourceType: "Opportunity",
 * //   ResourceId: "STRING_VALUE",
 * //   ResourceSnapshotTemplateName: "STRING_VALUE",
 * //   Revision: Number("int"),
 * //   Payload: { // ResourceSnapshotPayload Union: only one key present
 * //     OpportunitySummary: { // OpportunitySummaryView
 * //       OpportunityType: "Net New Business" || "Flat Renewal" || "Expansion",
 * //       Lifecycle: { // LifeCycleForView
 * //         TargetCloseDate: "STRING_VALUE",
 * //         ReviewStatus: "Pending Submission" || "Submitted" || "In review" || "Approved" || "Rejected" || "Action Required",
 * //         Stage: "Prospect" || "Qualified" || "Technical Validation" || "Business Validation" || "Committed" || "Launched" || "Closed Lost",
 * //         NextSteps: "STRING_VALUE",
 * //       },
 * //       OpportunityTeam: [ // PartnerOpportunityTeamMembersList
 * //         { // Contact
 * //           Email: "STRING_VALUE",
 * //           FirstName: "STRING_VALUE",
 * //           LastName: "STRING_VALUE",
 * //           BusinessTitle: "STRING_VALUE",
 * //           Phone: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrimaryNeedsFromAws: [ // PrimaryNeedsFromAws
 * //         "Co-Sell - Architectural Validation" || "Co-Sell - Business Presentation" || "Co-Sell - Competitive Information" || "Co-Sell - Pricing Assistance" || "Co-Sell - Technical Consultation" || "Co-Sell - Total Cost of Ownership Evaluation" || "Co-Sell - Deal Support" || "Co-Sell - Support for Public Tender / RFx",
 * //       ],
 * //       Customer: { // Customer
 * //         Account: { // Account
 * //           Industry: "Aerospace" || "Agriculture" || "Automotive" || "Computers and Electronics" || "Consumer Goods" || "Education" || "Energy - Oil and Gas" || "Energy - Power and Utilities" || "Financial Services" || "Gaming" || "Government" || "Healthcare" || "Hospitality" || "Life Sciences" || "Manufacturing" || "Marketing and Advertising" || "Media and Entertainment" || "Mining" || "Non-Profit Organization" || "Professional Services" || "Real Estate and Construction" || "Retail" || "Software and Internet" || "Telecommunications" || "Transportation and Logistics" || "Travel" || "Wholesale and Distribution" || "Other",
 * //           OtherIndustry: "STRING_VALUE",
 * //           CompanyName: "STRING_VALUE", // required
 * //           WebsiteUrl: "STRING_VALUE",
 * //           AwsAccountId: "STRING_VALUE",
 * //           Address: { // Address
 * //             City: "STRING_VALUE",
 * //             PostalCode: "STRING_VALUE",
 * //             StateOrRegion: "STRING_VALUE",
 * //             CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW",
 * //             StreetAddress: "STRING_VALUE",
 * //           },
 * //           Duns: "STRING_VALUE",
 * //         },
 * //         Contacts: [ // CustomerContactsList
 * //           {
 * //             Email: "STRING_VALUE",
 * //             FirstName: "STRING_VALUE",
 * //             LastName: "STRING_VALUE",
 * //             BusinessTitle: "STRING_VALUE",
 * //             Phone: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Project: { // ProjectView
 * //         DeliveryModels: [ // DeliveryModels
 * //           "SaaS or PaaS" || "BYOL or AMI" || "Managed Services" || "Professional Services" || "Resell" || "Other",
 * //         ],
 * //         ExpectedCustomerSpend: [ // ExpectedCustomerSpendList
 * //           { // ExpectedCustomerSpend
 * //             Amount: "STRING_VALUE", // required
 * //             CurrencyCode: "USD" || "EUR" || "GBP" || "AUD" || "CAD" || "CNY" || "NZD" || "INR" || "JPY" || "CHF" || "SEK" || "AED" || "AFN" || "ALL" || "AMD" || "ANG" || "AOA" || "ARS" || "AWG" || "AZN" || "BAM" || "BBD" || "BDT" || "BGN" || "BHD" || "BIF" || "BMD" || "BND" || "BOB" || "BOV" || "BRL" || "BSD" || "BTN" || "BWP" || "BYN" || "BZD" || "CDF" || "CHE" || "CHW" || "CLF" || "CLP" || "COP" || "COU" || "CRC" || "CUC" || "CUP" || "CVE" || "CZK" || "DJF" || "DKK" || "DOP" || "DZD" || "EGP" || "ERN" || "ETB" || "FJD" || "FKP" || "GEL" || "GHS" || "GIP" || "GMD" || "GNF" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "IQD" || "IRR" || "ISK" || "JMD" || "JOD" || "KES" || "KGS" || "KHR" || "KMF" || "KPW" || "KRW" || "KWD" || "KYD" || "KZT" || "LAK" || "LBP" || "LKR" || "LRD" || "LSL" || "LYD" || "MAD" || "MDL" || "MGA" || "MKD" || "MMK" || "MNT" || "MOP" || "MRU" || "MUR" || "MVR" || "MWK" || "MXN" || "MXV" || "MYR" || "MZN" || "NAD" || "NGN" || "NIO" || "NOK" || "NPR" || "OMR" || "PAB" || "PEN" || "PGK" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RSD" || "RUB" || "RWF" || "SAR" || "SBD" || "SCR" || "SDG" || "SGD" || "SHP" || "SLL" || "SOS" || "SRD" || "SSP" || "STN" || "SVC" || "SYP" || "SZL" || "THB" || "TJS" || "TMT" || "TND" || "TOP" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "UGX" || "USN" || "UYI" || "UYU" || "UZS" || "VEF" || "VND" || "VUV" || "WST" || "XAF" || "XCD" || "XDR" || "XOF" || "XPF" || "XSU" || "XUA" || "YER" || "ZAR" || "ZMW" || "ZWL", // required
 * //             Frequency: "Monthly", // required
 * //             TargetCompany: "STRING_VALUE", // required
 * //             EstimationUrl: "STRING_VALUE",
 * //           },
 * //         ],
 * //         CustomerUseCase: "STRING_VALUE",
 * //         SalesActivities: [ // SalesActivities
 * //           "Initialized discussions with customer" || "Customer has shown interest in solution" || "Conducted POC / Demo" || "In evaluation / planning stage" || "Agreed on solution to Business Problem" || "Completed Action Plan" || "Finalized Deployment Need" || "SOW Signed",
 * //         ],
 * //         OtherSolutionDescription: "STRING_VALUE",
 * //       },
 * //       RelatedEntityIdentifiers: { // RelatedEntityIdentifiers
 * //         AwsMarketplaceOffers: [ // AwsMarketplaceOfferIdentifiers
 * //           "STRING_VALUE",
 * //         ],
 * //         Solutions: [ // SolutionIdentifiers
 * //           "STRING_VALUE",
 * //         ],
 * //         AwsProducts: [ // AwsProductIdentifiers
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceSnapshotCommandInput - {@link GetResourceSnapshotCommandInput}
 * @returns {@link GetResourceSnapshotCommandOutput}
 * @see {@link GetResourceSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetResourceSnapshotCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
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
export class GetResourceSnapshotCommand extends $Command
  .classBuilder<
    GetResourceSnapshotCommandInput,
    GetResourceSnapshotCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPartnerCentralSelling", "GetResourceSnapshot", {})
  .n("PartnerCentralSellingClient", "GetResourceSnapshotCommand")
  .sc(GetResourceSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceSnapshotRequest;
      output: GetResourceSnapshotResponse;
    };
    sdk: {
      input: GetResourceSnapshotCommandInput;
      output: GetResourceSnapshotCommandOutput;
    };
  };
}
