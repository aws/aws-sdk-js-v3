// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { OverridePullRequestApprovalRulesInput } from "../models/models_0";
import { OverridePullRequestApprovalRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link OverridePullRequestApprovalRulesCommand}.
 */
export interface OverridePullRequestApprovalRulesCommandInput extends OverridePullRequestApprovalRulesInput {}
/**
 * @public
 *
 * The output of {@link OverridePullRequestApprovalRulesCommand}.
 */
export interface OverridePullRequestApprovalRulesCommandOutput extends __MetadataBearer {}

/**
 * Sets aside (overrides) all approval rule requirements for a specified pull request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, OverridePullRequestApprovalRulesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, OverridePullRequestApprovalRulesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // OverridePullRequestApprovalRulesInput
 *   pullRequestId: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 *   overrideStatus: "OVERRIDE" || "REVOKE", // required
 * };
 * const command = new OverridePullRequestApprovalRulesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OverridePullRequestApprovalRulesCommandInput - {@link OverridePullRequestApprovalRulesCommandInput}
 * @returns {@link OverridePullRequestApprovalRulesCommandOutput}
 * @see {@link OverridePullRequestApprovalRulesCommandInput} for command's `input` shape.
 * @see {@link OverridePullRequestApprovalRulesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidOverrideStatusException} (client fault)
 *
 * The override status is not valid. Valid statuses are OVERRIDE and REVOKE.
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *
 * The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.
 *
 * @throws {@link InvalidRevisionIdException} (client fault)
 *
 * The revision ID is not valid. Use GetPullRequest to determine the value.
 *
 * @throws {@link OverrideAlreadySetException} (client fault)
 *
 * The pull request has already had its approval rules set to override.
 *
 * @throws {@link OverrideStatusRequiredException} (client fault)
 *
 * An override status is required, but no value was provided. Valid values include OVERRIDE and REVOKE.
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *
 * The pull request status cannot be updated because it is already closed.
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
export class OverridePullRequestApprovalRulesCommand extends command<OverridePullRequestApprovalRulesCommandInput, OverridePullRequestApprovalRulesCommandOutput>(
  _ep0,
  _mw0,
  "OverridePullRequestApprovalRules",
  OverridePullRequestApprovalRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OverridePullRequestApprovalRulesInput;
      output: {};
    };
    sdk: {
      input: OverridePullRequestApprovalRulesCommandInput;
      output: OverridePullRequestApprovalRulesCommandOutput;
    };
  };
}
