// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPullRequestApprovalStatesInput, GetPullRequestApprovalStatesOutput } from "../models/models_0";
import { GetPullRequestApprovalStates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPullRequestApprovalStatesCommand}.
 */
export interface GetPullRequestApprovalStatesCommandInput extends GetPullRequestApprovalStatesInput {}
/**
 * @public
 *
 * The output of {@link GetPullRequestApprovalStatesCommand}.
 */
export interface GetPullRequestApprovalStatesCommandOutput extends GetPullRequestApprovalStatesOutput, __MetadataBearer {}

/**
 * Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetPullRequestApprovalStatesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetPullRequestApprovalStatesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetPullRequestApprovalStatesInput
 *   pullRequestId: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 * };
 * const command = new GetPullRequestApprovalStatesCommand(input);
 * const response = await client.send(command);
 * // { // GetPullRequestApprovalStatesOutput
 * //   approvals: [ // ApprovalList
 * //     { // Approval
 * //       userArn: "STRING_VALUE",
 * //       approvalState: "APPROVE" || "REVOKE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPullRequestApprovalStatesCommandInput - {@link GetPullRequestApprovalStatesCommandInput}
 * @returns {@link GetPullRequestApprovalStatesCommandOutput}
 * @see {@link GetPullRequestApprovalStatesCommandInput} for command's `input` shape.
 * @see {@link GetPullRequestApprovalStatesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *
 * The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.
 *
 * @throws {@link InvalidRevisionIdException} (client fault)
 *
 * The revision ID is not valid. Use GetPullRequest to determine the value.
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
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class GetPullRequestApprovalStatesCommand extends command<GetPullRequestApprovalStatesCommandInput, GetPullRequestApprovalStatesCommandOutput>(
  _ep0,
  _mw0,
  "GetPullRequestApprovalStates",
  GetPullRequestApprovalStates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPullRequestApprovalStatesInput;
      output: GetPullRequestApprovalStatesOutput;
    };
    sdk: {
      input: GetPullRequestApprovalStatesCommandInput;
      output: GetPullRequestApprovalStatesCommandOutput;
    };
  };
}
