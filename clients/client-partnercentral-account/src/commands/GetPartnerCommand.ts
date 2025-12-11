// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPartnerRequest, GetPartnerResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { GetPartner } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPartnerCommand}.
 */
export interface GetPartnerCommandInput extends GetPartnerRequest {}
/**
 * @public
 *
 * The output of {@link GetPartnerCommand}.
 */
export interface GetPartnerCommandOutput extends GetPartnerResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific partner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, GetPartnerCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, GetPartnerCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // GetPartnerRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetPartnerCommand(input);
 * const response = await client.send(command);
 * // { // GetPartnerResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   LegalName: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   Profile: { // PartnerProfile
 * //     DisplayName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE", // required
 * //     WebsiteUrl: "STRING_VALUE", // required
 * //     LogoUrl: "STRING_VALUE", // required
 * //     PrimarySolutionType: "SOFTWARE_PRODUCTS" || "CONSULTING_SERVICES" || "PROFESSIONAL_SERVICES" || "MANAGED_SERVICES" || "HARDWARE_PRODUCTS" || "COMMUNICATION_SERVICES" || "VALUE_ADDED_RESALE_AWS_SERVICES" || "TRAINING_SERVICES", // required
 * //     IndustrySegments: [ // IndustrySegmentList // required
 * //       "AGRICULTURE_MINING" || "BIOTECHNOLOGY" || "BUSINESS_CONSUMER_SERVICES" || "BUSINESS_SERV" || "COMMUNICATIONS" || "COMPUTER_HARDWARE" || "COMPUTERS_ELECTRONICS" || "COMPUTER_SOFTWARE" || "CONSUMER_GOODS" || "CONSUMER_RELATED" || "EDUCATION" || "ENERGY_UTILITIES" || "FINANCIAL_SERVICES" || "GAMING" || "GOVERNMENT" || "GOVERNMENT_EDUCATION_PUBLIC_SERVICES" || "HEALTHCARE" || "HEALTHCARE_PHARMACEUTICALS_BIOTECH" || "INDUSTRIAL_ENERGY" || "INTERNET_SPECIFIC" || "LIFE_SCIENCES" || "MANUFACTURING" || "MEDIA_ENTERTAINMENT_LEISURE" || "MEDIA_ENTERTAINMENT" || "MEDICAL_HEALTH" || "NON_PROFIT_ORGANIZATION" || "OTHER" || "PROFESSIONAL_SERVICES" || "REAL_ESTATE_CONSTRUCTION" || "RETAIL" || "RETAIL_WHOLESALE_DISTRIBUTION" || "SEMICONDUCTOR_ELECTR" || "SOFTWARE_INTERNET" || "TELECOMMUNICATIONS" || "TRANSPORTATION_LOGISTICS" || "TRAVEL_HOSPITALITY" || "WHOLESALE_DISTRIBUTION",
 * //     ],
 * //     TranslationSourceLocale: "STRING_VALUE", // required
 * //     LocalizedContents: [ // LocalizedContentList
 * //       { // LocalizedContent
 * //         DisplayName: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE", // required
 * //         WebsiteUrl: "STRING_VALUE", // required
 * //         LogoUrl: "STRING_VALUE", // required
 * //         Locale: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ProfileId: "STRING_VALUE",
 * //   },
 * //   AwsTrainingCertificationEmailDomains: [ // PartnerDomainList
 * //     { // PartnerDomain
 * //       DomainName: "STRING_VALUE", // required
 * //       RegisteredAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPartnerCommandInput - {@link GetPartnerCommandInput}
 * @returns {@link GetPartnerCommandOutput}
 * @see {@link GetPartnerCommandInput} for command's `input` shape.
 * @see {@link GetPartnerCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. This may occur when referencing a resource that does not exist or has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.</p>
 *
 * @throws {@link PartnerCentralAccountServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralAccount service.</p>
 *
 *
 * @public
 */
export class GetPartnerCommand extends $Command
  .classBuilder<
    GetPartnerCommandInput,
    GetPartnerCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "GetPartner", {})
  .n("PartnerCentralAccountClient", "GetPartnerCommand")
  .sc(GetPartner)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPartnerRequest;
      output: GetPartnerResponse;
    };
    sdk: {
      input: GetPartnerCommandInput;
      output: GetPartnerCommandOutput;
    };
  };
}
