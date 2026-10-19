// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContainerRecipePolicyRequest, GetContainerRecipePolicyResponse } from "../models/models_0";
import { GetContainerRecipePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContainerRecipePolicyCommand}.
 */
export interface GetContainerRecipePolicyCommandInput extends GetContainerRecipePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerRecipePolicyCommand}.
 */
export interface GetContainerRecipePolicyCommandOutput extends GetContainerRecipePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the policy for a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetContainerRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetContainerRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetContainerRecipePolicyRequest
 *   containerRecipeArn: "STRING_VALUE", // required
 * };
 * const command = new GetContainerRecipePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerRecipePolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContainerRecipePolicyCommandInput - {@link GetContainerRecipePolicyCommandInput}
 * @returns {@link GetContainerRecipePolicyCommandOutput}
 * @see {@link GetContainerRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link GetContainerRecipePolicyCommandOutput} for command's `response` shape.
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
 * @example Get the policy attached to a container recipe
 * ```javascript
 * // The following example retrieves the resource policy for a container recipe that you shared with another AWS account. The policy property contains the resource-based policy document as a JSON-encoded string.
 * const input = {
 *   containerRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe-shared/1.0.0"
 * };
 * const command = new GetContainerRecipePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policy: `{"Version": "2012-10-17", "Statement": [{"Sid": "AllowSharedAccountContainerRecipeAccess", "Effect": "Allow", "Principal": {"AWS": "arn:aws:iam::444455556666:root"}, "Action": ["imagebuilder:GetContainerRecipe", "imagebuilder:ListContainerRecipes"], "Resource": "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe-shared/1.0.0"}]}`,
 *   requestId: "1b8334a0-5ae7-4c3c-8092-5d589dab7a2b"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetContainerRecipePolicyCommand extends command<GetContainerRecipePolicyCommandInput, GetContainerRecipePolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetContainerRecipePolicy",
  GetContainerRecipePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContainerRecipePolicyRequest;
      output: GetContainerRecipePolicyResponse;
    };
    sdk: {
      input: GetContainerRecipePolicyCommandInput;
      output: GetContainerRecipePolicyCommandOutput;
    };
  };
}
