// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRepositoryDescriptionInput } from "../models/models_0";
import { UpdateRepositoryDescription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRepositoryDescriptionCommand}.
 */
export interface UpdateRepositoryDescriptionCommandInput extends UpdateRepositoryDescriptionInput {}
/**
 * @public
 *
 * The output of {@link UpdateRepositoryDescriptionCommand}.
 */
export interface UpdateRepositoryDescriptionCommandOutput extends __MetadataBearer {}

/**
 * Sets or changes the comment or description for a repository.
 *
 * > **Note:** The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateRepositoryDescriptionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateRepositoryDescriptionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateRepositoryDescriptionInput
 *   repositoryName: "STRING_VALUE", // required
 *   repositoryDescription: "STRING_VALUE",
 * };
 * const command = new UpdateRepositoryDescriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRepositoryDescriptionCommandInput - {@link UpdateRepositoryDescriptionCommandInput}
 * @returns {@link UpdateRepositoryDescriptionCommandOutput}
 * @see {@link UpdateRepositoryDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryDescriptionCommandOutput} for command's `response` shape.
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
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *
 * No encryption key was found.
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *
 * The encryption key is not available.
 *
 * @throws {@link InvalidRepositoryDescriptionException} (client fault)
 *
 * The specified repository description is not valid.
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
export class UpdateRepositoryDescriptionCommand extends command<UpdateRepositoryDescriptionCommandInput, UpdateRepositoryDescriptionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRepositoryDescription",
  UpdateRepositoryDescription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRepositoryDescriptionInput;
      output: {};
    };
    sdk: {
      input: UpdateRepositoryDescriptionCommandInput;
      output: UpdateRepositoryDescriptionCommandOutput;
    };
  };
}
