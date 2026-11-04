// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMergeOptionsInput, GetMergeOptionsOutput } from "../models/models_0";
import { GetMergeOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMergeOptionsCommand}.
 */
export interface GetMergeOptionsCommandInput extends GetMergeOptionsInput {}
/**
 * @public
 *
 * The output of {@link GetMergeOptionsCommand}.
 */
export interface GetMergeOptionsCommandOutput extends GetMergeOptionsOutput, __MetadataBearer {}

/**
 * Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeOptionsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeOptionsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetMergeOptionsInput
 *   repositoryName: "STRING_VALUE", // required
 *   sourceCommitSpecifier: "STRING_VALUE", // required
 *   destinationCommitSpecifier: "STRING_VALUE", // required
 *   conflictDetailLevel: "FILE_LEVEL" || "LINE_LEVEL",
 *   conflictResolutionStrategy: "NONE" || "ACCEPT_SOURCE" || "ACCEPT_DESTINATION" || "AUTOMERGE",
 * };
 * const command = new GetMergeOptionsCommand(input);
 * const response = await client.send(command);
 * // { // GetMergeOptionsOutput
 * //   mergeOptions: [ // MergeOptions // required
 * //     "FAST_FORWARD_MERGE" || "SQUASH_MERGE" || "THREE_WAY_MERGE",
 * //   ],
 * //   sourceCommitId: "STRING_VALUE", // required
 * //   destinationCommitId: "STRING_VALUE", // required
 * //   baseCommitId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetMergeOptionsCommandInput - {@link GetMergeOptionsCommandInput}
 * @returns {@link GetMergeOptionsCommandOutput}
 * @see {@link GetMergeOptionsCommandInput} for command's `input` shape.
 * @see {@link GetMergeOptionsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidConflictDetailLevelException} (client fault)
 *
 * The specified conflict detail level is not valid.
 *
 * @throws {@link InvalidConflictResolutionStrategyException} (client fault)
 *
 * The specified conflict resolution strategy is not valid.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link MaximumFileContentToLoadExceededException} (client fault)
 *
 * The number of files to load exceeds the allowed limit.
 *
 * @throws {@link MaximumItemsToCompareExceededException} (client fault)
 *
 * The number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link TipsDivergenceExceededException} (client fault)
 *
 * The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using `git diff` or a diff tool.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class GetMergeOptionsCommand extends command<GetMergeOptionsCommandInput, GetMergeOptionsCommandOutput>(
  _ep0,
  _mw0,
  "GetMergeOptions",
  GetMergeOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMergeOptionsInput;
      output: GetMergeOptionsOutput;
    };
    sdk: {
      input: GetMergeOptionsCommandInput;
      output: GetMergeOptionsCommandOutput;
    };
  };
}
