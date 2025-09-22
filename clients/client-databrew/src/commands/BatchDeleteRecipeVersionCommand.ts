// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteRecipeVersionRequest, BatchDeleteRecipeVersionResponse } from "../models/models_0";
import { BatchDeleteRecipeVersion } from "../schemas/schemas_7_Recipe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes one or more versions of a recipe at a time.</p>
 *          <p>The entire request will be rejected if:</p>
 *          <ul>
 *             <li>
 *                <p>The recipe does not exist.</p>
 *             </li>
 *             <li>
 *                <p>There is an invalid version identifier in the list of versions.</p>
 *             </li>
 *             <li>
 *                <p>The version list is empty.</p>
 *             </li>
 *             <li>
 *                <p>The version list size exceeds 50.</p>
 *             </li>
 *             <li>
 *                <p>The version list contains duplicate entries.</p>
 *             </li>
 *          </ul>
 *          <p>The request will complete successfully, but with partial failures, if:</p>
 *          <ul>
 *             <li>
 *                <p>A version does not exist.</p>
 *             </li>
 *             <li>
 *                <p>A version is being used by a job.</p>
 *             </li>
 *             <li>
 *                <p>You specify <code>LATEST_WORKING</code>, but it's being used by a
 *                     project.</p>
 *             </li>
 *             <li>
 *                <p>The version fails to be deleted.</p>
 *             </li>
 *          </ul>
 *          <p>The <code>LATEST_WORKING</code> version will only be deleted if the recipe has no
 *             other versions. If you try to delete <code>LATEST_WORKING</code> while other versions
 *             exist (or if they can't be deleted), then <code>LATEST_WORKING</code> will be listed as
 *             partial failure in the response.</p>
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
 *
 * @public
 */
export class BatchDeleteRecipeVersionCommand extends $Command
  .classBuilder<
    BatchDeleteRecipeVersionCommandInput,
    BatchDeleteRecipeVersionCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "BatchDeleteRecipeVersion", {})
  .n("DataBrewClient", "BatchDeleteRecipeVersionCommand")
  .sc(BatchDeleteRecipeVersion)
  .build() {
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
