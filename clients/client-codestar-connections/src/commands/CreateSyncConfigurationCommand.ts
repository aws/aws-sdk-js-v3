// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSyncConfigurationInput, CreateSyncConfigurationOutput } from "../models/models_0";
import { CreateSyncConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSyncConfigurationCommand}.
 */
export interface CreateSyncConfigurationCommandInput extends CreateSyncConfigurationInput {}
/**
 * @public
 *
 * The output of {@link CreateSyncConfigurationCommand}.
 */
export interface CreateSyncConfigurationCommandOutput extends CreateSyncConfigurationOutput, __MetadataBearer {}

/**
 * Creates a sync configuration which allows Amazon Web Services to sync content from a Git repository to update a specified Amazon Web Services resource. Parameters for the sync configuration are determined by the sync type.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, CreateSyncConfigurationCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, CreateSyncConfigurationCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // CreateSyncConfigurationInput
 *   Branch: "STRING_VALUE", // required
 *   ConfigFile: "STRING_VALUE", // required
 *   RepositoryLinkId: "STRING_VALUE", // required
 *   ResourceName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 *   PublishDeploymentStatus: "ENABLED" || "DISABLED",
 *   TriggerResourceUpdateOn: "ANY_CHANGE" || "FILE_CHANGE",
 * };
 * const command = new CreateSyncConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSyncConfigurationOutput
 * //   SyncConfiguration: { // SyncConfiguration
 * //     Branch: "STRING_VALUE", // required
 * //     ConfigFile: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE", // required
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
 * //     RepositoryLinkId: "STRING_VALUE", // required
 * //     RepositoryName: "STRING_VALUE", // required
 * //     ResourceName: "STRING_VALUE", // required
 * //     RoleArn: "STRING_VALUE", // required
 * //     SyncType: "CFN_STACK_SYNC", // required
 * //     PublishDeploymentStatus: "ENABLED" || "DISABLED",
 * //     TriggerResourceUpdateOn: "ANY_CHANGE" || "FILE_CHANGE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSyncConfigurationCommandInput - {@link CreateSyncConfigurationCommandInput}
 * @returns {@link CreateSyncConfigurationCommandOutput}
 * @see {@link CreateSyncConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSyncConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Received an internal server exception. Try again later.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input is not valid. Verify that the action is typed correctly.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Exceeded the maximum limit for connections.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * Unable to create resource. Resource already exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link CodeStarConnectionsServiceException}
 *
 * Base exception class for all service exceptions from CodeStarConnections service.
 *
 * @public
 */
export class CreateSyncConfigurationCommand extends command<CreateSyncConfigurationCommandInput, CreateSyncConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateSyncConfiguration",
  CreateSyncConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSyncConfigurationInput;
      output: CreateSyncConfigurationOutput;
    };
    sdk: {
      input: CreateSyncConfigurationCommandInput;
      output: CreateSyncConfigurationCommandOutput;
    };
  };
}
