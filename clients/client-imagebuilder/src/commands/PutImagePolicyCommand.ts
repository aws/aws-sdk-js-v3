// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutImagePolicyRequest, PutImagePolicyResponse } from "../models/models_0";
import { PutImagePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutImagePolicyCommand}.
 */
export interface PutImagePolicyCommandInput extends PutImagePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutImagePolicyCommand}.
 */
export interface PutImagePolicyCommandOutput extends PutImagePolicyResponse, __MetadataBearer {}

/**
 * Applies a policy to an image. The preferred way to share resources is with the RAM API [CreateResourceShare](https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html). If you use the PutImagePolicy operation instead, you must also call the RAM API [PromoteResourceShareCreatedFromPolicy](https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html). Otherwise, the resource isn't visible to the principals that it's shared with.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, PutImagePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, PutImagePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // PutImagePolicyRequest
 *   imageArn: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutImagePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutImagePolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   imageArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutImagePolicyCommandInput - {@link PutImagePolicyCommandInput}
 * @returns {@link PutImagePolicyCommandOutput}
 * @see {@link PutImagePolicyCommandInput} for command's `input` shape.
 * @see {@link PutImagePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *
 * You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder calls on your behalf. Retry with an increasing or variable delay between requests.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A generic client error. This error usually indicates that the request failed a validation check, such as when a downstream service rejects a configured value.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You are not authorized to perform the requested operation.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value that you provided for the specified parameter is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is malformed or otherwise invalid. Verify the request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * At least one of the resources referenced by your request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An internal server error occurred while Image Builder processed the request. Retrying the request may succeed.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unable to process your request at this time.
 *
 * @throws {@link ImagebuilderServiceException}
 *
 * Base exception class for all service exceptions from Imagebuilder service.
 *
 * @example Share an image with another AWS account
 * ```javascript
 * // The following example applies a resource policy to an image build version that grants another AWS account permission to view the image.
 * const input = {
 *   imageArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   policy: `{"Version": "2012-10-17", "Statement": [{"Effect": "Allow", "Principal": {"AWS": "arn:aws:iam::444455556666:root"}, "Action": ["imagebuilder:GetImage", "imagebuilder:ListImages"], "Resource": ["arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"]}]}`
 * };
 * const command = new PutImagePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   requestId: "7bbf7e76-0f08-430d-b77e-17c161725825"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutImagePolicyCommand extends command<PutImagePolicyCommandInput, PutImagePolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutImagePolicy",
  PutImagePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutImagePolicyRequest;
      output: PutImagePolicyResponse;
    };
    sdk: {
      input: PutImagePolicyCommandInput;
      output: PutImagePolicyCommandOutput;
    };
  };
}
