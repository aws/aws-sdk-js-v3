// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRepositoryTriggersInput, GetRepositoryTriggersOutput } from "../models/models_0";
import { GetRepositoryTriggers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about triggers configured for a repository.
 *
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
export class GetRepositoryTriggersCommand extends command<GetRepositoryTriggersCommandInput, GetRepositoryTriggersCommandOutput>(
  _ep0,
  _mw0,
  "GetRepositoryTriggers",
  GetRepositoryTriggers$
) {
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
