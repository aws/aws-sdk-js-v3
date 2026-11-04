// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMergeCommitInput, GetMergeCommitOutput } from "../models/models_0";
import { GetMergeCommit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMergeCommitCommand}.
 */
export interface GetMergeCommitCommandInput extends GetMergeCommitInput {}
/**
 * @public
 *
 * The output of {@link GetMergeCommitCommand}.
 */
export interface GetMergeCommitCommandOutput extends GetMergeCommitOutput, __MetadataBearer {}

/**
 * Returns information about a specified merge commit.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetMergeCommitInput
 *   repositoryName: "STRING_VALUE", // required
 *   sourceCommitSpecifier: "STRING_VALUE", // required
 *   destinationCommitSpecifier: "STRING_VALUE", // required
 *   conflictDetailLevel: "FILE_LEVEL" || "LINE_LEVEL",
 *   conflictResolutionStrategy: "NONE" || "ACCEPT_SOURCE" || "ACCEPT_DESTINATION" || "AUTOMERGE",
 * };
 * const command = new GetMergeCommitCommand(input);
 * const response = await client.send(command);
 * // { // GetMergeCommitOutput
 * //   sourceCommitId: "STRING_VALUE",
 * //   destinationCommitId: "STRING_VALUE",
 * //   baseCommitId: "STRING_VALUE",
 * //   mergedCommitId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMergeCommitCommandInput - {@link GetMergeCommitCommandInput}
 * @returns {@link GetMergeCommitCommandOutput}
 * @see {@link GetMergeCommitCommandInput} for command's `input` shape.
 * @see {@link GetMergeCommitCommandOutput} for command's `response` shape.
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
export class GetMergeCommitCommand extends command<GetMergeCommitCommandInput, GetMergeCommitCommandOutput>(
  _ep0,
  _mw0,
  "GetMergeCommit",
  GetMergeCommit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMergeCommitInput;
      output: GetMergeCommitOutput;
    };
    sdk: {
      input: GetMergeCommitCommandInput;
      output: GetMergeCommitCommandOutput;
    };
  };
}
