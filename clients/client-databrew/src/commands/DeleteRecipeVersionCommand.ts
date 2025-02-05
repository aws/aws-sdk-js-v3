// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRecipeVersionRequest, DeleteRecipeVersionResponse } from "../models/models_0";
import { de_DeleteRecipeVersionCommand, se_DeleteRecipeVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRecipeVersionCommand}.
 */
export interface DeleteRecipeVersionCommandInput extends DeleteRecipeVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecipeVersionCommand}.
 */
export interface DeleteRecipeVersionCommandOutput extends DeleteRecipeVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a single version of a DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteRecipeVersionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteRecipeVersionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataBrewClient(config);
 * const input = { // DeleteRecipeVersionRequest
 *   Name: "STRING_VALUE", // required
 *   RecipeVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecipeVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRecipeVersionResponse
 * //   Name: "STRING_VALUE", // required
 * //   RecipeVersion: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteRecipeVersionCommandInput - {@link DeleteRecipeVersionCommandInput}
 * @returns {@link DeleteRecipeVersionCommandOutput}
 * @see {@link DeleteRecipeVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteRecipeVersionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class DeleteRecipeVersionCommand extends $Command
  .classBuilder<
    DeleteRecipeVersionCommandInput,
    DeleteRecipeVersionCommandOutput,
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
  .s("AWSGlueDataBrew", "DeleteRecipeVersion", {})
  .n("DataBrewClient", "DeleteRecipeVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRecipeVersionCommand)
  .de(de_DeleteRecipeVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecipeVersionRequest;
      output: DeleteRecipeVersionResponse;
    };
    sdk: {
      input: DeleteRecipeVersionCommandInput;
      output: DeleteRecipeVersionCommandOutput;
    };
  };
}
