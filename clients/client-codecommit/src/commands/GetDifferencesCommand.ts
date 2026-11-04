// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDifferencesInput, GetDifferencesOutput } from "../models/models_0";
import { GetDifferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDifferencesCommand}.
 */
export interface GetDifferencesCommandInput extends GetDifferencesInput {}
/**
 * @public
 *
 * The output of {@link GetDifferencesCommand}.
 */
export interface GetDifferencesCommandOutput extends GetDifferencesOutput, __MetadataBearer {}

/**
 * Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
 *
 * For line-level diff details, pass the `beforeBlob.blobId` and `afterBlob.blobId` values from a `Difference` object to GetBlobDifferences.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetDifferencesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetDifferencesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetDifferencesInput
 *   repositoryName: "STRING_VALUE", // required
 *   beforeCommitSpecifier: "STRING_VALUE",
 *   afterCommitSpecifier: "STRING_VALUE", // required
 *   beforePath: "STRING_VALUE",
 *   afterPath: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetDifferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetDifferencesOutput
 * //   differences: [ // DifferenceList
 * //     { // Difference
 * //       beforeBlob: { // BlobMetadata
 * //         blobId: "STRING_VALUE",
 * //         path: "STRING_VALUE",
 * //         mode: "STRING_VALUE",
 * //       },
 * //       afterBlob: {
 * //         blobId: "STRING_VALUE",
 * //         path: "STRING_VALUE",
 * //         mode: "STRING_VALUE",
 * //       },
 * //       changeType: "A" || "M" || "D",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDifferencesCommandInput - {@link GetDifferencesCommandInput}
 * @returns {@link GetDifferencesCommandOutput}
 * @see {@link GetDifferencesCommandInput} for command's `input` shape.
 * @see {@link GetDifferencesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitDoesNotExistException} (client fault)
 *
 * The specified commit does not exist or no commit was specified, and the specified repository has no default branch.
 *
 * @throws {@link CommitRequiredException} (client fault)
 *
 * A commit was not specified.
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
 * @throws {@link InvalidCommitException} (client fault)
 *
 * The specified commit is not valid.
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
 * @throws {@link InvalidPathException} (client fault)
 *
 * The specified path is not valid.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link PathDoesNotExistException} (client fault)
 *
 * The specified path does not exist.
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
export class GetDifferencesCommand extends command<GetDifferencesCommandInput, GetDifferencesCommandOutput>(
  _ep0,
  _mw0,
  "GetDifferences",
  GetDifferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDifferencesInput;
      output: GetDifferencesOutput;
    };
    sdk: {
      input: GetDifferencesCommandInput;
      output: GetDifferencesCommandOutput;
    };
  };
}
