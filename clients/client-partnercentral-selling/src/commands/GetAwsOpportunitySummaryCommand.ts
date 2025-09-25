// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAwsOpportunitySummaryRequest, GetAwsOpportunitySummaryResponse } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { GetAwsOpportunitySummary } from "../schemas/schemas_8_Opportunity";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAwsOpportunitySummaryCommand}.
 */
export interface GetAwsOpportunitySummaryCommandInput extends GetAwsOpportunitySummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetAwsOpportunitySummaryCommand}.
 */
export interface GetAwsOpportunitySummaryCommandOutput extends GetAwsOpportunitySummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves a summary of an AWS Opportunity. This summary includes high-level details about the opportunity sourced from AWS, such as lifecycle information, customer details, and involvement type. It is useful for tracking updates on the AWS opportunity corresponding to an opportunity in the partner's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, GetAwsOpportunitySummaryCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, GetAwsOpportunitySummaryCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // GetAwsOpportunitySummaryRequest
 *   Catalog: "STRING_VALUE", // required
 *   RelatedOpportunityIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetAwsOpportunitySummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetAwsOpportunitySummaryResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   RelatedOpportunityId: "STRING_VALUE",
 * //   Origin: "AWS Referral" || "Partner Referral",
 * //   InvolvementType: "For Visibility Only" || "Co-Sell",
 * //   Visibility: "Full" || "Limited",
 * //   LifeCycle: { // AwsOpportunityLifeCycle
 * //     TargetCloseDate: "STRING_VALUE",
 * //     ClosedLostReason: "Administrative" || "Business Associate Agreement" || "Company Acquired/Dissolved" || "Competitive Offering" || "Customer Data Requirement" || "Customer Deficiency" || "Customer Experience" || "Delay / Cancellation of Project" || "Duplicate" || "Duplicate Opportunity" || "Executive Blocker" || "Failed Vetting" || "Feature Limitation" || "Financial/Commercial" || "Insufficient Amazon Value" || "Insufficient AWS Value" || "International Constraints" || "Legal / Tax / Regulatory" || "Legal Terms and Conditions" || "Lost to Competitor" || "Lost to Competitor - Google" || "Lost to Competitor - Microsoft" || "Lost to Competitor - Other" || "Lost to Competitor - Rackspace" || "Lost to Competitor - SoftLayer" || "Lost to Competitor - VMWare" || "No Customer Reference" || "No Integration Resources" || "No Opportunity" || "No Perceived Value of MP" || "No Response" || "Not Committed to AWS" || "No Update" || "On Premises Deployment" || "Other" || "Other (Details in Description)" || "Partner Gap" || "Past Due" || "People/Relationship/Governance" || "Platform Technology Limitation" || "Preference for Competitor" || "Price" || "Product/Technology" || "Product Not on AWS" || "Security / Compliance" || "Self-Service" || "Technical Limitations" || "Term Sheet Impasse",
 * //     Stage: "Not Started" || "In Progress" || "Prospect" || "Engaged" || "Identified" || "Qualify" || "Research" || "Seller Engaged" || "Evaluating" || "Seller Registered" || "Term Sheet Negotiation" || "Contract Negotiation" || "Onboarding" || "Building Integration" || "Qualified" || "On-hold" || "Technical Validation" || "Business Validation" || "Committed" || "Launched" || "Deferred to Partner" || "Closed Lost" || "Completed" || "Closed Incomplete",
 * //     NextSteps: "STRING_VALUE",
 * //     NextStepsHistory: [ // ProfileNextStepsHistories
 * //       { // ProfileNextStepsHistory
 * //         Value: "STRING_VALUE", // required
 * //         Time: new Date("TIMESTAMP"), // required
 * //       },
 * //     ],
 * //   },
 * //   OpportunityTeam: [ // AwsOpportunityTeamMembersList
 * //     { // AwsTeamMember
 * //       Email: "STRING_VALUE",
 * //       FirstName: "STRING_VALUE",
 * //       LastName: "STRING_VALUE",
 * //       BusinessTitle: "AWSSalesRep" || "AWSAccountOwner" || "WWPSPDM" || "PDM" || "PSM" || "ISVSM",
 * //     },
 * //   ],
 * //   Insights: { // AwsOpportunityInsights
 * //     NextBestActions: "STRING_VALUE",
 * //     EngagementScore: "High" || "Medium" || "Low",
 * //   },
 * //   InvolvementTypeChangeReason: "Expansion Opportunity" || "Change in Deal Information" || "Customer Requested" || "Technical Complexity" || "Risk Mitigation",
 * //   RelatedEntityIds: { // AwsOpportunityRelatedEntities
 * //     AwsProducts: [ // AwsProductIdentifiers
 * //       "STRING_VALUE",
 * //     ],
 * //     Solutions: [ // SolutionIdentifiers
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Customer: { // AwsOpportunityCustomer
 * //     Contacts: [ // CustomerContactsList
 * //       { // Contact
 * //         Email: "STRING_VALUE",
 * //         FirstName: "STRING_VALUE",
 * //         LastName: "STRING_VALUE",
 * //         BusinessTitle: "STRING_VALUE",
 * //         Phone: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Project: { // AwsOpportunityProject
 * //     ExpectedCustomerSpend: [ // ExpectedCustomerSpendList
 * //       { // ExpectedCustomerSpend
 * //         Amount: "STRING_VALUE", // required
 * //         CurrencyCode: "USD" || "EUR" || "GBP" || "AUD" || "CAD" || "CNY" || "NZD" || "INR" || "JPY" || "CHF" || "SEK" || "AED" || "AFN" || "ALL" || "AMD" || "ANG" || "AOA" || "ARS" || "AWG" || "AZN" || "BAM" || "BBD" || "BDT" || "BGN" || "BHD" || "BIF" || "BMD" || "BND" || "BOB" || "BOV" || "BRL" || "BSD" || "BTN" || "BWP" || "BYN" || "BZD" || "CDF" || "CHE" || "CHW" || "CLF" || "CLP" || "COP" || "COU" || "CRC" || "CUC" || "CUP" || "CVE" || "CZK" || "DJF" || "DKK" || "DOP" || "DZD" || "EGP" || "ERN" || "ETB" || "FJD" || "FKP" || "GEL" || "GHS" || "GIP" || "GMD" || "GNF" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "IQD" || "IRR" || "ISK" || "JMD" || "JOD" || "KES" || "KGS" || "KHR" || "KMF" || "KPW" || "KRW" || "KWD" || "KYD" || "KZT" || "LAK" || "LBP" || "LKR" || "LRD" || "LSL" || "LYD" || "MAD" || "MDL" || "MGA" || "MKD" || "MMK" || "MNT" || "MOP" || "MRU" || "MUR" || "MVR" || "MWK" || "MXN" || "MXV" || "MYR" || "MZN" || "NAD" || "NGN" || "NIO" || "NOK" || "NPR" || "OMR" || "PAB" || "PEN" || "PGK" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RSD" || "RUB" || "RWF" || "SAR" || "SBD" || "SCR" || "SDG" || "SGD" || "SHP" || "SLL" || "SOS" || "SRD" || "SSP" || "STN" || "SVC" || "SYP" || "SZL" || "THB" || "TJS" || "TMT" || "TND" || "TOP" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "UGX" || "USN" || "UYI" || "UYU" || "UZS" || "VEF" || "VND" || "VUV" || "WST" || "XAF" || "XCD" || "XDR" || "XOF" || "XPF" || "XSU" || "XUA" || "YER" || "ZAR" || "ZMW" || "ZWL", // required
 * //         Frequency: "Monthly", // required
 * //         TargetCompany: "STRING_VALUE", // required
 * //         EstimationUrl: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAwsOpportunitySummaryCommandInput - {@link GetAwsOpportunitySummaryCommandInput}
 * @returns {@link GetAwsOpportunitySummaryCommandOutput}
 * @see {@link GetAwsOpportunitySummaryCommandInput} for command's `input` shape.
 * @see {@link GetAwsOpportunitySummaryCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
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
export class GetAwsOpportunitySummaryCommand extends $Command
  .classBuilder<
    GetAwsOpportunitySummaryCommandInput,
    GetAwsOpportunitySummaryCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPartnerCentralSelling", "GetAwsOpportunitySummary", {})
  .n("PartnerCentralSellingClient", "GetAwsOpportunitySummaryCommand")
  .sc(GetAwsOpportunitySummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAwsOpportunitySummaryRequest;
      output: GetAwsOpportunitySummaryResponse;
    };
    sdk: {
      input: GetAwsOpportunitySummaryCommandInput;
      output: GetAwsOpportunitySummaryCommandOutput;
    };
  };
}
