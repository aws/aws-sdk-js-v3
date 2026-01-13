// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetMergeCommitInput, GetMergeCommitOutput } from "../models/models_0";
import { GetMergeCommit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns information about a specified merge commit.</p>
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
 *  <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 *
 * @throws {@link CommitRequiredException} (client fault)
 *  <p>A commit was not specified.</p>
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
 * @throws {@link InvalidCommitException} (client fault)
 *  <p>The specified commit is not valid.</p>
 *
 * @throws {@link InvalidConflictDetailLevelException} (client fault)
 *  <p>The specified conflict detail level is not valid.</p>
 *
 * @throws {@link InvalidConflictResolutionStrategyException} (client fault)
 *  <p>The specified conflict resolution strategy is not valid.</p>
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
export class GetMergeCommitCommand extends $Command
  .classBuilder<
    GetMergeCommitCommandInput,
    GetMergeCommitCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "GetMergeCommit", {})
  .n("CodeCommitClient", "GetMergeCommitCommand")
  .sc(GetMergeCommit$)
  .build() {
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
