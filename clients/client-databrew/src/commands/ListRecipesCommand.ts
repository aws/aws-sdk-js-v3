// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecipesRequest, ListRecipesResponse } from "../models/models_0";
import { ListRecipes } from "../schemas/schemas_7_Recipe";

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
 * <p>Lists all of the DataBrew recipes that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListRecipesCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListRecipesCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // ListRecipesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RecipeVersion: "STRING_VALUE",
 * };
 * const command = new ListRecipesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecipesResponse
 * //   Recipes: [ // RecipeList // required
 * //     { // Recipe
 * //       CreatedBy: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       ProjectName: "STRING_VALUE",
 * //       PublishedBy: "STRING_VALUE",
 * //       PublishedDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       ResourceArn: "STRING_VALUE",
 * //       Steps: [ // RecipeStepList
 * //         { // RecipeStep
 * //           Action: { // RecipeAction
 * //             Operation: "STRING_VALUE", // required
 * //             Parameters: { // ParameterMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           ConditionExpressions: [ // ConditionExpressionList
 * //             { // ConditionExpression
 * //               Condition: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE",
 * //               TargetColumn: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       RecipeVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecipesCommandInput - {@link ListRecipesCommandInput}
 * @returns {@link ListRecipesCommandOutput}
 * @see {@link ListRecipesCommandInput} for command's `input` shape.
 * @see {@link ListRecipesCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class ListRecipesCommand extends $Command
  .classBuilder<
    ListRecipesCommandInput,
    ListRecipesCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "ListRecipes", {})
  .n("DataBrewClient", "ListRecipesCommand")
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
