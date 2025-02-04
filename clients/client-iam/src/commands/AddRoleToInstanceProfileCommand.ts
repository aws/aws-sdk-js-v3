// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddRoleToInstanceProfileRequest } from "../models/models_0";
import { de_AddRoleToInstanceProfileCommand, se_AddRoleToInstanceProfileCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds the specified IAM role to the specified instance profile. An instance profile
 *             can contain only one role, and this quota cannot be increased. You can remove the
 *             existing role and then add a different role to an instance profile. You must then wait
 *             for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual
 *                 consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the
 *                 instance profile</a>, or you can stop your instance and then restart it.</p>
 *          <note>
 *             <p>The caller of this operation must be granted the <code>PassRole</code> permission
 *                 on the IAM role by a permissions policy.</p>
 *          </note>
 *          <important>
 *             <p>When using the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#available-keys-for-iam">iam:AssociatedResourceArn</a> condition in a policy to restrict the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">PassRole</a> IAM action, special considerations apply if the policy is
 *                 intended to define access for the <code>AddRoleToInstanceProfile</code> action. In
 *                 this case, you cannot specify a Region or instance ID in the EC2 instance ARN. The
 *                 ARN value must be <code>arn:aws:ec2:*:CallerAccountId:instance/*</code>. Using any
 *                 other ARN value may lead to unexpected evaluation results.</p>
 *          </important>
 *          <p> For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *                 <i>IAM User Guide</i>. For more information about instance profiles,
 *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">Using
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddRoleToInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddRoleToInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
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
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
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
 * @public
 * @example To add a role to an instance profile
 * ```javascript
 * // The following command adds the role named S3Access to the instance profile named Webserver:
 * const input = {
 *   "InstanceProfileName": "Webserver",
 *   "RoleName": "S3Access"
 * };
 * const command = new AddRoleToInstanceProfileCommand(input);
 * await client.send(command);
 * // example id: c107fac3-edb6-4827-8a71-8863ec91c81f
 * ```
 *
 */
export class AddRoleToInstanceProfileCommand extends $Command
  .classBuilder<
    AddRoleToInstanceProfileCommandInput,
    AddRoleToInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "AddRoleToInstanceProfile", {})
  .n("IAMClient", "AddRoleToInstanceProfileCommand")
  .f(void 0, void 0)
  .ser(se_AddRoleToInstanceProfileCommand)
  .de(de_AddRoleToInstanceProfileCommand)
  .build() {
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
