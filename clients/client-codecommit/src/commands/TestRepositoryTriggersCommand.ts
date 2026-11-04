// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestRepositoryTriggersInput, TestRepositoryTriggersOutput } from "../models/models_0";
import { TestRepositoryTriggers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TestRepositoryTriggersCommand}.
 */
export interface TestRepositoryTriggersCommandInput extends TestRepositoryTriggersInput {}
/**
 * @public
 *
 * The output of {@link TestRepositoryTriggersCommand}.
 */
export interface TestRepositoryTriggersCommandOutput extends TestRepositoryTriggersOutput, __MetadataBearer {}

/**
 * Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, TestRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, TestRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // TestRepositoryTriggersInput
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
 * const command = new TestRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * // { // TestRepositoryTriggersOutput
 * //   successfulExecutions: [ // RepositoryTriggerNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   failedExecutions: [ // RepositoryTriggerExecutionFailureList
 * //     { // RepositoryTriggerExecutionFailure
 * //       trigger: "STRING_VALUE",
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TestRepositoryTriggersCommandInput - {@link TestRepositoryTriggersCommandInput}
 * @returns {@link TestRepositoryTriggersCommandOutput}
 * @see {@link TestRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link TestRepositoryTriggersCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRepositoryTriggerBranchNameException} (client fault)
 *
 * One or more branch names specified for the trigger is not valid.
 *
 * @throws {@link InvalidRepositoryTriggerCustomDataException} (client fault)
 *
 * The custom data provided for the trigger is not valid.
 *
 * @throws {@link InvalidRepositoryTriggerDestinationArnException} (client fault)
 *
 * The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.
 *
 * @throws {@link InvalidRepositoryTriggerEventsException} (client fault)
 *
 * One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.
 *
 * @throws {@link InvalidRepositoryTriggerNameException} (client fault)
 *
 * The name of the trigger is not valid.
 *
 * @throws {@link InvalidRepositoryTriggerRegionException} (client fault)
 *
 * The Amazon Web Services Region for the trigger target does not match the Amazon Web Services Region for the repository. Triggers must be created in the same Amazon Web Services Region as the target for the trigger.
 *
 * @throws {@link MaximumBranchesExceededException} (client fault)
 *
 * The number of branches for the trigger was exceeded.
 *
 * @throws {@link MaximumRepositoryTriggersExceededException} (client fault)
 *
 * The number of triggers allowed for the repository was exceeded.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link RepositoryTriggerBranchNameListRequiredException} (client fault)
 *
 * At least one branch name is required, but was not specified in the trigger configuration.
 *
 * @throws {@link RepositoryTriggerDestinationArnRequiredException} (client fault)
 *
 * A destination ARN for the target service for the trigger is required, but was not specified.
 *
 * @throws {@link RepositoryTriggerEventsListRequiredException} (client fault)
 *
 * At least one event for the trigger is required, but was not specified.
 *
 * @throws {@link RepositoryTriggerNameRequiredException} (client fault)
 *
 * A name for the trigger is required, but was not specified.
 *
 * @throws {@link RepositoryTriggersListRequiredException} (client fault)
 *
 * The list of triggers for the repository is required, but was not specified.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class TestRepositoryTriggersCommand extends command<TestRepositoryTriggersCommandInput, TestRepositoryTriggersCommandOutput>(
  _ep0,
  _mw0,
  "TestRepositoryTriggers",
  TestRepositoryTriggers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestRepositoryTriggersInput;
      output: TestRepositoryTriggersOutput;
    };
    sdk: {
      input: TestRepositoryTriggersCommandInput;
      output: TestRepositoryTriggersCommandOutput;
    };
  };
}
