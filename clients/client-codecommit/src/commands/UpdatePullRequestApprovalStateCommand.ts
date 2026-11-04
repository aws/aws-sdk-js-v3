// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePullRequestApprovalStateInput } from "../models/models_0";
import { UpdatePullRequestApprovalState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestApprovalStateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestApprovalStateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
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
 *
 * An approval state is required, but was not specified.
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *
 * An encryption integrity check failed.
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *
 * An encryption key could not be accessed.
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *
 * The encryption key is disabled.
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *
 * No encryption key was found.
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *
 * The encryption key is not available.
 *
 * @throws {@link InvalidApprovalStateException} (client fault)
 *
 * The state for the approval is not valid. Valid values include APPROVE and REVOKE.
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *
 * The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.
 *
 * @throws {@link InvalidRevisionIdException} (client fault)
 *
 * The revision ID is not valid. Use GetPullRequest to determine the value.
 *
 * @throws {@link MaximumNumberOfApprovalsExceededException} (client fault)
 *
 * The number of approvals required for the approval rule exceeds the maximum number allowed.
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *
 * The pull request status cannot be updated because it is already closed.
 *
 * @throws {@link PullRequestCannotBeApprovedByAuthorException} (client fault)
 *
 * The approval cannot be applied because the user approving the pull request matches the user who created the pull request. You cannot approve a pull request that you created.
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *
 * The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *
 * A pull request ID is required, but none was provided.
 *
 * @throws {@link RevisionIdRequiredException} (client fault)
 *
 * A revision ID is required, but was not provided.
 *
 * @throws {@link RevisionNotCurrentException} (client fault)
 *
 * The revision ID provided in the request does not match the current revision ID. Use GetPullRequest to retrieve the current revision ID.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class UpdatePullRequestApprovalStateCommand extends command<UpdatePullRequestApprovalStateCommandInput, UpdatePullRequestApprovalStateCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePullRequestApprovalState",
  UpdatePullRequestApprovalState$
) {
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
