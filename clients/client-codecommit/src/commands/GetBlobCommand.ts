// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBlobInput, GetBlobOutput } from "../models/models_0";
import { GetBlob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBlobCommand}.
 */
export interface GetBlobCommandInput extends GetBlobInput {}
/**
 * @public
 *
 * The output of {@link GetBlobCommand}.
 */
export interface GetBlobCommandOutput extends GetBlobOutput, __MetadataBearer {}

/**
 * <p>Returns the base-64 encoded content of an individual blob in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetBlobCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetBlobCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetBlobInput
 *   repositoryName: "STRING_VALUE", // required
 *   blobId: "STRING_VALUE", // required
 * };
 * const command = new GetBlobCommand(input);
 * const response = await client.send(command);
 * // { // GetBlobOutput
 * //   content: new Uint8Array(), // required
 * // };
 *
 * ```
 *
 * @param GetBlobCommandInput - {@link GetBlobCommandInput}
 * @returns {@link GetBlobCommandOutput}
 * @see {@link GetBlobCommandInput} for command's `input` shape.
 * @see {@link GetBlobCommandOutput} for command's `response` shape.
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
export class GetBlobCommand extends $Command
  .classBuilder<
    GetBlobCommandInput,
    GetBlobCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "GetBlob", {})
  .n("CodeCommitClient", "GetBlobCommand")
  .sc(GetBlob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlobInput;
      output: GetBlobOutput;
    };
    sdk: {
      input: GetBlobCommandInput;
      output: GetBlobCommandOutput;
    };
  };
}
