// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDifferencesInput, GetDifferencesOutput } from "../models/models_0";
import { de_GetDifferencesCommand, se_GetDifferencesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns information about the differences in a valid commit specifier (such as a
 *             branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be
 *             limited to a specified path.</p>
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
 * @throws {@link InvalidCommitIdException} (client fault)
 *  <p>The specified commit ID is not valid.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link InvalidPathException} (client fault)
 *  <p>The specified path is not valid.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link PathDoesNotExistException} (client fault)
 *  <p>The specified path does not exist.</p>
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
export class GetDifferencesCommand extends $Command
  .classBuilder<
    GetDifferencesCommandInput,
    GetDifferencesCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "GetDifferences", {})
  .n("CodeCommitClient", "GetDifferencesCommand")
  .f(void 0, void 0)
  .ser(se_GetDifferencesCommand)
  .de(de_GetDifferencesCommand)
  .build() {
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
