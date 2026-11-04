// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRepositoryEncryptionKeyInput, UpdateRepositoryEncryptionKeyOutput } from "../models/models_0";
import { UpdateRepositoryEncryptionKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateRepositoryEncryptionKeyCommandOutput extends UpdateRepositoryEncryptionKeyOutput, __MetadataBearer {}

/**
 * Updates the Key Management Service encryption key used to encrypt and decrypt a CodeCommit repository.
 *
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
 * @throws {@link EncryptionKeyInvalidIdException} (client fault)
 *
 * The Key Management Service encryption key is not valid.
 *
 * @throws {@link EncryptionKeyInvalidUsageException} (client fault)
 *
 * A KMS encryption key was used to try and encrypt or decrypt a repository, but either the repository or the key was not in a valid state to support the operation.
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *
 * No encryption key was found.
 *
 * @throws {@link EncryptionKeyRequiredException} (client fault)
 *
 * A KMS encryption key ID is required but was not specified.
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *
 * The encryption key is not available.
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
export class UpdateRepositoryEncryptionKeyCommand extends command<UpdateRepositoryEncryptionKeyCommandInput, UpdateRepositoryEncryptionKeyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRepositoryEncryptionKey",
  UpdateRepositoryEncryptionKey$
) {
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
