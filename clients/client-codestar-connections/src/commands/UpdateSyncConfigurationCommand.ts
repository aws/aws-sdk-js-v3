// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSyncConfigurationInput, UpdateSyncConfigurationOutput } from "../models/models_0";
import { UpdateSyncConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSyncConfigurationCommand}.
 */
export interface UpdateSyncConfigurationCommandInput extends UpdateSyncConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateSyncConfigurationCommand}.
 */
export interface UpdateSyncConfigurationCommandOutput extends UpdateSyncConfigurationOutput, __MetadataBearer {}

/**
 * Updates the sync configuration for your connection and a specified external Git repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, UpdateSyncConfigurationCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, UpdateSyncConfigurationCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // UpdateSyncConfigurationInput
 *   Branch: "STRING_VALUE",
 *   ConfigFile: "STRING_VALUE",
 *   RepositoryLinkId: "STRING_VALUE",
 *   ResourceName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 *   SyncType: "CFN_STACK_SYNC", // required
 *   PublishDeploymentStatus: "ENABLED" || "DISABLED",
 *   TriggerResourceUpdateOn: "ANY_CHANGE" || "FILE_CHANGE",
 * };
 * const command = new UpdateSyncConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSyncConfigurationOutput
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
 * @param UpdateSyncConfigurationCommandInput - {@link UpdateSyncConfigurationCommandInput}
 * @returns {@link UpdateSyncConfigurationCommandOutput}
 * @see {@link UpdateSyncConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSyncConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found. Verify the connection resource ARN and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UpdateOutOfSyncException} (client fault)
 *
 * The update is out of sync. Try syncing again.
 *
 * @throws {@link CodeStarConnectionsServiceException}
 *
 * Base exception class for all service exceptions from CodeStarConnections service.
 *
 * @public
 */
export class UpdateSyncConfigurationCommand extends command<UpdateSyncConfigurationCommandInput, UpdateSyncConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSyncConfiguration",
  UpdateSyncConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSyncConfigurationInput;
      output: UpdateSyncConfigurationOutput;
    };
    sdk: {
      input: UpdateSyncConfigurationCommandInput;
      output: UpdateSyncConfigurationCommandOutput;
    };
  };
}
