// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetImagePolicyRequest, GetImagePolicyResponse } from "../models/models_0";
import { GetImagePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetImagePolicyCommand}.
 */
export interface GetImagePolicyCommandInput extends GetImagePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetImagePolicyCommand}.
 */
export interface GetImagePolicyCommandOutput extends GetImagePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves an image policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImagePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImagePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetImagePolicyRequest
 *   imageArn: "STRING_VALUE", // required
 * };
 * const command = new GetImagePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetImagePolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImagePolicyCommandInput - {@link GetImagePolicyCommandInput}
 * @returns {@link GetImagePolicyCommandOutput}
 * @see {@link GetImagePolicyCommandInput} for command's `input` shape.
 * @see {@link GetImagePolicyCommandOutput} for command's `response` shape.
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
 * @example Retrieve the resource policy for an image
 * ```javascript
 * // The following example retrieves the resource policy for an image build version that was shared with account 444455556666.
 * const input = {
 *   imageArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"
 * };
 * const command = new GetImagePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policy: `{"Version": "2012-10-17", "Statement": [{"Effect": "Allow", "Principal": {"AWS": "arn:aws:iam::444455556666:root"}, "Action": ["imagebuilder:GetImage", "imagebuilder:ListImages"], "Resource": ["arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"]}]}`,
 *   requestId: "bc0c8348-c0d9-452a-af20-2640430df585"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetImagePolicyCommand extends command<GetImagePolicyCommandInput, GetImagePolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetImagePolicy",
  GetImagePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImagePolicyRequest;
      output: GetImagePolicyResponse;
    };
    sdk: {
      input: GetImagePolicyCommandInput;
      output: GetImagePolicyCommandOutput;
    };
  };
}
