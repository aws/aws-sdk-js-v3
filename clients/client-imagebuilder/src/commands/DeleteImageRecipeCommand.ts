// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteImageRecipeRequest, DeleteImageRecipeResponse } from "../models/models_0";
import { DeleteImageRecipe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteImageRecipeCommand}.
 */
export interface DeleteImageRecipeCommandInput extends DeleteImageRecipeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImageRecipeCommand}.
 */
export interface DeleteImageRecipeCommandOutput extends DeleteImageRecipeResponse, __MetadataBearer {}

/**
 * <p>Deletes an image recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // DeleteImageRecipeRequest
 *   imageRecipeArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteImageRecipeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteImageRecipeResponse
 * //   requestId: "STRING_VALUE",
 * //   imageRecipeArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteImageRecipeCommandInput - {@link DeleteImageRecipeCommandInput}
 * @returns {@link DeleteImageRecipeCommandOutput}
 * @see {@link DeleteImageRecipeCommandInput} for command's `input` shape.
 * @see {@link DeleteImageRecipeCommandOutput} for command's `response` shape.
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
 * @example Delete an image recipe
 * ```javascript
 * // The following example deletes the specified image recipe version.
 * const input = {
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0"
 * };
 * const command = new DeleteImageRecipeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0",
 *   requestId: "a27ae6de-0adc-4cbb-9705-a4b8751857b8"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteImageRecipeCommand extends command<DeleteImageRecipeCommandInput, DeleteImageRecipeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteImageRecipe",
  DeleteImageRecipe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImageRecipeRequest;
      output: DeleteImageRecipeResponse;
    };
    sdk: {
      input: DeleteImageRecipeCommandInput;
      output: DeleteImageRecipeCommandOutput;
    };
  };
}
