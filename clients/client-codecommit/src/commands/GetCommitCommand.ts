// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCommitInput, GetCommitOutput } from "../models/models_0";
import { GetCommit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCommitCommand}.
 */
export interface GetCommitCommandInput extends GetCommitInput {}
/**
 * @public
 *
 * The output of {@link GetCommitCommand}.
 */
export interface GetCommitCommandOutput extends GetCommitOutput, __MetadataBearer {}

/**
 * <p>Returns information about a commit, including commit message and committer information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetCommitInput
 *   repositoryName: "STRING_VALUE", // required
 *   commitId: "STRING_VALUE", // required
 * };
 * const command = new GetCommitCommand(input);
 * const response = await client.send(command);
 * // { // GetCommitOutput
 * //   commit: { // Commit
 * //     commitId: "STRING_VALUE",
 * //     treeId: "STRING_VALUE",
 * //     parents: [ // ParentList
 * //       "STRING_VALUE",
 * //     ],
 * //     message: "STRING_VALUE",
 * //     author: { // UserInfo
 * //       name: "STRING_VALUE",
 * //       email: "STRING_VALUE",
 * //       date: "STRING_VALUE",
 * //     },
 * //     committer: {
 * //       name: "STRING_VALUE",
 * //       email: "STRING_VALUE",
 * //       date: "STRING_VALUE",
 * //     },
 * //     additionalData: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCommitCommandInput - {@link GetCommitCommandInput}
 * @returns {@link GetCommitCommandOutput}
 * @see {@link GetCommitCommandInput} for command's `input` shape.
 * @see {@link GetCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitIdDoesNotExistException} (client fault)
 *  <p>The specified commit ID does not exist.</p>
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
export class GetCommitCommand extends $Command
  .classBuilder<
    GetCommitCommandInput,
    GetCommitCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "GetCommit", {})
  .n("CodeCommitClient", "GetCommitCommand")
  .sc(GetCommit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommitInput;
      output: GetCommitOutput;
    };
    sdk: {
      input: GetCommitCommandInput;
      output: GetCommitCommandOutput;
    };
  };
}
