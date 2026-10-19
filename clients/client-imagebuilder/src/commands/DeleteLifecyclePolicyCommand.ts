// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse } from "../models/models_0";
import { DeleteLifecyclePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLifecyclePolicyCommand}.
 */
export interface DeleteLifecyclePolicyCommandInput extends DeleteLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLifecyclePolicyCommand}.
 */
export interface DeleteLifecyclePolicyCommandOutput extends DeleteLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified lifecycle policy resource. Deleting the policy removes
 * 			its schedule, so no further lifecycle runs occur for that policy. If a
 * 			lifecycle execution is in progress for the policy, Image Builder cancels it. Deletion
 * 			doesn't revert actions that the policy already applied to your
 * 			resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteLifecyclePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteLifecyclePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // DeleteLifecyclePolicyRequest
 *   lifecyclePolicyArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLifecyclePolicyResponse
 * //   lifecyclePolicyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteLifecyclePolicyCommandInput - {@link DeleteLifecyclePolicyCommandInput}
 * @returns {@link DeleteLifecyclePolicyCommandOutput}
 * @see {@link DeleteLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecyclePolicyCommandOutput} for command's `response` shape.
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
 * @example Delete a lifecycle policy
 * ```javascript
 * // The following example deletes the specified lifecycle policy.
 * const input = {
 *   lifecyclePolicyArn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-lifecycle-policy"
 * };
 * const command = new DeleteLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lifecyclePolicyArn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-lifecycle-policy"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLifecyclePolicyCommand extends command<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLifecyclePolicy",
  DeleteLifecyclePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLifecyclePolicyRequest;
      output: DeleteLifecyclePolicyResponse;
    };
    sdk: {
      input: DeleteLifecyclePolicyCommandInput;
      output: DeleteLifecyclePolicyCommandOutput;
    };
  };
}
