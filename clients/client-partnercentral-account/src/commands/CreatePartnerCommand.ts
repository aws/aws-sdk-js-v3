// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePartnerRequest, CreatePartnerResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { CreatePartner } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePartnerCommand}.
 */
export interface CreatePartnerCommandInput extends CreatePartnerRequest {}
/**
 * @public
 *
 * The output of {@link CreatePartnerCommand}.
 */
export interface CreatePartnerCommandOutput extends CreatePartnerResponse, __MetadataBearer {}

/**
 * <p>Creates a new partner account in the AWS Partner Network with the specified details and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, CreatePartnerCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, CreatePartnerCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // CreatePartnerRequest
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   LegalName: "STRING_VALUE", // required
 *   PrimarySolutionType: "SOFTWARE_PRODUCTS" || "CONSULTING_SERVICES" || "PROFESSIONAL_SERVICES" || "MANAGED_SERVICES" || "HARDWARE_PRODUCTS" || "COMMUNICATION_SERVICES" || "VALUE_ADDED_RESALE_AWS_SERVICES" || "TRAINING_SERVICES", // required
 *   AllianceLeadContact: { // AllianceLeadContact
 *     FirstName: "STRING_VALUE", // required
 *     LastName: "STRING_VALUE", // required
 *     Email: "STRING_VALUE", // required
 *     BusinessTitle: "STRING_VALUE", // required
 *   },
 *   EmailVerificationCode: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePartnerCommand(input);
 * const response = await client.send(command);
 * // { // CreatePartnerResponse
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
 * //   AllianceLeadContact: { // AllianceLeadContact
 * //     FirstName: "STRING_VALUE", // required
 * //     LastName: "STRING_VALUE", // required
 * //     Email: "STRING_VALUE", // required
 * //     BusinessTitle: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePartnerCommandInput - {@link CreatePartnerCommandInput}
 * @returns {@link CreatePartnerCommandOutput}
 * @see {@link CreatePartnerCommandInput} for command's `input` shape.
 * @see {@link CreatePartnerCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. This typically occurs when trying to create a resource that already exists or modify a resource that has been changed by another process.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
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
export class CreatePartnerCommand extends $Command
  .classBuilder<
    CreatePartnerCommandInput,
    CreatePartnerCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "CreatePartner", {})
  .n("PartnerCentralAccountClient", "CreatePartnerCommand")
  .sc(CreatePartner)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePartnerRequest;
      output: CreatePartnerResponse;
    };
    sdk: {
      input: CreatePartnerCommandInput;
      output: CreatePartnerCommandOutput;
    };
  };
}
