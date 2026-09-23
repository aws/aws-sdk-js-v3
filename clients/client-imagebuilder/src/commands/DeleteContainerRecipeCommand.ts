// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContainerRecipeRequest, DeleteContainerRecipeResponse } from "../models/models_0";
import { DeleteContainerRecipe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContainerRecipeCommand}.
 */
export interface DeleteContainerRecipeCommandInput extends DeleteContainerRecipeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContainerRecipeCommand}.
 */
export interface DeleteContainerRecipeCommandOutput extends DeleteContainerRecipeResponse, __MetadataBearer {}

/**
 * <p>Deletes a container recipe. The request fails with
 * 			<code>ResourceDependencyException</code> if the recipe is shared with other
 * 			accounts, or if an image pipeline references it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteContainerRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteContainerRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // DeleteContainerRecipeRequest
 *   containerRecipeArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteContainerRecipeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteContainerRecipeResponse
 * //   requestId: "STRING_VALUE",
 * //   containerRecipeArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteContainerRecipeCommandInput - {@link DeleteContainerRecipeCommandInput}
 * @returns {@link DeleteContainerRecipeCommandOutput}
 * @see {@link DeleteContainerRecipeCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceDependencyException} (client fault)
 *  <p>You have attempted to mutate or delete a resource with a dependency that prohibits
 * 			this action. See the error message for more details.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Delete a container recipe
 * ```javascript
 * // The following example deletes the specified container recipe.
 * const input = {
 *   containerRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.0"
 * };
 * const command = new DeleteContainerRecipeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   containerRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.0",
 *   requestId: "988e934a-b785-4705-aff1-4d9840a165aa"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteContainerRecipeCommand extends command<DeleteContainerRecipeCommandInput, DeleteContainerRecipeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContainerRecipe",
  DeleteContainerRecipe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContainerRecipeRequest;
      output: DeleteContainerRecipeResponse;
    };
    sdk: {
      input: DeleteContainerRecipeCommandInput;
      output: DeleteContainerRecipeCommandOutput;
    };
  };
}
