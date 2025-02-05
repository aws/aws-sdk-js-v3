// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetEngagementInvitationRequest,
  GetEngagementInvitationResponse,
  GetEngagementInvitationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_GetEngagementInvitationCommand, se_GetEngagementInvitationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEngagementInvitationCommand}.
 */
export interface GetEngagementInvitationCommandInput extends GetEngagementInvitationRequest {}
/**
 * @public
 *
 * The output of {@link GetEngagementInvitationCommand}.
 */
export interface GetEngagementInvitationCommandOutput extends GetEngagementInvitationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of an engagement invitation shared by AWS with a partner. The
 *             information includes aspects such as customer, project details, and lifecycle
 *             information. To connect an engagement invitation with an opportunity, match the
 *             invitation’s <code>Payload.Project.Title</code> with opportunity
 *                 <code>Project.Title</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, GetEngagementInvitationCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, GetEngagementInvitationCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // GetEngagementInvitationRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetEngagementInvitationCommand(input);
 * const response = await client.send(command);
 * // { // GetEngagementInvitationResponse
 * //   Arn: "STRING_VALUE",
 * //   PayloadType: "OpportunityInvitation",
 * //   Id: "STRING_VALUE", // required
 * //   EngagementId: "STRING_VALUE",
 * //   EngagementTitle: "STRING_VALUE",
 * //   Status: "ACCEPTED" || "PENDING" || "REJECTED" || "EXPIRED",
 * //   InvitationDate: new Date("TIMESTAMP"),
 * //   ExpirationDate: new Date("TIMESTAMP"),
 * //   SenderAwsAccountId: "STRING_VALUE",
 * //   SenderCompanyName: "STRING_VALUE",
 * //   Receiver: { // Receiver Union: only one key present
 * //     Account: { // AccountReceiver
 * //       Alias: "STRING_VALUE",
 * //       AwsAccountId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Catalog: "STRING_VALUE", // required
 * //   RejectionReason: "STRING_VALUE",
 * //   Payload: { // Payload Union: only one key present
 * //     OpportunityInvitation: { // OpportunityInvitationPayload
 * //       SenderContacts: [ // SenderContactList
 * //         { // SenderContact
 * //           Email: "STRING_VALUE", // required
 * //           FirstName: "STRING_VALUE",
 * //           LastName: "STRING_VALUE",
 * //           BusinessTitle: "STRING_VALUE",
 * //           Phone: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReceiverResponsibilities: [ // ReceiverResponsibilityList // required
 * //         "Distributor" || "Reseller" || "Hardware Partner" || "Managed Service Provider" || "Software Partner" || "Services Partner" || "Training Partner" || "Co-Sell Facilitator" || "Facilitator",
 * //       ],
 * //       Customer: { // EngagementCustomer
 * //         Industry: "Aerospace" || "Agriculture" || "Automotive" || "Computers and Electronics" || "Consumer Goods" || "Education" || "Energy - Oil and Gas" || "Energy - Power and Utilities" || "Financial Services" || "Gaming" || "Government" || "Healthcare" || "Hospitality" || "Life Sciences" || "Manufacturing" || "Marketing and Advertising" || "Media and Entertainment" || "Mining" || "Non-Profit Organization" || "Professional Services" || "Real Estate and Construction" || "Retail" || "Software and Internet" || "Telecommunications" || "Transportation and Logistics" || "Travel" || "Wholesale and Distribution" || "Other", // required
 * //         CompanyName: "STRING_VALUE", // required
 * //         WebsiteUrl: "STRING_VALUE", // required
 * //         CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW", // required
 * //       },
 * //       Project: { // ProjectDetails
 * //         BusinessProblem: "STRING_VALUE", // required
 * //         Title: "STRING_VALUE", // required
 * //         TargetCompletionDate: "STRING_VALUE", // required
 * //         ExpectedCustomerSpend: [ // ExpectedCustomerSpendList // required
 * //           { // ExpectedCustomerSpend
 * //             Amount: "STRING_VALUE", // required
 * //             CurrencyCode: "USD" || "EUR" || "GBP" || "AUD" || "CAD" || "CNY" || "NZD" || "INR" || "JPY" || "CHF" || "SEK" || "AED" || "AFN" || "ALL" || "AMD" || "ANG" || "AOA" || "ARS" || "AWG" || "AZN" || "BAM" || "BBD" || "BDT" || "BGN" || "BHD" || "BIF" || "BMD" || "BND" || "BOB" || "BOV" || "BRL" || "BSD" || "BTN" || "BWP" || "BYN" || "BZD" || "CDF" || "CHE" || "CHW" || "CLF" || "CLP" || "COP" || "COU" || "CRC" || "CUC" || "CUP" || "CVE" || "CZK" || "DJF" || "DKK" || "DOP" || "DZD" || "EGP" || "ERN" || "ETB" || "FJD" || "FKP" || "GEL" || "GHS" || "GIP" || "GMD" || "GNF" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "IQD" || "IRR" || "ISK" || "JMD" || "JOD" || "KES" || "KGS" || "KHR" || "KMF" || "KPW" || "KRW" || "KWD" || "KYD" || "KZT" || "LAK" || "LBP" || "LKR" || "LRD" || "LSL" || "LYD" || "MAD" || "MDL" || "MGA" || "MKD" || "MMK" || "MNT" || "MOP" || "MRU" || "MUR" || "MVR" || "MWK" || "MXN" || "MXV" || "MYR" || "MZN" || "NAD" || "NGN" || "NIO" || "NOK" || "NPR" || "OMR" || "PAB" || "PEN" || "PGK" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RSD" || "RUB" || "RWF" || "SAR" || "SBD" || "SCR" || "SDG" || "SGD" || "SHP" || "SLL" || "SOS" || "SRD" || "SSP" || "STN" || "SVC" || "SYP" || "SZL" || "THB" || "TJS" || "TMT" || "TND" || "TOP" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "UGX" || "USN" || "UYI" || "UYU" || "UZS" || "VEF" || "VND" || "VUV" || "WST" || "XAF" || "XCD" || "XDR" || "XOF" || "XPF" || "XSU" || "XUA" || "YER" || "ZAR" || "ZMW" || "ZWL", // required
 * //             Frequency: "Monthly", // required
 * //             TargetCompany: "STRING_VALUE", // required
 * //             EstimationUrl: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   InvitationMessage: "STRING_VALUE",
 * //   EngagementDescription: "STRING_VALUE",
 * //   ExistingMembers: [ // EngagementMemberSummaries
 * //     { // EngagementMemberSummary
 * //       CompanyName: "STRING_VALUE",
 * //       WebsiteUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEngagementInvitationCommandInput - {@link GetEngagementInvitationCommandInput}
 * @returns {@link GetEngagementInvitationCommandOutput}
 * @see {@link GetEngagementInvitationCommandInput} for command's `input` shape.
 * @see {@link GetEngagementInvitationCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested
 *             action.</p>
 *          <p>You don’t have access to this action or resource. Review IAM policies or contact your
 *             AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist.
 *             Resource ID and type might be incorrect.</p>
 *          <p>Suggested action: This is usually a transient error. Retry after the provided retry
 *             delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not
 *             exist, or isn't visible with the current credentials.</p>
 *          <p>Suggested action: Verify that the resource ID is correct and the resource is in the
 *             expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas
 *             and adapt your usage to avoid throttling.</p>
 *          <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business
 *             validation rules.</p>
 *          <p>Suggested action: Review the error message, including the failed fields and reasons,
 *             to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 * @public
 */
export class GetEngagementInvitationCommand extends $Command
  .classBuilder<
    GetEngagementInvitationCommandInput,
    GetEngagementInvitationCommandOutput,
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
  .s("AWSPartnerCentralSelling", "GetEngagementInvitation", {})
  .n("PartnerCentralSellingClient", "GetEngagementInvitationCommand")
  .f(void 0, GetEngagementInvitationResponseFilterSensitiveLog)
  .ser(se_GetEngagementInvitationCommand)
  .de(de_GetEngagementInvitationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEngagementInvitationRequest;
      output: GetEngagementInvitationResponse;
    };
    sdk: {
      input: GetEngagementInvitationCommandInput;
      output: GetEngagementInvitationCommandOutput;
    };
  };
}
