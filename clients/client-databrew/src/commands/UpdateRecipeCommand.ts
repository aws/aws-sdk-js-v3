// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRecipeRequest, UpdateRecipeResponse } from "../models/models_0";
import { UpdateRecipe } from "../schemas/schemas_4_Recipe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecipeCommand}.
 */
export interface UpdateRecipeCommandInput extends UpdateRecipeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecipeCommand}.
 */
export interface UpdateRecipeCommandOutput extends UpdateRecipeResponse, __MetadataBearer {}

/**
 * <p>Modifies the definition of the <code>LATEST_WORKING</code> version of a DataBrew
 *             recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // UpdateRecipeRequest
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Steps: [ // RecipeStepList
 *     { // RecipeStep
 *       Action: { // RecipeAction
 *         Operation: "STRING_VALUE", // required
 *         Parameters: { // ParameterMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       ConditionExpressions: [ // ConditionExpressionList
 *         { // ConditionExpression
 *           Condition: "STRING_VALUE", // required
 *           Value: "STRING_VALUE",
 *           TargetColumn: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateRecipeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecipeResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateRecipeCommandInput - {@link UpdateRecipeCommandInput}
 * @returns {@link UpdateRecipeCommandOutput}
 * @see {@link UpdateRecipeCommandInput} for command's `input` shape.
 * @see {@link UpdateRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
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
export class UpdateRecipeCommand extends $Command
  .classBuilder<
    UpdateRecipeCommandInput,
    UpdateRecipeCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "UpdateRecipe", {})
  .n("DataBrewClient", "UpdateRecipeCommand")
  .sc(UpdateRecipe)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecipeRequest;
      output: UpdateRecipeResponse;
    };
    sdk: {
      input: UpdateRecipeCommandInput;
      output: UpdateRecipeCommandOutput;
    };
  };
}
