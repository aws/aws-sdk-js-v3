// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeletePolicyRequest } from "../models/models_0";
import { de_DeletePolicyCommand, se_DeletePolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandInput extends DeletePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified managed policy.</p>
 *          <p>Before you can delete a managed policy, you must first detach the policy from all
 *             users, groups, and roles that it is attached to. In addition, you must delete all the
 *             policy's versions. The following steps describe the process for deleting a managed
 *             policy:</p>
 *          <ul>
 *             <li>
 *                <p>Detach the policy from all users, groups, and roles that the policy is
 *                     attached to, using <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html">DetachUserPolicy</a>, <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html">DetachGroupPolicy</a>, or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html">DetachRolePolicy</a>. To list all the users, groups, and roles that a
 *                     policy is attached to, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html">ListEntitiesForPolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>Delete all versions of the policy using <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html">DeletePolicyVersion</a>. To list the policy's versions, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html">ListPolicyVersions</a>. You cannot use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html">DeletePolicyVersion</a> to delete the version that is marked as the
 *                     default version. You delete the policy's default version in the next step of the
 *                     process.</p>
 *             </li>
 *             <li>
 *                <p>Delete the policy (this automatically deletes the policy's default version)
 *                     using this operation.</p>
 *             </li>
 *          </ul>
 *          <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeletePolicyRequest
 *   PolicyArn: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyCommandInput - {@link DeletePolicyCommandInput}
 * @returns {@link DeletePolicyCommandOutput}
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
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
 * @public
 */
export class DeletePolicyCommand extends $Command
  .classBuilder<
    DeletePolicyCommandInput,
    DeletePolicyCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "DeletePolicy", {})
  .n("IAMClient", "DeletePolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeletePolicyCommand)
  .de(de_DeletePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeletePolicyCommandInput;
      output: DeletePolicyCommandOutput;
    };
  };
}
