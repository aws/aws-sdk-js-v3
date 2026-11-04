// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePolicyVersionRequest } from "../models/models_0";
import { DeletePolicyVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePolicyVersionCommand}.
 */
export interface DeletePolicyVersionCommandInput extends DeletePolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyVersionCommand}.
 */
export interface DeletePolicyVersionCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified version from the specified managed policy.
 *
 * You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use [DeletePolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html). To find out which version of a policy is marked as the default version, use [ListPolicyVersions](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html).
 *
 * For information about versions for managed policies, see [Versioning for managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeletePolicyVersionRequest
 *   PolicyArn: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyVersionCommandInput - {@link DeletePolicyVersionCommandInput}
 * @returns {@link DeletePolicyVersionCommandOutput}
 * @see {@link DeletePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *
 * The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
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
 * @public
 */
export class DeletePolicyVersionCommand extends command<DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeletePolicyVersion",
  DeletePolicyVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyVersionRequest;
      output: {};
    };
    sdk: {
      input: DeletePolicyVersionCommandInput;
      output: DeletePolicyVersionCommandOutput;
    };
  };
}
