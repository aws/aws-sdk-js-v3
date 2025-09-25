// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput } from "../models/models_1";
import { UpdatePullRequestStatus } from "../schemas/schemas_8_Pull";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePullRequestStatusCommand}.
 */
export interface UpdatePullRequestStatusCommandInput extends UpdatePullRequestStatusInput {}
/**
 * @public
 *
 * The output of {@link UpdatePullRequestStatusCommand}.
 */
export interface UpdatePullRequestStatusCommandOutput extends UpdatePullRequestStatusOutput, __MetadataBearer {}

/**
 * <p>Updates the status of a pull request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestStatusCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestStatusCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdatePullRequestStatusInput
 *   pullRequestId: "STRING_VALUE", // required
 *   pullRequestStatus: "OPEN" || "CLOSED", // required
 * };
 * const command = new UpdatePullRequestStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePullRequestStatusOutput
 * //   pullRequest: { // PullRequest
 * //     pullRequestId: "STRING_VALUE",
 * //     title: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     lastActivityDate: new Date("TIMESTAMP"),
 * //     creationDate: new Date("TIMESTAMP"),
 * //     pullRequestStatus: "OPEN" || "CLOSED",
 * //     authorArn: "STRING_VALUE",
 * //     pullRequestTargets: [ // PullRequestTargetList
 * //       { // PullRequestTarget
 * //         repositoryName: "STRING_VALUE",
 * //         sourceReference: "STRING_VALUE",
 * //         destinationReference: "STRING_VALUE",
 * //         destinationCommit: "STRING_VALUE",
 * //         sourceCommit: "STRING_VALUE",
 * //         mergeBase: "STRING_VALUE",
 * //         mergeMetadata: { // MergeMetadata
 * //           isMerged: true || false,
 * //           mergedBy: "STRING_VALUE",
 * //           mergeCommitId: "STRING_VALUE",
 * //           mergeOption: "FAST_FORWARD_MERGE" || "SQUASH_MERGE" || "THREE_WAY_MERGE",
 * //         },
 * //       },
 * //     ],
 * //     clientRequestToken: "STRING_VALUE",
 * //     revisionId: "STRING_VALUE",
 * //     approvalRules: [ // ApprovalRulesList
 * //       { // ApprovalRule
 * //         approvalRuleId: "STRING_VALUE",
 * //         approvalRuleName: "STRING_VALUE",
 * //         approvalRuleContent: "STRING_VALUE",
 * //         ruleContentSha256: "STRING_VALUE",
 * //         lastModifiedDate: new Date("TIMESTAMP"),
 * //         creationDate: new Date("TIMESTAMP"),
 * //         lastModifiedUser: "STRING_VALUE",
 * //         originApprovalRuleTemplate: { // OriginApprovalRuleTemplate
 * //           approvalRuleTemplateId: "STRING_VALUE",
 * //           approvalRuleTemplateName: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePullRequestStatusCommandInput - {@link UpdatePullRequestStatusCommandInput}
 * @returns {@link UpdatePullRequestStatusCommandOutput}
 * @see {@link UpdatePullRequestStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestStatusCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPullRequestStatusException} (client fault)
 *  <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
 *
 * @throws {@link InvalidPullRequestStatusUpdateException} (client fault)
 *  <p>The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link PullRequestStatusRequiredException} (client fault)
 *  <p>A pull request status is required, but none was provided.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class UpdatePullRequestStatusCommand extends $Command
  .classBuilder<
    UpdatePullRequestStatusCommandInput,
    UpdatePullRequestStatusCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "UpdatePullRequestStatus", {})
  .n("CodeCommitClient", "UpdatePullRequestStatusCommand")
  .sc(UpdatePullRequestStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePullRequestStatusInput;
      output: UpdatePullRequestStatusOutput;
    };
    sdk: {
      input: UpdatePullRequestStatusCommandInput;
      output: UpdatePullRequestStatusCommandOutput;
    };
  };
}
