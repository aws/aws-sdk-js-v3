// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRolePolicyRequest } from "../models/models_0";
import { DeleteRolePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified inline policy that is embedded in the specified IAM role.
 *
 * A role can also have managed policies attached to it. To detach a managed policy from a role, use [DetachRolePolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html). For more information about policies, refer to [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
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
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link UnmodifiableEntityException} (client fault)
 *
 * The request was rejected because service-linked roles are protected Amazon Web Services resources. Only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
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
export class DeleteRolePolicyCommand extends command<DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRolePolicy",
  DeleteRolePolicy$
) {
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
