// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePullRequestApprovalRuleInput, DeletePullRequestApprovalRuleOutput } from "../models/models_0";
import { DeletePullRequestApprovalRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePullRequestApprovalRuleCommand}.
 */
export interface DeletePullRequestApprovalRuleCommandInput extends DeletePullRequestApprovalRuleInput {}
/**
 * @public
 *
 * The output of {@link DeletePullRequestApprovalRuleCommand}.
 */
export interface DeletePullRequestApprovalRuleCommandOutput
  extends DeletePullRequestApprovalRuleOutput,
    __MetadataBearer {}

/**
 * <p>Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the
 *             approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the
 *             pull request was created. You cannot delete an approval rule from a merged or closed pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeletePullRequestApprovalRuleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeletePullRequestApprovalRuleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // DeletePullRequestApprovalRuleInput
 *   pullRequestId: "STRING_VALUE", // required
 *   approvalRuleName: "STRING_VALUE", // required
 * };
 * const command = new DeletePullRequestApprovalRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeletePullRequestApprovalRuleOutput
 * //   approvalRuleId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeletePullRequestApprovalRuleCommandInput - {@link DeletePullRequestApprovalRuleCommandInput}
 * @returns {@link DeletePullRequestApprovalRuleCommandOutput}
 * @see {@link DeletePullRequestApprovalRuleCommandInput} for command's `input` shape.
 * @see {@link DeletePullRequestApprovalRuleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleNameRequiredException} (client fault)
 *  <p>An approval rule name is required, but was not specified.</p>
 *
 * @throws {@link CannotDeleteApprovalRuleFromTemplateException} (client fault)
 *  <p>The approval rule cannot be deleted from the pull request because it was created by an
 *             approval rule template and applied to the pull request automatically.</p>
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidApprovalRuleNameException} (client fault)
 *  <p>The name for the approval rule is not valid.</p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *  <p>The pull request status cannot be updated because it is already closed.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class DeletePullRequestApprovalRuleCommand extends $Command
  .classBuilder<
    DeletePullRequestApprovalRuleCommandInput,
    DeletePullRequestApprovalRuleCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "DeletePullRequestApprovalRule", {})
  .n("CodeCommitClient", "DeletePullRequestApprovalRuleCommand")
  .sc(DeletePullRequestApprovalRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePullRequestApprovalRuleInput;
      output: DeletePullRequestApprovalRuleOutput;
    };
    sdk: {
      input: DeletePullRequestApprovalRuleCommandInput;
      output: DeletePullRequestApprovalRuleCommandOutput;
    };
  };
}
