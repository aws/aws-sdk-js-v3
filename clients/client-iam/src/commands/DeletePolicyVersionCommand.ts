// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeletePolicyVersionRequest } from "../models/models_0";
import { de_DeletePolicyVersionCommand, se_DeletePolicyVersionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified version from the specified managed policy.</p>
 *          <p>You cannot delete the default version from a policy using this operation. To delete
 *             the default version from a policy, use <a>DeletePolicy</a>. To find out which
 *             version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p>
 *          <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
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
export class DeletePolicyVersionCommand extends $Command
  .classBuilder<
    DeletePolicyVersionCommandInput,
    DeletePolicyVersionCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "DeletePolicyVersion", {})
  .n("IAMClient", "DeletePolicyVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeletePolicyVersionCommand)
  .de(de_DeletePolicyVersionCommand)
  .build() {
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
