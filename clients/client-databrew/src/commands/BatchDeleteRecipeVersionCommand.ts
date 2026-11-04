// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteRecipeVersionRequest, BatchDeleteRecipeVersionResponse } from "../models/models_0";
import { BatchDeleteRecipeVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteRecipeVersionCommand}.
 */
export interface BatchDeleteRecipeVersionCommandInput extends BatchDeleteRecipeVersionRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteRecipeVersionCommand}.
 */
export interface BatchDeleteRecipeVersionCommandOutput extends BatchDeleteRecipeVersionResponse, __MetadataBearer {}

/**
 * Deletes one or more versions of a recipe at a time.
 *
 * The entire request will be rejected if:
 *
 * - The recipe does not exist.
 * - There is an invalid version identifier in the list of versions.
 * - The version list is empty.
 * - The version list size exceeds 50.
 * - The version list contains duplicate entries.
 *
 * The request will complete successfully, but with partial failures, if:
 *
 * - A version does not exist.
 * - A version is being used by a job.
 * - You specify `LATEST_WORKING`, but it's being used by a project.
 * - The version fails to be deleted.
 *
 * The `LATEST_WORKING` version will only be deleted if the recipe has no other versions. If you try to delete `LATEST_WORKING` while other versions exist (or if they can't be deleted), then `LATEST_WORKING` will be listed as partial failure in the response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, BatchDeleteRecipeVersionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, BatchDeleteRecipeVersionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // BatchDeleteRecipeVersionRequest
 *   Name: "STRING_VALUE", // required
 *   RecipeVersions: [ // RecipeVersionList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteRecipeVersionCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteRecipeVersionResponse
 * //   Name: "STRING_VALUE", // required
 * //   Errors: [ // RecipeErrorList
 * //     { // RecipeVersionErrorDetail
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       RecipeVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteRecipeVersionCommandInput - {@link BatchDeleteRecipeVersionCommandInput}
 * @returns {@link BatchDeleteRecipeVersionCommandOutput}
 * @see {@link BatchDeleteRecipeVersionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteRecipeVersionCommandOutput} for command's `response` shape.
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
export class BatchDeleteRecipeVersionCommand extends command<BatchDeleteRecipeVersionCommandInput, BatchDeleteRecipeVersionCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteRecipeVersion",
  BatchDeleteRecipeVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteRecipeVersionRequest;
      output: BatchDeleteRecipeVersionResponse;
    };
    sdk: {
      input: BatchDeleteRecipeVersionCommandInput;
      output: BatchDeleteRecipeVersionCommandOutput;
    };
  };
}
