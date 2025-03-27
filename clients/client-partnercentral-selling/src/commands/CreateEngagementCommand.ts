// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateEngagementRequest,
  CreateEngagementRequestFilterSensitiveLog,
  CreateEngagementResponse,
} from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_CreateEngagementCommand, se_CreateEngagementCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEngagementCommand}.
 */
export interface CreateEngagementCommandInput extends CreateEngagementRequest {}
/**
 * @public
 *
 * The output of {@link CreateEngagementCommand}.
 */
export interface CreateEngagementCommandOutput extends CreateEngagementResponse, __MetadataBearer {}

/**
 * <p>The <code>CreateEngagement</code> action allows you to create an
 *                 <code>Engagement</code>, which serves as a collaborative space between different
 *             parties such as AWS Partners and AWS Sellers. This action automatically adds the
 *             caller's AWS account as an active member of the newly created
 *             <code>Engagement</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, CreateEngagementCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, CreateEngagementCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // CreateEngagementRequest
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   Title: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Contexts: [ // EngagementContexts
 *     { // EngagementContextDetails
 *       Type: "CustomerProject", // required
 *       Payload: { // EngagementContextPayload Union: only one key present
 *         CustomerProject: { // CustomerProjectsContext
 *           Customer: { // EngagementCustomer
 *             Industry: "Aerospace" || "Agriculture" || "Automotive" || "Computers and Electronics" || "Consumer Goods" || "Education" || "Energy - Oil and Gas" || "Energy - Power and Utilities" || "Financial Services" || "Gaming" || "Government" || "Healthcare" || "Hospitality" || "Life Sciences" || "Manufacturing" || "Marketing and Advertising" || "Media and Entertainment" || "Mining" || "Non-Profit Organization" || "Professional Services" || "Real Estate and Construction" || "Retail" || "Software and Internet" || "Telecommunications" || "Transportation and Logistics" || "Travel" || "Wholesale and Distribution" || "Other", // required
 *             CompanyName: "STRING_VALUE", // required
 *             WebsiteUrl: "STRING_VALUE", // required
 *             CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW", // required
 *           },
 *           Project: { // EngagementCustomerProjectDetails
 *             Title: "STRING_VALUE", // required
 *             BusinessProblem: "STRING_VALUE", // required
 *             TargetCompletionDate: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateEngagementCommand(input);
 * const response = await client.send(command);
 * // { // CreateEngagementResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEngagementCommandInput - {@link CreateEngagementCommandInput}
 * @returns {@link CreateEngagementCommandOutput}
 * @see {@link CreateEngagementCommandInput} for command's `input` shape.
 * @see {@link CreateEngagementCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested
 *             action.</p>
 *          <p>You don’t have access to this action or resource. Review IAM policies or contact your
 *             AWS administrator for assistance.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This error occurs when the request can’t be processed due to a conflict with the
 *             target resource's current state, which could result from updating or deleting the
 *             resource.</p>
 *          <p>Suggested action: Fetch the latest state of the resource, verify the state, and retry
 *             the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not
 *             exist, or isn't visible with the current credentials.</p>
 *          <p>Suggested action: Verify that the resource ID is correct and the resource is in the
 *             expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This error occurs when the request would cause a service quota to be exceeded. Service
 *             quotas represent the maximum allowed use of a specific resource, and this error
 *             indicates that the request would surpass that limit.</p>
 *          <p>Suggested action: Review the <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> for the
 *             resource, and either reduce usage or request a quota increase.</p>
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
 *
 * @public
 */
export class CreateEngagementCommand extends $Command
  .classBuilder<
    CreateEngagementCommandInput,
    CreateEngagementCommandOutput,
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
  .s("AWSPartnerCentralSelling", "CreateEngagement", {})
  .n("PartnerCentralSellingClient", "CreateEngagementCommand")
  .f(CreateEngagementRequestFilterSensitiveLog, void 0)
  .ser(se_CreateEngagementCommand)
  .de(de_CreateEngagementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEngagementRequest;
      output: CreateEngagementResponse;
    };
    sdk: {
      input: CreateEngagementCommandInput;
      output: CreateEngagementCommandOutput;
    };
  };
}
