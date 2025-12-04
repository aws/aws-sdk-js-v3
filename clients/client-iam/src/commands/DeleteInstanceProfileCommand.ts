// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { DeleteInstanceProfileRequest } from "../models/models_0";
import { DeleteInstanceProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInstanceProfileCommand}.
 */
export interface DeleteInstanceProfileCommandInput extends DeleteInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInstanceProfileCommand}.
 */
export interface DeleteInstanceProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified instance profile. The instance profile must not have an
 *             associated role.</p>
 *          <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the instance
 *                 profile you are about to delete. Deleting a role or instance profile that is
 *                 associated with a running instance will break any applications running on the
 *                 instance.</p>
 *          </important>
 *          <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">Using
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteInstanceProfileRequest
 *   InstanceProfileName: "STRING_VALUE", // required
 * };
 * const command = new DeleteInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInstanceProfileCommandInput - {@link DeleteInstanceProfileCommandInput}
 * @returns {@link DeleteInstanceProfileCommandOutput}
 * @see {@link DeleteInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
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
 * @example To delete an instance profile
 * ```javascript
 * // The following command deletes the instance profile named ExampleInstanceProfile
 * const input = {
 *   InstanceProfileName: "ExampleInstanceProfile"
 * };
 * const command = new DeleteInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteInstanceProfileCommand extends $Command
  .classBuilder<
    DeleteInstanceProfileCommandInput,
    DeleteInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DeleteInstanceProfile", {})
  .n("IAMClient", "DeleteInstanceProfileCommand")
  .sc(DeleteInstanceProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInstanceProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteInstanceProfileCommandInput;
      output: DeleteInstanceProfileCommandOutput;
    };
  };
}
