// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { DeleteGroupPolicyRequest } from "../models/models_0";
import { DeleteGroupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGroupPolicyCommand}.
 */
export interface DeleteGroupPolicyCommandInput extends DeleteGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGroupPolicyCommand}.
 */
export interface DeleteGroupPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             group.</p>
 *          <p>A group can also have managed policies attached to it. To detach a managed policy from
 *             a group, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html">DetachGroupPolicy</a>.
 *             For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteGroupPolicyRequest
 *   GroupName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new DeleteGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGroupPolicyCommandInput - {@link DeleteGroupPolicyCommandInput}
 * @returns {@link DeleteGroupPolicyCommandOutput}
 * @see {@link DeleteGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To delete a policy from an IAM group
 * ```javascript
 * // The following command deletes the policy named ExamplePolicy from the group named Admins:
 * const input = {
 *   GroupName: "Admins",
 *   PolicyName: "ExamplePolicy"
 * };
 * const command = new DeleteGroupPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteGroupPolicyCommand extends $Command
  .classBuilder<
    DeleteGroupPolicyCommandInput,
    DeleteGroupPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DeleteGroupPolicy", {})
  .n("IAMClient", "DeleteGroupPolicyCommand")
  .sc(DeleteGroupPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteGroupPolicyCommandInput;
      output: DeleteGroupPolicyCommandOutput;
    };
  };
}
