// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteRolePolicyRequest } from "../models/models_0";
import { DeleteRolePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRolePolicyCommand}.
 */
export interface DeleteRolePolicyCommandInput extends DeleteRolePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRolePolicyCommand}.
 */
export interface DeleteRolePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             role.</p>
 *          <p>A role can also have managed policies attached to it. To detach a managed policy from
 *             a role, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html">DetachRolePolicy</a>.
 *             For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteRolePolicyRequest
 *   RoleName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRolePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRolePolicyCommandInput - {@link DeleteRolePolicyCommandInput}
 * @returns {@link DeleteRolePolicyCommandOutput}
 * @see {@link DeleteRolePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRolePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link UnmodifiableEntityException} (client fault)
 *  <p>The request was rejected because service-linked roles are protected Amazon Web Services resources. Only
 *       the service that depends on the service-linked role can modify or delete the role on your
 *       behalf. The error message includes the name of the service that depends on this service-linked
 *       role. You must request the change through that service.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To remove a policy from an IAM role
 * ```javascript
 * // The following command removes the policy named ExamplePolicy from the role named Test-Role.
 * const input = {
 *   PolicyName: "ExamplePolicy",
 *   RoleName: "Test-Role"
 * };
 * const command = new DeleteRolePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRolePolicyCommand extends $Command
  .classBuilder<
    DeleteRolePolicyCommandInput,
    DeleteRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DeleteRolePolicy", {})
  .n("IAMClient", "DeleteRolePolicyCommand")
  .sc(DeleteRolePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRolePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteRolePolicyCommandInput;
      output: DeleteRolePolicyCommandOutput;
    };
  };
}
