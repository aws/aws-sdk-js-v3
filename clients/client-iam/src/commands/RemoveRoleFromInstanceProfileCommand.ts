// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveRoleFromInstanceProfileRequest } from "../models/models_0";
import {
  de_RemoveRoleFromInstanceProfileCommand,
  se_RemoveRoleFromInstanceProfileCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes the specified IAM role from the specified Amazon EC2 instance profile.</p>
 *          <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you are
 *                 about to remove from the instance profile. Removing a role from an instance profile
 *                 that is associated with a running instance might break any applications running on
 *                 the instance.</p>
 *          </important>
 *          <p> For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *                 <i>IAM User Guide</i>. For more information about instance profiles,
 *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">Using
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
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
export class RemoveRoleFromInstanceProfileCommand extends $Command
  .classBuilder<
    RemoveRoleFromInstanceProfileCommandInput,
    RemoveRoleFromInstanceProfileCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "RemoveRoleFromInstanceProfile", {})
  .n("IAMClient", "RemoveRoleFromInstanceProfileCommand")
  .f(void 0, void 0)
  .ser(se_RemoveRoleFromInstanceProfileCommand)
  .de(de_RemoveRoleFromInstanceProfileCommand)
  .build() {
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
