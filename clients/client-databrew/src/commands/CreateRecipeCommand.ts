// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRecipeRequest, CreateRecipeResponse } from "../models/models_0";
import { de_CreateRecipeCommand, se_CreateRecipeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRecipeCommand}.
 */
export interface CreateRecipeCommandInput extends CreateRecipeRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecipeCommand}.
 */
export interface CreateRecipeCommandOutput extends CreateRecipeResponse, __MetadataBearer {}

/**
 * <p>Creates a new DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // CreateRecipeRequest
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Steps: [ // RecipeStepList // required
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
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRecipeCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecipeResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRecipeCommandInput - {@link CreateRecipeCommandInput}
 * @returns {@link CreateRecipeCommandOutput}
 * @see {@link CreateRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 * @public
 */
export class CreateRecipeCommand extends $Command
  .classBuilder<
    CreateRecipeCommandInput,
    CreateRecipeCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "CreateRecipe", {})
  .n("DataBrewClient", "CreateRecipeCommand")
  .f(void 0, void 0)
  .ser(se_CreateRecipeCommand)
  .de(de_CreateRecipeCommand)
  .build() {}
