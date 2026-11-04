// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInstanceProfileRequest } from "../models/models_0";
import { DeleteInstanceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified instance profile. The instance profile must not have an associated role.
 *
 * > **Important:** Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.
 *
 * For more information about instance profiles, see [Using instance profiles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html) in the *IAM User Guide*.
 *
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
 *
 * The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.
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
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
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
export class DeleteInstanceProfileCommand extends command<DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInstanceProfile",
  DeleteInstanceProfile$
) {
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
