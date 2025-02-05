// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRecipeRequest, DescribeRecipeResponse } from "../models/models_0";
import { de_DescribeRecipeCommand, se_DescribeRecipeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecipeCommand}.
 */
export interface DescribeRecipeCommandInput extends DescribeRecipeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecipeCommand}.
 */
export interface DescribeRecipeCommandOutput extends DescribeRecipeResponse, __MetadataBearer {}

/**
 * <p>Returns the definition of a specific DataBrew recipe corresponding to a particular
 *             version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataBrewClient(config);
 * const input = { // DescribeRecipeRequest
 *   Name: "STRING_VALUE", // required
 *   RecipeVersion: "STRING_VALUE",
 * };
 * const command = new DescribeRecipeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecipeResponse
 * //   CreatedBy: "STRING_VALUE",
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   LastModifiedBy: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   ProjectName: "STRING_VALUE",
 * //   PublishedBy: "STRING_VALUE",
 * //   PublishedDate: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Name: "STRING_VALUE", // required
 * //   Steps: [ // RecipeStepList
 * //     { // RecipeStep
 * //       Action: { // RecipeAction
 * //         Operation: "STRING_VALUE", // required
 * //         Parameters: { // ParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       ConditionExpressions: [ // ConditionExpressionList
 * //         { // ConditionExpression
 * //           Condition: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //           TargetColumn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ResourceArn: "STRING_VALUE",
 * //   RecipeVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRecipeCommandInput - {@link DescribeRecipeCommandInput}
 * @returns {@link DescribeRecipeCommandOutput}
 * @see {@link DescribeRecipeCommandInput} for command's `input` shape.
 * @see {@link DescribeRecipeCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeRecipeCommand extends $Command
  .classBuilder<
    DescribeRecipeCommandInput,
    DescribeRecipeCommandOutput,
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
  .s("AWSGlueDataBrew", "DescribeRecipe", {})
  .n("DataBrewClient", "DescribeRecipeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRecipeCommand)
  .de(de_DescribeRecipeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecipeRequest;
      output: DescribeRecipeResponse;
    };
    sdk: {
      input: DescribeRecipeCommandInput;
      output: DescribeRecipeCommandOutput;
    };
  };
}
