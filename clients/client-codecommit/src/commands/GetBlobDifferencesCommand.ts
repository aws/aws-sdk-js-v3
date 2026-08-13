// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBlobDifferencesInput, GetBlobDifferencesOutput } from "../models/models_0";
import { GetBlobDifferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBlobDifferencesCommand}.
 */
export interface GetBlobDifferencesCommandInput extends GetBlobDifferencesInput {}
/**
 * @public
 *
 * The output of {@link GetBlobDifferencesCommand}.
 */
export interface GetBlobDifferencesCommandOutput extends GetBlobDifferencesOutput, __MetadataBearer {}

/**
 * <p>Returns a structured, line-level diff between two blob versions in a repository. The
 *             diff is returned as an ordered list of hunks, where each hunk represents a contiguous
 *             run of changed lines together with any surrounding unchanged context lines.</p>
 *          <p>Results are paginated. Use <code>MaxResults</code> and <code>NextToken</code> to
 *             retrieve additional pages.</p>
 *          <p>For the typical usage workflow, see <a>GetDifferences</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetBlobDifferencesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetBlobDifferencesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetBlobDifferencesInput
 *   repositoryName: "STRING_VALUE", // required
 *   afterBlobId: "STRING_VALUE", // required
 *   beforeBlobId: "STRING_VALUE",
 *   contextLines: Number("int"),
 *   ignoreWhitespace: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetBlobDifferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetBlobDifferencesOutput
 * //   hunks: [ // DiffHunkList // required
 * //     { // DiffHunk
 * //       beforeStartLine: Number("int"),
 * //       beforeLineCount: Number("int"),
 * //       afterStartLine: Number("int"),
 * //       afterLineCount: Number("int"),
 * //       changes: [ // DiffChangeList
 * //         { // DiffChange
 * //           type: "CONTEXT" || "ADD" || "DELETE",
 * //           beforeLineNumber: Number("int"),
 * //           afterLineNumber: Number("int"),
 * //           content: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   isBinary: true || false, // required
 * //   beforeBlobSize: Number("long"),
 * //   afterBlobSize: Number("long"), // required
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBlobDifferencesCommandInput - {@link GetBlobDifferencesCommandInput}
 * @returns {@link GetBlobDifferencesCommandOutput}
 * @see {@link GetBlobDifferencesCommandInput} for command's `input` shape.
 * @see {@link GetBlobDifferencesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link BlobIdDoesNotExistException} (client fault)
 *  <p>The specified blob does not exist.</p>
 *
 * @throws {@link BlobIdRequiredException} (client fault)
 *  <p>A blob ID is required, but was not specified.</p>
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
 * @throws {@link FileTooLargeException} (client fault)
 *  <p>The specified file exceeds the file size limit for CodeCommit. For more information about limits in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 *
 * @throws {@link InvalidBlobIdException} (client fault)
 *  <p>The specified blob is not valid.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class GetBlobDifferencesCommand extends command<GetBlobDifferencesCommandInput, GetBlobDifferencesCommandOutput>(
  _ep0,
  _mw0,
  "GetBlobDifferences",
  GetBlobDifferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlobDifferencesInput;
      output: GetBlobDifferencesOutput;
    };
    sdk: {
      input: GetBlobDifferencesCommandInput;
      output: GetBlobDifferencesCommandOutput;
    };
  };
}
