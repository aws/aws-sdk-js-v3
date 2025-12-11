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
import type { ListRecommenderRecipesRequest, ListRecommenderRecipesResponse } from "../models/models_0";
import { ListRecommenderRecipes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommenderRecipesCommand}.
 */
export interface ListRecommenderRecipesCommandInput extends ListRecommenderRecipesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommenderRecipesCommand}.
 */
export interface ListRecommenderRecipesCommandOutput extends ListRecommenderRecipesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of available recommender recipes that can be used to create recommenders.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListRecommenderRecipesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListRecommenderRecipesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListRecommenderRecipesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommenderRecipesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommenderRecipesResponse
 * //   NextToken: "STRING_VALUE",
 * //   RecommenderRecipes: [ // RecommenderRecipesList
 * //     { // RecommenderRecipe
 * //       name: "recommended-for-you" || "similar-items" || "frequently-paired-items" || "popular-items" || "trending-now",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecommenderRecipesCommandInput - {@link ListRecommenderRecipesCommandInput}
 * @returns {@link ListRecommenderRecipesCommandOutput}
 * @see {@link ListRecommenderRecipesCommandInput} for command's `input` shape.
 * @see {@link ListRecommenderRecipesCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class ListRecommenderRecipesCommand extends $Command
  .classBuilder<
    ListRecommenderRecipesCommandInput,
    ListRecommenderRecipesCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListRecommenderRecipes", {})
  .n("CustomerProfilesClient", "ListRecommenderRecipesCommand")
  .sc(ListRecommenderRecipes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommenderRecipesRequest;
      output: ListRecommenderRecipesResponse;
    };
    sdk: {
      input: ListRecommenderRecipesCommandInput;
      output: ListRecommenderRecipesCommandOutput;
    };
  };
}
