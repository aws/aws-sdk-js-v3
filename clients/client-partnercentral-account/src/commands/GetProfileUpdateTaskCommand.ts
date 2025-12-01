// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetProfileUpdateTaskRequest, GetProfileUpdateTaskResponse } from "../models/models_0";
import {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { GetProfileUpdateTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProfileUpdateTaskCommand}.
 */
export interface GetProfileUpdateTaskCommandInput extends GetProfileUpdateTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileUpdateTaskCommand}.
 */
export interface GetProfileUpdateTaskCommandOutput extends GetProfileUpdateTaskResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific profile update task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, GetProfileUpdateTaskCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, GetProfileUpdateTaskCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // GetProfileUpdateTaskRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetProfileUpdateTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileUpdateTaskResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   TaskId: "STRING_VALUE", // required
 * //   TaskDetails: { // TaskDetails
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
 * //   },
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   Status: "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED", // required
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   ErrorDetailList: [ // ErrorDetailList
 * //     { // ErrorDetail
 * //       Locale: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //       Reason: "INVALID_CONTENT" || "DUPLICATE_PROFILE" || "INVALID_LOGO" || "INVALID_LOGO_URL" || "INVALID_LOGO_FILE" || "INVALID_LOGO_SIZE" || "INVALID_WEBSITE_URL", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetProfileUpdateTaskCommandInput - {@link GetProfileUpdateTaskCommandInput}
 * @returns {@link GetProfileUpdateTaskCommandOutput}
 * @see {@link GetProfileUpdateTaskCommandInput} for command's `input` shape.
 * @see {@link GetProfileUpdateTaskCommandOutput} for command's `response` shape.
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
export class GetProfileUpdateTaskCommand extends $Command
  .classBuilder<
    GetProfileUpdateTaskCommandInput,
    GetProfileUpdateTaskCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "GetProfileUpdateTask", {})
  .n("PartnerCentralAccountClient", "GetProfileUpdateTaskCommand")
  .sc(GetProfileUpdateTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProfileUpdateTaskRequest;
      output: GetProfileUpdateTaskResponse;
    };
    sdk: {
      input: GetProfileUpdateTaskCommandInput;
      output: GetProfileUpdateTaskCommandOutput;
    };
  };
}
