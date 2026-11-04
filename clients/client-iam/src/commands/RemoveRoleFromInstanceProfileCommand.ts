// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveRoleFromInstanceProfileRequest } from "../models/models_0";
import { RemoveRoleFromInstanceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveRoleFromInstanceProfileCommand}.
 */
export interface RemoveRoleFromInstanceProfileCommandInput extends RemoveRoleFromInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link RemoveRoleFromInstanceProfileCommand}.
 */
export interface RemoveRoleFromInstanceProfileCommandOutput extends __MetadataBearer {}

/**
 * Removes the specified IAM role from the specified Amazon EC2 instance profile.
 *
 * > **Important:** Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.
 *
 * For more information about roles, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the *IAM User Guide*. For more information about instance profiles, see [Using instance profiles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveRoleFromInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveRoleFromInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // RemoveRoleFromInstanceProfileRequest
 *   InstanceProfileName: "STRING_VALUE", // required
 *   RoleName: "STRING_VALUE", // required
 * };
 * const command = new RemoveRoleFromInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveRoleFromInstanceProfileCommandInput - {@link RemoveRoleFromInstanceProfileCommandInput}
 * @returns {@link RemoveRoleFromInstanceProfileCommandOutput}
 * @see {@link RemoveRoleFromInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromInstanceProfileCommandOutput} for command's `response` shape.
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
 * @example To remove a role from an instance profile
 * ```javascript
 * // The following command removes the role named Test-Role from the instance profile named ExampleInstanceProfile.
 * const input = {
 *   InstanceProfileName: "ExampleInstanceProfile",
 *   RoleName: "Test-Role"
 * };
 * const command = new RemoveRoleFromInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RemoveRoleFromInstanceProfileCommand extends command<RemoveRoleFromInstanceProfileCommandInput, RemoveRoleFromInstanceProfileCommandOutput>(
  _ep0,
  _mw0,
  "RemoveRoleFromInstanceProfile",
  RemoveRoleFromInstanceProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveRoleFromInstanceProfileRequest;
      output: {};
    };
    sdk: {
      input: RemoveRoleFromInstanceProfileCommandInput;
      output: RemoveRoleFromInstanceProfileCommandOutput;
    };
  };
}
