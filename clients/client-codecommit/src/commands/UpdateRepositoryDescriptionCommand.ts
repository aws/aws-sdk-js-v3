// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRepositoryDescriptionInput } from "../models/models_0";
import { UpdateRepositoryDescription } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Sets or changes the comment or description for a repository.</p>
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
 * @throws {@link InvalidRepositoryDescriptionException} (client fault)
 *  <p>The specified repository description is not valid.</p>
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
export class UpdateRepositoryDescriptionCommand extends $Command
  .classBuilder<
    UpdateRepositoryDescriptionCommandInput,
    UpdateRepositoryDescriptionCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "UpdateRepositoryDescription", {})
  .n("CodeCommitClient", "UpdateRepositoryDescriptionCommand")
  .sc(UpdateRepositoryDescription)
  .build() {
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
