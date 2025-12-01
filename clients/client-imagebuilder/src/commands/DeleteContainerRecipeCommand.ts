// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import type { DeleteContainerRecipeRequest, DeleteContainerRecipeResponse } from "../models/models_0";
import { DeleteContainerRecipe } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a container recipe.</p>
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
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceDependencyException} (client fault)
 *  <p>You have attempted to mutate or delete a resource with a dependency that prohibits
 * 			this action. See the error message for more details.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @public
 */
export class DeleteContainerRecipeCommand extends $Command
  .classBuilder<
    DeleteContainerRecipeCommandInput,
    DeleteContainerRecipeCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "DeleteContainerRecipe", {})
  .n("ImagebuilderClient", "DeleteContainerRecipeCommand")
  .sc(DeleteContainerRecipe)
  .build() {
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
