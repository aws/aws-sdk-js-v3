// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetImageRecipePolicyRequest, GetImageRecipePolicyResponse } from "../models/models_0";
import { GetImageRecipePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetImageRecipePolicyCommand}.
 */
export interface GetImageRecipePolicyCommandInput extends GetImageRecipePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetImageRecipePolicyCommand}.
 */
export interface GetImageRecipePolicyCommandOutput extends GetImageRecipePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves an image recipe policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetImageRecipePolicyRequest
 *   imageRecipeArn: "STRING_VALUE", // required
 * };
 * const command = new GetImageRecipePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetImageRecipePolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImageRecipePolicyCommandInput - {@link GetImageRecipePolicyCommandInput}
 * @returns {@link GetImageRecipePolicyCommandOutput}
 * @see {@link GetImageRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link GetImageRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
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
 * @example Get the resource policy for an image recipe
 * ```javascript
 * // The following example retrieves the resource policy that's applied to the specified image recipe.
 * const input = {
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0"
 * };
 * const command = new GetImageRecipePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policy: `{"Version": "2012-10-17", "Statement": [{"Effect": "Allow", "Principal": {"AWS": "arn:aws:iam::444455556666:root"}, "Action": ["imagebuilder:GetImageRecipe", "imagebuilder:ListImageRecipes"], "Resource": "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0"}]}`,
 *   requestId: "0cf42efc-4b2c-4ba3-b6e3-542a796fffaf"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetImageRecipePolicyCommand extends command<GetImageRecipePolicyCommandInput, GetImageRecipePolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetImageRecipePolicy",
  GetImageRecipePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageRecipePolicyRequest;
      output: GetImageRecipePolicyResponse;
    };
    sdk: {
      input: GetImageRecipePolicyCommandInput;
      output: GetImageRecipePolicyCommandOutput;
    };
  };
}
