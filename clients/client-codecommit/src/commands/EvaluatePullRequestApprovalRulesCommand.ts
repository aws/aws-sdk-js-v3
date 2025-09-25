// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EvaluatePullRequestApprovalRulesInput, EvaluatePullRequestApprovalRulesOutput } from "../models/models_0";
import { EvaluatePullRequestApprovalRules } from "../schemas/schemas_5_Pull";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface EvaluatePullRequestApprovalRulesCommandOutput
  extends EvaluatePullRequestApprovalRulesOutput,
    __MetadataBearer {}

/**
 * <p>Evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p>
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
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidRevisionIdException} (client fault)
 *  <p>The revision ID is not valid. Use GetPullRequest to determine the value.</p>
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
export class EvaluatePullRequestApprovalRulesCommand extends $Command
  .classBuilder<
    EvaluatePullRequestApprovalRulesCommandInput,
    EvaluatePullRequestApprovalRulesCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "EvaluatePullRequestApprovalRules", {})
  .n("CodeCommitClient", "EvaluatePullRequestApprovalRulesCommand")
  .sc(EvaluatePullRequestApprovalRules)
  .build() {
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
