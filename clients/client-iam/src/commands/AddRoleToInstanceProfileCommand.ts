// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddRoleToInstanceProfileRequest } from "../models/models_0";
import { AddRoleToInstanceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddRoleToInstanceProfileCommand}.
 */
export interface AddRoleToInstanceProfileCommandInput extends AddRoleToInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link AddRoleToInstanceProfileCommand}.
 */
export interface AddRoleToInstanceProfileCommandOutput extends __MetadataBearer {}

/**
 * Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of [eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency). To force the change, you must [disassociate the instance profile](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html) and then [associate the instance profile](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html), or you can stop your instance and then restart it.
 *
 * > **Note:** The caller of this operation must be granted the `PassRole` permission on the IAM role by a permissions policy.
 *
 * > **Important:** When using the [iam:AssociatedResourceArn](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#available-keys-for-iam) condition in a policy to restrict the [PassRole](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html) IAM action, special considerations apply if the policy is intended to define access for the `AddRoleToInstanceProfile` action. In this case, you cannot specify a Region or instance ID in the EC2 instance ARN. The ARN value must be `arn:aws:ec2:*:CallerAccountId:instance/*`. Using any other ARN value may lead to unexpected evaluation results.
 *
 * For more information about roles, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the *IAM User Guide*. For more information about instance profiles, see [Using instance profiles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddRoleToInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddRoleToInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AddRoleToInstanceProfileRequest
 *   InstanceProfileName: "STRING_VALUE", // required
 *   RoleName: "STRING_VALUE", // required
 * };
 * const command = new AddRoleToInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddRoleToInstanceProfileCommandInput - {@link AddRoleToInstanceProfileCommandInput}
 * @returns {@link AddRoleToInstanceProfileCommandOutput}
 * @see {@link AddRoleToInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link AddRoleToInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The request was rejected because it attempted to create a resource that already exists.
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
 * @example To add a role to an instance profile
 * ```javascript
 * // The following command adds the role named S3Access to the instance profile named Webserver:
 * const input = {
 *   InstanceProfileName: "Webserver",
 *   RoleName: "S3Access"
 * };
 * const command = new AddRoleToInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddRoleToInstanceProfileCommand extends command<AddRoleToInstanceProfileCommandInput, AddRoleToInstanceProfileCommandOutput>(
  _ep0,
  _mw0,
  "AddRoleToInstanceProfile",
  AddRoleToInstanceProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddRoleToInstanceProfileRequest;
      output: {};
    };
    sdk: {
      input: AddRoleToInstanceProfileCommandInput;
      output: AddRoleToInstanceProfileCommandOutput;
    };
  };
}
