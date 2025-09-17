// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecipeVersionsRequest, ListRecipeVersionsResponse } from "../models/models_0";
import { de_ListRecipeVersionsCommand, se_ListRecipeVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecipeVersionsCommand}.
 */
export interface ListRecipeVersionsCommandInput extends ListRecipeVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecipeVersionsCommand}.
 */
export interface ListRecipeVersionsCommandOutput extends ListRecipeVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions of a particular DataBrew recipe, except for
 *                 <code>LATEST_WORKING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListRecipeVersionsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListRecipeVersionsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // ListRecipeVersionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new ListRecipeVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecipeVersionsResponse
 * //   NextToken: "STRING_VALUE",
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
 * // };
 *
 * ```
 *
 * @param ListRecipeVersionsCommandInput - {@link ListRecipeVersionsCommandInput}
 * @returns {@link ListRecipeVersionsCommandOutput}
 * @see {@link ListRecipeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListRecipeVersionsCommandOutput} for command's `response` shape.
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
export class ListRecipeVersionsCommand extends $Command
  .classBuilder<
    ListRecipeVersionsCommandInput,
    ListRecipeVersionsCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "ListRecipeVersions", {})
  .n("DataBrewClient", "ListRecipeVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListRecipeVersionsCommand)
  .de(de_ListRecipeVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecipeVersionsRequest;
      output: ListRecipeVersionsResponse;
    };
    sdk: {
      input: ListRecipeVersionsCommandInput;
      output: ListRecipeVersionsCommandOutput;
    };
  };
}
