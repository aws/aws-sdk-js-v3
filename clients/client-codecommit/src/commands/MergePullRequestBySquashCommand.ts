// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { MergePullRequestBySquashInput, MergePullRequestBySquashOutput } from "../models/models_1";
import { de_MergePullRequestBySquashCommand, se_MergePullRequestBySquashCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MergePullRequestBySquashCommand}.
 */
export interface MergePullRequestBySquashCommandInput extends MergePullRequestBySquashInput {}
/**
 * @public
 *
 * The output of {@link MergePullRequestBySquashCommand}.
 */
export interface MergePullRequestBySquashCommandOutput extends MergePullRequestBySquashOutput, __MetadataBearer {}

/**
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergePullRequestBySquashCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergePullRequestBySquashCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // MergePullRequestBySquashInput
 *   pullRequestId: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 *   sourceCommitId: "STRING_VALUE",
 *   conflictDetailLevel: "FILE_LEVEL" || "LINE_LEVEL",
 *   conflictResolutionStrategy: "NONE" || "ACCEPT_SOURCE" || "ACCEPT_DESTINATION" || "AUTOMERGE",
 *   commitMessage: "STRING_VALUE",
 *   authorName: "STRING_VALUE",
 *   email: "STRING_VALUE",
 *   keepEmptyFolders: true || false,
 *   conflictResolution: { // ConflictResolution
 *     replaceContents: [ // ReplaceContentEntries
 *       { // ReplaceContentEntry
 *         filePath: "STRING_VALUE", // required
 *         replacementType: "KEEP_BASE" || "KEEP_SOURCE" || "KEEP_DESTINATION" || "USE_NEW_CONTENT", // required
 *         content: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 *       },
 *     ],
 *     deleteFiles: [ // DeleteFileEntries
 *       { // DeleteFileEntry
 *         filePath: "STRING_VALUE", // required
 *       },
 *     ],
 *     setFileModes: [ // SetFileModeEntries
 *       { // SetFileModeEntry
 *         filePath: "STRING_VALUE", // required
 *         fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new MergePullRequestBySquashCommand(input);
 * const response = await client.send(command);
 * // { // MergePullRequestBySquashOutput
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
 * @param MergePullRequestBySquashCommandInput - {@link MergePullRequestBySquashCommandInput}
 * @returns {@link MergePullRequestBySquashCommandOutput}
 * @see {@link MergePullRequestBySquashCommandInput} for command's `input` shape.
 * @see {@link MergePullRequestBySquashCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitMessageLengthExceededException} (client fault)
 *  <p>The commit message is too long. Provide a shorter string. </p>
 *
 * @throws {@link ConcurrentReferenceUpdateException} (client fault)
 *  <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
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
 * @throws {@link FileContentSizeLimitExceededException} (client fault)
 *  <p>The file cannot be added because it is too large. The maximum file size is 6 MB, and
 *             the combined file content change size is 7 MB. Consider making these changes using a Git
 *             client.</p>
 *
 * @throws {@link FolderContentSizeLimitExceededException} (client fault)
 *  <p>The commit cannot be created because at least one of the overall changes in the commit results in a
 *             folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes,
 *         or split the changes across multiple folders.</p>
 *
 * @throws {@link InvalidCommitIdException} (client fault)
 *  <p>The specified commit ID is not valid.</p>
 *
 * @throws {@link InvalidConflictDetailLevelException} (client fault)
 *  <p>The specified conflict detail level is not valid.</p>
 *
 * @throws {@link InvalidConflictResolutionException} (client fault)
 *  <p>The specified conflict resolution list is not valid.</p>
 *
 * @throws {@link InvalidConflictResolutionStrategyException} (client fault)
 *  <p>The specified conflict resolution strategy is not valid.</p>
 *
 * @throws {@link InvalidEmailException} (client fault)
 *  <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters
 *         allowed for an email address.</p>
 *
 * @throws {@link InvalidFileModeException} (client fault)
 *  <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
 *
 * @throws {@link InvalidPathException} (client fault)
 *  <p>The specified path is not valid.</p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidReplacementContentException} (client fault)
 *  <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
 *
 * @throws {@link InvalidReplacementTypeException} (client fault)
 *  <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link ManualMergeRequiredException} (client fault)
 *  <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
 *
 * @throws {@link MaximumConflictResolutionEntriesExceededException} (client fault)
 *  <p>The number of allowed conflict resolution entries was exceeded.</p>
 *
 * @throws {@link MaximumFileContentToLoadExceededException} (client fault)
 *  <p>The number of files to load exceeds the allowed limit.</p>
 *
 * @throws {@link MaximumItemsToCompareExceededException} (client fault)
 *  <p>The number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
 *
 * @throws {@link MultipleConflictResolutionEntriesException} (client fault)
 *  <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
 *
 * @throws {@link NameLengthExceededException} (client fault)
 *  <p>The user name is not valid because it has exceeded the character limit for author names. </p>
 *
 * @throws {@link PathRequiredException} (client fault)
 *  <p>The folderPath for a location cannot be null.</p>
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *  <p>The pull request status cannot be updated because it is already closed.</p>
 *
 * @throws {@link PullRequestApprovalRulesNotSatisfiedException} (client fault)
 *  <p>The pull request cannot be merged because one or more approval rules applied to the pull request have conditions that have not been met.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link ReplacementContentRequiredException} (client fault)
 *  <p>USE_NEW_CONTENT was specified, but no replacement content has been provided.</p>
 *
 * @throws {@link ReplacementTypeRequiredException} (client fault)
 *  <p>A replacement type is required.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link RepositoryNotAssociatedWithPullRequestException} (client fault)
 *  <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
 *
 * @throws {@link TipOfSourceReferenceIsDifferentException} (client fault)
 *  <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request.
 *             The pull request might have been updated. Make sure that you have the latest changes.</p>
 *
 * @throws {@link TipsDivergenceExceededException} (client fault)
 *  <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be
 *             any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 * @public
 */
export class MergePullRequestBySquashCommand extends $Command
  .classBuilder<
    MergePullRequestBySquashCommandInput,
    MergePullRequestBySquashCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "MergePullRequestBySquash", {})
  .n("CodeCommitClient", "MergePullRequestBySquashCommand")
  .f(void 0, void 0)
  .ser(se_MergePullRequestBySquashCommand)
  .de(de_MergePullRequestBySquashCommand)
  .build() {}
