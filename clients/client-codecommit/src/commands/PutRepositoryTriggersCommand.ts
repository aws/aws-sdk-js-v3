// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRepositoryTriggersInput, PutRepositoryTriggersOutput } from "../models/models_1";
import { de_PutRepositoryTriggersCommand, se_PutRepositoryTriggersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRepositoryTriggersCommand}.
 */
export interface PutRepositoryTriggersCommandInput extends PutRepositoryTriggersInput {}
/**
 * @public
 *
 * The output of {@link PutRepositoryTriggersCommand}.
 */
export interface PutRepositoryTriggersCommandOutput extends PutRepositoryTriggersOutput, __MetadataBearer {}

/**
 * <p>Replaces all triggers for a repository. Used to create or delete triggers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PutRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PutRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // PutRepositoryTriggersInput
 *   repositoryName: "STRING_VALUE", // required
 *   triggers: [ // RepositoryTriggersList // required
 *     { // RepositoryTrigger
 *       name: "STRING_VALUE", // required
 *       destinationArn: "STRING_VALUE", // required
 *       customData: "STRING_VALUE",
 *       branches: [ // BranchNameList
 *         "STRING_VALUE",
 *       ],
 *       events: [ // RepositoryTriggerEventList // required
 *         "all" || "updateReference" || "createReference" || "deleteReference",
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * // { // PutRepositoryTriggersOutput
 * //   configurationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutRepositoryTriggersCommandInput - {@link PutRepositoryTriggersCommandInput}
 * @returns {@link PutRepositoryTriggersCommandOutput}
 * @see {@link PutRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryTriggersCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRepositoryTriggerBranchNameException} (client fault)
 *  <p>One or more branch names specified for the trigger is not valid.</p>
 *
 * @throws {@link InvalidRepositoryTriggerCustomDataException} (client fault)
 *  <p>The custom data provided for the trigger is not valid.</p>
 *
 * @throws {@link InvalidRepositoryTriggerDestinationArnException} (client fault)
 *  <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
 *
 * @throws {@link InvalidRepositoryTriggerEventsException} (client fault)
 *  <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
 *
 * @throws {@link InvalidRepositoryTriggerNameException} (client fault)
 *  <p>The name of the trigger is not valid.</p>
 *
 * @throws {@link InvalidRepositoryTriggerRegionException} (client fault)
 *  <p>The Amazon Web Services Region for the trigger target does not match the Amazon Web Services Region for the
 *             repository. Triggers must be created in the same Amazon Web Services Region as the target for the
 *             trigger.</p>
 *
 * @throws {@link MaximumBranchesExceededException} (client fault)
 *  <p>The number of branches for the trigger was exceeded.</p>
 *
 * @throws {@link MaximumRepositoryTriggersExceededException} (client fault)
 *  <p>The number of triggers allowed for the repository was exceeded.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link RepositoryTriggerBranchNameListRequiredException} (client fault)
 *  <p>At least one branch name is required, but was not specified in the trigger
 *             configuration.</p>
 *
 * @throws {@link RepositoryTriggerDestinationArnRequiredException} (client fault)
 *  <p>A destination ARN for the target service for the trigger is required, but was not
 *             specified.</p>
 *
 * @throws {@link RepositoryTriggerEventsListRequiredException} (client fault)
 *  <p>At least one event for the trigger is required, but was not specified.</p>
 *
 * @throws {@link RepositoryTriggerNameRequiredException} (client fault)
 *  <p>A name for the trigger is required, but was not specified.</p>
 *
 * @throws {@link RepositoryTriggersListRequiredException} (client fault)
 *  <p>The list of triggers for the repository is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 * @public
 */
export class PutRepositoryTriggersCommand extends $Command
  .classBuilder<
    PutRepositoryTriggersCommandInput,
    PutRepositoryTriggersCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "PutRepositoryTriggers", {})
  .n("CodeCommitClient", "PutRepositoryTriggersCommand")
  .f(void 0, void 0)
  .ser(se_PutRepositoryTriggersCommand)
  .de(de_PutRepositoryTriggersCommand)
  .build() {}
