// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRecipesRequest, ListRecipesResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListRecipes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecipesCommand}.
 */
export interface ListRecipesCommandInput extends ListRecipesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecipesCommand}.
 */
export interface ListRecipesCommandOutput extends ListRecipesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of available recipes. The response provides the properties
 *        for each recipe, including the recipe's Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListRecipesCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListRecipesCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // ListRecipesRequest
 *   recipeProvider: "SERVICE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   domain: "ECOMMERCE" || "VIDEO_ON_DEMAND",
 * };
 * const command = new ListRecipesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecipesResponse
 * //   recipes: [ // Recipes
 * //     { // RecipeSummary
 * //       name: "STRING_VALUE",
 * //       recipeArn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       domain: "ECOMMERCE" || "VIDEO_ON_DEMAND",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecipesCommandInput - {@link ListRecipesCommandInput}
 * @returns {@link ListRecipesCommandOutput}
 * @see {@link ListRecipesCommandInput} for command's `input` shape.
 * @see {@link ListRecipesCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class ListRecipesCommand extends $Command
  .classBuilder<
    ListRecipesCommandInput,
    ListRecipesCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "ListRecipes", {})
  .n("PersonalizeClient", "ListRecipesCommand")
  .sc(ListRecipes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecipesRequest;
      output: ListRecipesResponse;
    };
    sdk: {
      input: ListRecipesCommandInput;
      output: ListRecipesCommandOutput;
    };
  };
}
