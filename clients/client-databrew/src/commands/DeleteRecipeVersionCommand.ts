// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRecipeVersionRequest, DeleteRecipeVersionResponse } from "../models/models_0";
import { DeleteRecipeVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a single version of a DataBrew recipe.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteRecipeVersionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteRecipeVersionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
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
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters for this request failed validation.
 *
 * @throws {@link DataBrewServiceException}
 *
 * Base exception class for all service exceptions from DataBrew service.
 *
 * @public
 */
export class DeleteRecipeVersionCommand extends command<DeleteRecipeVersionCommandInput, DeleteRecipeVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRecipeVersion",
  DeleteRecipeVersion$
) {
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
