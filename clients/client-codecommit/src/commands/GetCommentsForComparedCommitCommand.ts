// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCommentsForComparedCommitInput, GetCommentsForComparedCommitOutput } from "../models/models_0";
import { GetCommentsForComparedCommit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCommentsForComparedCommitCommand}.
 */
export interface GetCommentsForComparedCommitCommandInput extends GetCommentsForComparedCommitInput {}
/**
 * @public
 *
 * The output of {@link GetCommentsForComparedCommitCommand}.
 */
export interface GetCommentsForComparedCommitCommandOutput extends GetCommentsForComparedCommitOutput, __MetadataBearer {}

/**
 * Returns information about comments made on the comparison between two commits.
 *
 * > **Note:** Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentsForComparedCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentsForComparedCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetCommentsForComparedCommitInput
 *   repositoryName: "STRING_VALUE", // required
 *   beforeCommitId: "STRING_VALUE",
 *   afterCommitId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetCommentsForComparedCommitCommand(input);
 * const response = await client.send(command);
 * // { // GetCommentsForComparedCommitOutput
 * //   commentsForComparedCommitData: [ // CommentsForComparedCommitData
 * //     { // CommentsForComparedCommit
 * //       repositoryName: "STRING_VALUE",
 * //       beforeCommitId: "STRING_VALUE",
 * //       afterCommitId: "STRING_VALUE",
 * //       beforeBlobId: "STRING_VALUE",
 * //       afterBlobId: "STRING_VALUE",
 * //       location: { // Location
 * //         filePath: "STRING_VALUE",
 * //         filePosition: Number("long"),
 * //         relativeFileVersion: "BEFORE" || "AFTER",
 * //       },
 * //       comments: [ // Comments
 * //         { // Comment
 * //           commentId: "STRING_VALUE",
 * //           content: "STRING_VALUE",
 * //           inReplyTo: "STRING_VALUE",
 * //           creationDate: new Date("TIMESTAMP"),
 * //           lastModifiedDate: new Date("TIMESTAMP"),
 * //           authorArn: "STRING_VALUE",
 * //           deleted: true || false,
 * //           clientRequestToken: "STRING_VALUE",
 * //           callerReactions: [ // CallerReactions
 * //             "STRING_VALUE",
 * //           ],
 * //           reactionCounts: { // ReactionCountsMap
 * //             "<keys>": Number("int"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCommentsForComparedCommitCommandInput - {@link GetCommentsForComparedCommitCommandInput}
 * @returns {@link GetCommentsForComparedCommitCommandOutput}
 * @see {@link GetCommentsForComparedCommitCommandInput} for command's `input` shape.
 * @see {@link GetCommentsForComparedCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitDoesNotExistException} (client fault)
 *
 * The specified commit does not exist or no commit was specified, and the specified repository has no default branch.
 *
 * @throws {@link CommitIdRequiredException} (client fault)
 *
 * A commit ID was not specified.
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
 * @throws {@link InvalidCommitIdException} (client fault)
 *
 * The specified commit ID is not valid.
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *
 * The specified continuation token is not valid.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *
 * The specified number of maximum results is not valid.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class GetCommentsForComparedCommitCommand extends command<GetCommentsForComparedCommitCommandInput, GetCommentsForComparedCommitCommandOutput>(
  _ep0,
  _mw0,
  "GetCommentsForComparedCommit",
  GetCommentsForComparedCommit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommentsForComparedCommitInput;
      output: GetCommentsForComparedCommitOutput;
    };
    sdk: {
      input: GetCommentsForComparedCommitCommandInput;
      output: GetCommentsForComparedCommitCommandOutput;
    };
  };
}
