// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateOpportunityRequest,
  CreateOpportunityRequestFilterSensitiveLog,
  CreateOpportunityResponse,
} from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_CreateOpportunityCommand, se_CreateOpportunityCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOpportunityCommand}.
 */
export interface CreateOpportunityCommandInput extends CreateOpportunityRequest {}
/**
 * @public
 *
 * The output of {@link CreateOpportunityCommand}.
 */
export interface CreateOpportunityCommandOutput extends CreateOpportunityResponse, __MetadataBearer {}

/**
 * <p>
 *             Creates an <code>Opportunity</code> record in Partner Central. Use this operation to create
 *             a potential business opportunity intended to be submitted to Amazon Web Services. Creating an opportunity sets its <code>Lifecycle.ReviewStatus</code> to
 *             <code>Pending Submission</code>.
 *         </p>
 *          <p>
 *             To fully submit an opportunity, follow these steps:
 *         </p>
 *          <ol>
 *             <li>
 *                <p>To create the opportunity, use <code>CreateOpportunity</code>.</p>
 *             </li>
 *             <li>
 *                <p>To associate a solution with the opportunity, use <code>AssociateOpportunity</code>.</p>
 *             </li>
 *             <li>
 *                <p>To submit the opportunity, use <code>SubmitOpportunity</code>.</p>
 *             </li>
 *          </ol>
 *          <p>
 *             After submission, you can't edit the opportunity until the review is complete. However, opportunities in the
 *             <code>Pending Submission</code> state still need all details completed. You can update
 *             the opportunity while it's in the <code>Pending Submission</code> state.
 *         </p>
 *          <p>
 *             There's a set of mandatory fields required to create opportunities, but consider providing optional fields to
 *             enrich the opportunity record.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, CreateOpportunityCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, CreateOpportunityCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // CreateOpportunityRequest
 *   Catalog: "STRING_VALUE", // required
 *   PrimaryNeedsFromAws: [ // PrimaryNeedsFromAws
 *     "Co-Sell - Architectural Validation" || "Co-Sell - Business Presentation" || "Co-Sell - Competitive Information" || "Co-Sell - Pricing Assistance" || "Co-Sell - Technical Consultation" || "Co-Sell - Total Cost of Ownership Evaluation" || "Co-Sell - Deal Support" || "Co-Sell - Support for Public Tender / RFx",
 *   ],
 *   NationalSecurity: "Yes" || "No",
 *   PartnerOpportunityIdentifier: "STRING_VALUE",
 *   Customer: { // Customer
 *     Account: { // Account
 *       Industry: "Aerospace" || "Agriculture" || "Automotive" || "Computers and Electronics" || "Consumer Goods" || "Education" || "Energy - Oil and Gas" || "Energy - Power and Utilities" || "Financial Services" || "Gaming" || "Government" || "Healthcare" || "Hospitality" || "Life Sciences" || "Manufacturing" || "Marketing and Advertising" || "Media and Entertainment" || "Mining" || "Non-Profit Organization" || "Professional Services" || "Real Estate and Construction" || "Retail" || "Software and Internet" || "Telecommunications" || "Transportation and Logistics" || "Travel" || "Wholesale and Distribution" || "Other",
 *       OtherIndustry: "STRING_VALUE",
 *       CompanyName: "STRING_VALUE", // required
 *       WebsiteUrl: "STRING_VALUE",
 *       AwsAccountId: "STRING_VALUE",
 *       Address: { // Address
 *         City: "STRING_VALUE",
 *         PostalCode: "STRING_VALUE",
 *         StateOrRegion: "STRING_VALUE",
 *         CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW",
 *         StreetAddress: "STRING_VALUE",
 *       },
 *       Duns: "STRING_VALUE",
 *     },
 *     Contacts: [ // CustomerContactsList
 *       { // Contact
 *         Email: "STRING_VALUE",
 *         FirstName: "STRING_VALUE",
 *         LastName: "STRING_VALUE",
 *         BusinessTitle: "STRING_VALUE",
 *         Phone: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Project: { // Project
 *     DeliveryModels: [ // DeliveryModels
 *       "SaaS or PaaS" || "BYOL or AMI" || "Managed Services" || "Professional Services" || "Resell" || "Other",
 *     ],
 *     ExpectedCustomerSpend: [ // ExpectedCustomerSpendList
 *       { // ExpectedCustomerSpend
 *         Amount: "STRING_VALUE", // required
 *         CurrencyCode: "USD" || "EUR" || "GBP" || "AUD" || "CAD" || "CNY" || "NZD" || "INR" || "JPY" || "CHF" || "SEK" || "AED" || "AFN" || "ALL" || "AMD" || "ANG" || "AOA" || "ARS" || "AWG" || "AZN" || "BAM" || "BBD" || "BDT" || "BGN" || "BHD" || "BIF" || "BMD" || "BND" || "BOB" || "BOV" || "BRL" || "BSD" || "BTN" || "BWP" || "BYN" || "BZD" || "CDF" || "CHE" || "CHW" || "CLF" || "CLP" || "COP" || "COU" || "CRC" || "CUC" || "CUP" || "CVE" || "CZK" || "DJF" || "DKK" || "DOP" || "DZD" || "EGP" || "ERN" || "ETB" || "FJD" || "FKP" || "GEL" || "GHS" || "GIP" || "GMD" || "GNF" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "IQD" || "IRR" || "ISK" || "JMD" || "JOD" || "KES" || "KGS" || "KHR" || "KMF" || "KPW" || "KRW" || "KWD" || "KYD" || "KZT" || "LAK" || "LBP" || "LKR" || "LRD" || "LSL" || "LYD" || "MAD" || "MDL" || "MGA" || "MKD" || "MMK" || "MNT" || "MOP" || "MRU" || "MUR" || "MVR" || "MWK" || "MXN" || "MXV" || "MYR" || "MZN" || "NAD" || "NGN" || "NIO" || "NOK" || "NPR" || "OMR" || "PAB" || "PEN" || "PGK" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RSD" || "RUB" || "RWF" || "SAR" || "SBD" || "SCR" || "SDG" || "SGD" || "SHP" || "SLL" || "SOS" || "SRD" || "SSP" || "STN" || "SVC" || "SYP" || "SZL" || "THB" || "TJS" || "TMT" || "TND" || "TOP" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "UGX" || "USN" || "UYI" || "UYU" || "UZS" || "VEF" || "VND" || "VUV" || "WST" || "XAF" || "XCD" || "XDR" || "XOF" || "XPF" || "XSU" || "XUA" || "YER" || "ZAR" || "ZMW" || "ZWL", // required
 *         Frequency: "Monthly", // required
 *         TargetCompany: "STRING_VALUE", // required
 *       },
 *     ],
 *     Title: "STRING_VALUE",
 *     ApnPrograms: [ // ApnPrograms
 *       "STRING_VALUE",
 *     ],
 *     CustomerBusinessProblem: "STRING_VALUE",
 *     CustomerUseCase: "STRING_VALUE",
 *     RelatedOpportunityIdentifier: "STRING_VALUE",
 *     SalesActivities: [ // SalesActivities
 *       "Initialized discussions with customer" || "Customer has shown interest in solution" || "Conducted POC / Demo" || "In evaluation / planning stage" || "Agreed on solution to Business Problem" || "Completed Action Plan" || "Finalized Deployment Need" || "SOW Signed",
 *     ],
 *     CompetitorName: "Oracle Cloud" || "On-Prem" || "Co-location" || "Akamai" || "AliCloud" || "Google Cloud Platform" || "IBM Softlayer" || "Microsoft Azure" || "Other- Cost Optimization" || "No Competition" || "*Other",
 *     OtherCompetitorNames: "STRING_VALUE",
 *     OtherSolutionDescription: "STRING_VALUE",
 *     AdditionalComments: "STRING_VALUE",
 *   },
 *   OpportunityType: "Net New Business" || "Flat Renewal" || "Expansion",
 *   Marketing: { // Marketing
 *     CampaignName: "STRING_VALUE",
 *     Source: "Marketing Activity" || "None",
 *     UseCases: [ // UseCases
 *       "STRING_VALUE",
 *     ],
 *     Channels: [ // Channels
 *       "AWS Marketing Central" || "Content Syndication" || "Display" || "Email" || "Live Event" || "Out Of Home (OOH)" || "Print" || "Search" || "Social" || "Telemarketing" || "TV" || "Video" || "Virtual Event",
 *     ],
 *     AwsFundingUsed: "Yes" || "No",
 *   },
 *   SoftwareRevenue: { // SoftwareRevenue
 *     DeliveryModel: "Contract" || "Pay-as-you-go" || "Subscription",
 *     Value: { // MonetaryValue
 *       Amount: "STRING_VALUE", // required
 *       CurrencyCode: "USD" || "EUR" || "GBP" || "AUD" || "CAD" || "CNY" || "NZD" || "INR" || "JPY" || "CHF" || "SEK" || "AED" || "AFN" || "ALL" || "AMD" || "ANG" || "AOA" || "ARS" || "AWG" || "AZN" || "BAM" || "BBD" || "BDT" || "BGN" || "BHD" || "BIF" || "BMD" || "BND" || "BOB" || "BOV" || "BRL" || "BSD" || "BTN" || "BWP" || "BYN" || "BZD" || "CDF" || "CHE" || "CHW" || "CLF" || "CLP" || "COP" || "COU" || "CRC" || "CUC" || "CUP" || "CVE" || "CZK" || "DJF" || "DKK" || "DOP" || "DZD" || "EGP" || "ERN" || "ETB" || "FJD" || "FKP" || "GEL" || "GHS" || "GIP" || "GMD" || "GNF" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "IQD" || "IRR" || "ISK" || "JMD" || "JOD" || "KES" || "KGS" || "KHR" || "KMF" || "KPW" || "KRW" || "KWD" || "KYD" || "KZT" || "LAK" || "LBP" || "LKR" || "LRD" || "LSL" || "LYD" || "MAD" || "MDL" || "MGA" || "MKD" || "MMK" || "MNT" || "MOP" || "MRU" || "MUR" || "MVR" || "MWK" || "MXN" || "MXV" || "MYR" || "MZN" || "NAD" || "NGN" || "NIO" || "NOK" || "NPR" || "OMR" || "PAB" || "PEN" || "PGK" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RSD" || "RUB" || "RWF" || "SAR" || "SBD" || "SCR" || "SDG" || "SGD" || "SHP" || "SLL" || "SOS" || "SRD" || "SSP" || "STN" || "SVC" || "SYP" || "SZL" || "THB" || "TJS" || "TMT" || "TND" || "TOP" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "UGX" || "USN" || "UYI" || "UYU" || "UZS" || "VEF" || "VND" || "VUV" || "WST" || "XAF" || "XCD" || "XDR" || "XOF" || "XPF" || "XSU" || "XUA" || "YER" || "ZAR" || "ZMW" || "ZWL", // required
 *     },
 *     EffectiveDate: "STRING_VALUE",
 *     ExpirationDate: "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE", // required
 *   LifeCycle: { // LifeCycle
 *     Stage: "Prospect" || "Qualified" || "Technical Validation" || "Business Validation" || "Committed" || "Launched" || "Closed Lost",
 *     ClosedLostReason: "Customer Deficiency" || "Delay / Cancellation of Project" || "Legal / Tax / Regulatory" || "Lost to Competitor - Google" || "Lost to Competitor - Microsoft" || "Lost to Competitor - SoftLayer" || "Lost to Competitor - VMWare" || "Lost to Competitor - Other" || "No Opportunity" || "On Premises Deployment" || "Partner Gap" || "Price" || "Security / Compliance" || "Technical Limitations" || "Customer Experience" || "Other" || "People/Relationship/Governance" || "Product/Technology" || "Financial/Commercial",
 *     NextSteps: "STRING_VALUE",
 *     TargetCloseDate: "STRING_VALUE",
 *     ReviewStatus: "Pending Submission" || "Submitted" || "In review" || "Approved" || "Rejected" || "Action Required",
 *     ReviewComments: "STRING_VALUE",
 *     ReviewStatusReason: "STRING_VALUE",
 *     NextStepsHistory: [ // NextStepsHistories
 *       { // NextStepsHistory
 *         Value: "STRING_VALUE", // required
 *         Time: new Date("TIMESTAMP"), // required
 *       },
 *     ],
 *   },
 *   Origin: "AWS Referral" || "Partner Referral",
 *   OpportunityTeam: [ // PartnerOpportunityTeamMembersList
 *     {
 *       Email: "STRING_VALUE",
 *       FirstName: "STRING_VALUE",
 *       LastName: "STRING_VALUE",
 *       BusinessTitle: "STRING_VALUE",
 *       Phone: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateOpportunityCommand(input);
 * const response = await client.send(command);
 * // { // CreateOpportunityResponse
 * //   Id: "STRING_VALUE", // required
 * //   PartnerOpportunityIdentifier: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateOpportunityCommandInput - {@link CreateOpportunityCommandInput}
 * @returns {@link CreateOpportunityCommandOutput}
 * @see {@link CreateOpportunityCommandInput} for command's `input` shape.
 * @see {@link CreateOpportunityCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the
 *             requested action.
 *         </p>
 *          <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.
 *         </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This error occurs when the request can’t be processed due to a conflict with the target resource's current state, which could result from updating or deleting the resource.
 *         </p>
 *          <p>Suggested action: Fetch the latest state of the resource, verify the state, and retry the request.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.
 *         </p>
 *          <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.
 *         </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.
 *         </p>
 *          <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.
 *         </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your
 *             usage to avoid throttling.
 *         </p>
 *          <p>This error occurs when there are too many requests sent. Review the provided
 *             <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">quotas</a> and retry after the provided delay.
 *         </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.
 *         </p>
 *          <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.
 *         </p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 * @public
 */
export class CreateOpportunityCommand extends $Command
  .classBuilder<
    CreateOpportunityCommandInput,
    CreateOpportunityCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPartnerCentralSelling", "CreateOpportunity", {})
  .n("PartnerCentralSellingClient", "CreateOpportunityCommand")
  .f(CreateOpportunityRequestFilterSensitiveLog, void 0)
  .ser(se_CreateOpportunityCommand)
  .de(de_CreateOpportunityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOpportunityRequest;
      output: CreateOpportunityResponse;
    };
    sdk: {
      input: CreateOpportunityCommandInput;
      output: CreateOpportunityCommandOutput;
    };
  };
}
