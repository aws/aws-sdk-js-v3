// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetProfileRecommendationsRequest, GetProfileRecommendationsResponse } from "../models/models_0";
import { GetProfileRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProfileRecommendationsCommand}.
 */
export interface GetProfileRecommendationsCommandInput extends GetProfileRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileRecommendationsCommand}.
 */
export interface GetProfileRecommendationsCommandOutput extends GetProfileRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Fetches the recommendations for a profile in the input Customer Profiles domain. Fetches all the profile recommendations </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileRecommendationsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileRecommendationsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetProfileRecommendationsRequest
 *   DomainName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 *   RecommenderName: "STRING_VALUE", // required
 *   Context: { // RecommenderContext
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 * };
 * const command = new GetProfileRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileRecommendationsResponse
 * //   Recommendations: [ // Recommendations
 * //     { // Recommendation
 * //       CatalogItem: { // CatalogItem
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Code: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         Category: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         AdditionalInformation: "STRING_VALUE",
 * //         ImageLink: "STRING_VALUE",
 * //         Link: "STRING_VALUE",
 * //         CreatedAt: new Date("TIMESTAMP"),
 * //         UpdatedAt: new Date("TIMESTAMP"),
 * //         Price: "STRING_VALUE",
 * //         Attributes: { // Attributes
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       Score: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetProfileRecommendationsCommandInput - {@link GetProfileRecommendationsCommandInput}
 * @returns {@link GetProfileRecommendationsCommandOutput}
 * @see {@link GetProfileRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetProfileRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class GetProfileRecommendationsCommand extends $Command
  .classBuilder<
    GetProfileRecommendationsCommandInput,
    GetProfileRecommendationsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetProfileRecommendations", {})
  .n("CustomerProfilesClient", "GetProfileRecommendationsCommand")
  .sc(GetProfileRecommendations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProfileRecommendationsRequest;
      output: GetProfileRecommendationsResponse;
    };
    sdk: {
      input: GetProfileRecommendationsCommandInput;
      output: GetProfileRecommendationsCommandOutput;
    };
  };
}
