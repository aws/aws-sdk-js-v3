// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCommentsForComparedCommitInput, GetCommentsForComparedCommitOutput } from "../models/models_0";
import { GetCommentsForComparedCommit } from "../schemas/schemas_7_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetCommentsForComparedCommitCommandOutput
  extends GetCommentsForComparedCommitOutput,
    __MetadataBearer {}

/**
 * <p>Returns information about comments made on the comparison between two commits.</p>
 *          <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *             reactions from active identities, use GetCommentReactions.</p>
 *          </note>
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
 *  <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 *
 * @throws {@link CommitIdRequiredException} (client fault)
 *  <p>A commit ID was not specified.</p>
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
 * @throws {@link InvalidCommitIdException} (client fault)
 *  <p>The specified commit ID is not valid.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class GetCommentsForComparedCommitCommand extends $Command
  .classBuilder<
    GetCommentsForComparedCommitCommandInput,
    GetCommentsForComparedCommitCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "GetCommentsForComparedCommit", {})
  .n("CodeCommitClient", "GetCommentsForComparedCommitCommand")
  .sc(GetCommentsForComparedCommit)
  .build() {
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
