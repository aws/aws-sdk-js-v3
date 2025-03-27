// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePullRequestApprovalStateInput } from "../models/models_1";
import {
  de_UpdatePullRequestApprovalStateCommand,
  se_UpdatePullRequestApprovalStateCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePullRequestApprovalStateCommand}.
 */
export interface UpdatePullRequestApprovalStateCommandInput extends UpdatePullRequestApprovalStateInput {}
/**
 * @public
 *
 * The output of {@link UpdatePullRequestApprovalStateCommand}.
 */
export interface UpdatePullRequestApprovalStateCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestApprovalStateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestApprovalStateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // UpdatePullRequestApprovalStateInput
 *   pullRequestId: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 *   approvalState: "APPROVE" || "REVOKE", // required
 * };
 * const command = new UpdatePullRequestApprovalStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePullRequestApprovalStateCommandInput - {@link UpdatePullRequestApprovalStateCommandInput}
 * @returns {@link UpdatePullRequestApprovalStateCommandOutput}
 * @see {@link UpdatePullRequestApprovalStateCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestApprovalStateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalStateRequiredException} (client fault)
 *  <p>An approval state is required, but was not specified.</p>
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
 * @throws {@link InvalidApprovalStateException} (client fault)
 *  <p>The state for the approval is not valid. Valid values include APPROVE and REVOKE. </p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidRevisionIdException} (client fault)
 *  <p>The revision ID is not valid. Use GetPullRequest to determine the value.</p>
 *
 * @throws {@link MaximumNumberOfApprovalsExceededException} (client fault)
 *  <p>The number of approvals required for the approval rule exceeds the maximum number allowed.</p>
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *  <p>The pull request status cannot be updated because it is already closed.</p>
 *
 * @throws {@link PullRequestCannotBeApprovedByAuthorException} (client fault)
 *  <p>The approval cannot be applied because the user approving the pull request matches the user who created the pull request. You cannot approve a pull
 *         request that you created.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link RevisionIdRequiredException} (client fault)
 *  <p>A revision ID is required, but was not provided.</p>
 *
 * @throws {@link RevisionNotCurrentException} (client fault)
 *  <p>The revision ID provided in the request does not match the current revision ID. Use GetPullRequest to retrieve the current revision ID.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class UpdatePullRequestApprovalStateCommand extends $Command
  .classBuilder<
    UpdatePullRequestApprovalStateCommandInput,
    UpdatePullRequestApprovalStateCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "UpdatePullRequestApprovalState", {})
  .n("CodeCommitClient", "UpdatePullRequestApprovalStateCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePullRequestApprovalStateCommand)
  .de(de_UpdatePullRequestApprovalStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePullRequestApprovalStateInput;
      output: {};
    };
    sdk: {
      input: UpdatePullRequestApprovalStateCommandInput;
      output: UpdatePullRequestApprovalStateCommandOutput;
    };
  };
}
