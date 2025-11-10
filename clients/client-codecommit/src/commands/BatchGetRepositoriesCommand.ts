// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetRepositoriesInput, BatchGetRepositoriesOutput } from "../models/models_0";
import { BatchGetRepositories } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetRepositoriesCommand}.
 */
export interface BatchGetRepositoriesCommandInput extends BatchGetRepositoriesInput {}
/**
 * @public
 *
 * The output of {@link BatchGetRepositoriesCommand}.
 */
export interface BatchGetRepositoriesCommandOutput extends BatchGetRepositoriesOutput, __MetadataBearer {}

/**
 * <p>Returns information about one or more repositories.</p>
 *          <note>
 *             <p>The description field for a repository accepts all HTML characters and all valid
 *                 Unicode characters. Applications that do not HTML-encode the description and display
 *                 it in a webpage can expose users to potentially malicious code. Make sure that you
 *                 HTML-encode the description field in any application that uses this API to display
 *                 the repository description on a webpage.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchGetRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchGetRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // BatchGetRepositoriesInput
 *   repositoryNames: [ // RepositoryNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetRepositoriesOutput
 * //   repositories: [ // RepositoryMetadataList
 * //     { // RepositoryMetadata
 * //       accountId: "STRING_VALUE",
 * //       repositoryId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       repositoryDescription: "STRING_VALUE",
 * //       defaultBranch: "STRING_VALUE",
 * //       lastModifiedDate: new Date("TIMESTAMP"),
 * //       creationDate: new Date("TIMESTAMP"),
 * //       cloneUrlHttp: "STRING_VALUE",
 * //       cloneUrlSsh: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   repositoriesNotFound: [ // RepositoryNotFoundList
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // BatchGetRepositoriesErrorsList
 * //     { // BatchGetRepositoriesError
 * //       repositoryId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       errorCode: "EncryptionIntegrityChecksFailedException" || "EncryptionKeyAccessDeniedException" || "EncryptionKeyDisabledException" || "EncryptionKeyNotFoundException" || "EncryptionKeyUnavailableException" || "RepositoryDoesNotExistException",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetRepositoriesCommandInput - {@link BatchGetRepositoriesCommandInput}
 * @returns {@link BatchGetRepositoriesCommandOutput}
 * @see {@link BatchGetRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchGetRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link MaximumRepositoryNamesExceededException} (client fault)
 *  <p>The maximum number of allowed repository names was exceeded. Currently, this number is 100.</p>
 *
 * @throws {@link RepositoryNamesRequiredException} (client fault)
 *  <p>At least one repository name object is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class BatchGetRepositoriesCommand extends $Command
  .classBuilder<
    BatchGetRepositoriesCommandInput,
    BatchGetRepositoriesCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "BatchGetRepositories", {})
  .n("CodeCommitClient", "BatchGetRepositoriesCommand")
  .sc(BatchGetRepositories)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetRepositoriesInput;
      output: BatchGetRepositoriesOutput;
    };
    sdk: {
      input: BatchGetRepositoriesCommandInput;
      output: BatchGetRepositoriesCommandOutput;
    };
  };
}
