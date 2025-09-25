// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRepositoryEncryptionKeyInput, UpdateRepositoryEncryptionKeyOutput } from "../models/models_1";
import { UpdateRepositoryEncryptionKey } from "../schemas/schemas_6_Repository";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRepositoryEncryptionKeyCommand}.
 */
export interface UpdateRepositoryEncryptionKeyCommandInput extends UpdateRepositoryEncryptionKeyInput {}
/**
 * @public
 *
 * The output of {@link UpdateRepositoryEncryptionKeyCommand}.
 */
export interface UpdateRepositoryEncryptionKeyCommandOutput
  extends UpdateRepositoryEncryptionKeyOutput,
    __MetadataBearer {}

/**
 * <p>Updates the Key Management Service encryption key used to encrypt and decrypt a CodeCommit repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateRepositoryEncryptionKeyCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateRepositoryEncryptionKeyCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateRepositoryEncryptionKeyInput
 *   repositoryName: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE", // required
 * };
 * const command = new UpdateRepositoryEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRepositoryEncryptionKeyOutput
 * //   repositoryId: "STRING_VALUE",
 * //   kmsKeyId: "STRING_VALUE",
 * //   originalKmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRepositoryEncryptionKeyCommandInput - {@link UpdateRepositoryEncryptionKeyCommandInput}
 * @returns {@link UpdateRepositoryEncryptionKeyCommandOutput}
 * @see {@link UpdateRepositoryEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryEncryptionKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link EncryptionKeyInvalidIdException} (client fault)
 *  <p>The Key Management Service encryption key is not valid.</p>
 *
 * @throws {@link EncryptionKeyInvalidUsageException} (client fault)
 *  <p>A KMS encryption key was used to try and encrypt or decrypt a repository, but either the repository or the key was not
 *         in a valid state to support the operation.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyRequiredException} (client fault)
 *  <p>A KMS encryption key ID is required but was not specified.</p>
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
export class UpdateRepositoryEncryptionKeyCommand extends $Command
  .classBuilder<
    UpdateRepositoryEncryptionKeyCommandInput,
    UpdateRepositoryEncryptionKeyCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "UpdateRepositoryEncryptionKey", {})
  .n("CodeCommitClient", "UpdateRepositoryEncryptionKeyCommand")
  .sc(UpdateRepositoryEncryptionKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRepositoryEncryptionKeyInput;
      output: UpdateRepositoryEncryptionKeyOutput;
    };
    sdk: {
      input: UpdateRepositoryEncryptionKeyCommandInput;
      output: UpdateRepositoryEncryptionKeyCommandOutput;
    };
  };
}
