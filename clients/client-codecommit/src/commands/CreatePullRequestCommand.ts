// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePullRequestInput, CreatePullRequestOutput } from "../models/models_0";
import { CreatePullRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePullRequestCommand}.
 */
export interface CreatePullRequestCommandInput extends CreatePullRequestInput {}
/**
 * @public
 *
 * The output of {@link CreatePullRequestCommand}.
 */
export interface CreatePullRequestCommandOutput extends CreatePullRequestOutput, __MetadataBearer {}

/**
 * Creates a pull request in the specified repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreatePullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreatePullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // CreatePullRequestInput
 *   title: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   targets: [ // TargetList // required
 *     { // Target
 *       repositoryName: "STRING_VALUE", // required
 *       sourceReference: "STRING_VALUE", // required
 *       destinationReference: "STRING_VALUE",
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreatePullRequestCommand(input);
 * const response = await client.send(command);
 * // { // CreatePullRequestOutput
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
 * @param CreatePullRequestCommandInput - {@link CreatePullRequestCommandInput}
 * @returns {@link CreatePullRequestCommandOutput}
 * @see {@link CreatePullRequestCommandInput} for command's `input` shape.
 * @see {@link CreatePullRequestCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ClientRequestTokenRequiredException} (client fault)
 *
 * A client request token is required. A client request token is an unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.
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
 * @throws {@link IdempotencyParameterMismatchException} (client fault)
 *
 * The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be reused.
 *
 * @throws {@link InvalidClientRequestTokenException} (client fault)
 *
 * The client request token is not valid.
 *
 * @throws {@link InvalidDescriptionException} (client fault)
 *
 * The pull request description is not valid. Descriptions cannot be more than 1,000 characters.
 *
 * @throws {@link InvalidReferenceNameException} (client fault)
 *
 * The specified reference name format is not valid. Reference names must conform to the Git references format (for example, refs/heads/main). For more information, see [Git Internals - Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References) or consult your Git documentation.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link InvalidTargetException} (client fault)
 *
 * The target for the pull request is not valid. A target must contain the full values for the repository name, source branch, and destination branch for the pull request.
 *
 * @throws {@link InvalidTargetsException} (client fault)
 *
 * The targets for the pull request is not valid or not in a valid format. Targets are a list of target objects. Each target object must contain the full values for the repository name, source branch, and destination branch for a pull request.
 *
 * @throws {@link InvalidTitleException} (client fault)
 *
 * The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.
 *
 * @throws {@link MaximumOpenPullRequestsExceededException} (client fault)
 *
 * You cannot create the pull request because the repository has too many open pull requests. The maximum number of open pull requests for a repository is 1,000. Close one or more open pull requests, and then try again.
 *
 * @throws {@link MultipleRepositoriesInPullRequestException} (client fault)
 *
 * You cannot include more than one repository in a pull request. Make sure you have specified only one repository name in your request, and then try again.
 *
 * @throws {@link ReferenceDoesNotExistException} (client fault)
 *
 * The specified reference does not exist. You must provide a full commit ID.
 *
 * @throws {@link ReferenceNameRequiredException} (client fault)
 *
 * A reference name is required, but none was provided.
 *
 * @throws {@link ReferenceTypeNotSupportedException} (client fault)
 *
 * The specified reference is not a supported type.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link SourceAndDestinationAreSameException} (client fault)
 *
 * The source branch and destination branch for the pull request are the same. You must specify different branches for the source and destination.
 *
 * @throws {@link TargetRequiredException} (client fault)
 *
 * A pull request target is required. It cannot be empty or null. A pull request target must contain the full values for the repository name, source branch, and destination branch for the pull request.
 *
 * @throws {@link TargetsRequiredException} (client fault)
 *
 * An array of target objects is required. It cannot be empty or null.
 *
 * @throws {@link TitleRequiredException} (client fault)
 *
 * A pull request title is required. It cannot be empty or null.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class CreatePullRequestCommand extends command<CreatePullRequestCommandInput, CreatePullRequestCommandOutput>(
  _ep0,
  _mw0,
  "CreatePullRequest",
  CreatePullRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePullRequestInput;
      output: CreatePullRequestOutput;
    };
    sdk: {
      input: CreatePullRequestCommandInput;
      output: CreatePullRequestCommandOutput;
    };
  };
}
