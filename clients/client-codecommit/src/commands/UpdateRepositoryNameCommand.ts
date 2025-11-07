// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRepositoryNameInput } from "../models/models_1";
import { UpdateRepositoryName } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRepositoryNameCommand}.
 */
export interface UpdateRepositoryNameCommandInput extends UpdateRepositoryNameInput {}
/**
 * @public
 *
 * The output of {@link UpdateRepositoryNameCommand}.
 */
export interface UpdateRepositoryNameCommandOutput extends __MetadataBearer {}

/**
 * <p>Renames a repository. The repository name must be unique across the calling Amazon Web Services account.
 *             Repository names are limited to 100 alphanumeric, dash, and underscore
 *             characters, and cannot include certain characters. The suffix .git is prohibited. For
 *             more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the CodeCommit
 *             User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateRepositoryNameCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateRepositoryNameCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateRepositoryNameInput
 *   oldName: "STRING_VALUE", // required
 *   newName: "STRING_VALUE", // required
 * };
 * const command = new UpdateRepositoryNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRepositoryNameCommandInput - {@link UpdateRepositoryNameCommandInput}
 * @returns {@link UpdateRepositoryNameCommandOutput}
 * @see {@link UpdateRepositoryNameCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryNameCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
 * @throws {@link RepositoryNameExistsException} (client fault)
 *  <p>The specified repository name already exists.</p>
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
export class UpdateRepositoryNameCommand extends $Command
  .classBuilder<
    UpdateRepositoryNameCommandInput,
    UpdateRepositoryNameCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "UpdateRepositoryName", {})
  .n("CodeCommitClient", "UpdateRepositoryNameCommand")
  .sc(UpdateRepositoryName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRepositoryNameInput;
      output: {};
    };
    sdk: {
      input: UpdateRepositoryNameCommandInput;
      output: UpdateRepositoryNameCommandOutput;
    };
  };
}
