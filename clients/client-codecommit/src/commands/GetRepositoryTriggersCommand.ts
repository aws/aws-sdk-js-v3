// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRepositoryTriggersInput, GetRepositoryTriggersOutput } from "../models/models_0";
import { GetRepositoryTriggers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRepositoryTriggersCommand}.
 */
export interface GetRepositoryTriggersCommandInput extends GetRepositoryTriggersInput {}
/**
 * @public
 *
 * The output of {@link GetRepositoryTriggersCommand}.
 */
export interface GetRepositoryTriggersCommandOutput extends GetRepositoryTriggersOutput, __MetadataBearer {}

/**
 * <p>Gets information about triggers configured for a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetRepositoryTriggersInput
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new GetRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryTriggersOutput
 * //   configurationId: "STRING_VALUE",
 * //   triggers: [ // RepositoryTriggersList
 * //     { // RepositoryTrigger
 * //       name: "STRING_VALUE", // required
 * //       destinationArn: "STRING_VALUE", // required
 * //       customData: "STRING_VALUE",
 * //       branches: [ // BranchNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       events: [ // RepositoryTriggerEventList // required
 * //         "all" || "updateReference" || "createReference" || "deleteReference",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRepositoryTriggersCommandInput - {@link GetRepositoryTriggersCommandInput}
 * @returns {@link GetRepositoryTriggersCommandOutput}
 * @see {@link GetRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryTriggersCommandOutput} for command's `response` shape.
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
export class GetRepositoryTriggersCommand extends $Command
  .classBuilder<
    GetRepositoryTriggersCommandInput,
    GetRepositoryTriggersCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "GetRepositoryTriggers", {})
  .n("CodeCommitClient", "GetRepositoryTriggersCommand")
  .sc(GetRepositoryTriggers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRepositoryTriggersInput;
      output: GetRepositoryTriggersOutput;
    };
    sdk: {
      input: GetRepositoryTriggersCommandInput;
      output: GetRepositoryTriggersCommandOutput;
    };
  };
}
