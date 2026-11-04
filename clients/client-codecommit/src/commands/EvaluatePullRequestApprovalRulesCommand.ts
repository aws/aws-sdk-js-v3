// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EvaluatePullRequestApprovalRulesInput, EvaluatePullRequestApprovalRulesOutput } from "../models/models_0";
import { EvaluatePullRequestApprovalRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EvaluatePullRequestApprovalRulesCommand}.
 */
export interface EvaluatePullRequestApprovalRulesCommandInput extends EvaluatePullRequestApprovalRulesInput {}
/**
 * @public
 *
 * The output of {@link EvaluatePullRequestApprovalRulesCommand}.
 */
export interface EvaluatePullRequestApprovalRulesCommandOutput extends EvaluatePullRequestApprovalRulesOutput, __MetadataBearer {}

/**
 * Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, EvaluatePullRequestApprovalRulesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, EvaluatePullRequestApprovalRulesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // EvaluatePullRequestApprovalRulesInput
 *   pullRequestId: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 * };
 * const command = new EvaluatePullRequestApprovalRulesCommand(input);
 * const response = await client.send(command);
 * // { // EvaluatePullRequestApprovalRulesOutput
 * //   evaluation: { // Evaluation
 * //     approved: true || false,
 * //     overridden: true || false,
 * //     approvalRulesSatisfied: [ // ApprovalRulesSatisfiedList
 * //       "STRING_VALUE",
 * //     ],
 * //     approvalRulesNotSatisfied: [ // ApprovalRulesNotSatisfiedList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param EvaluatePullRequestApprovalRulesCommandInput - {@link EvaluatePullRequestApprovalRulesCommandInput}
 * @returns {@link EvaluatePullRequestApprovalRulesCommandOutput}
 * @see {@link EvaluatePullRequestApprovalRulesCommandInput} for command's `input` shape.
 * @see {@link EvaluatePullRequestApprovalRulesCommandOutput} for command's `response` shape.
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
export class EvaluatePullRequestApprovalRulesCommand extends command<EvaluatePullRequestApprovalRulesCommandInput, EvaluatePullRequestApprovalRulesCommandOutput>(
  _ep0,
  _mw0,
  "EvaluatePullRequestApprovalRules",
  EvaluatePullRequestApprovalRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EvaluatePullRequestApprovalRulesInput;
      output: EvaluatePullRequestApprovalRulesOutput;
    };
    sdk: {
      input: EvaluatePullRequestApprovalRulesCommandInput;
      output: EvaluatePullRequestApprovalRulesCommandOutput;
    };
  };
}
