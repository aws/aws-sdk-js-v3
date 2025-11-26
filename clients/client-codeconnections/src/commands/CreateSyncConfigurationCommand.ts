// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSyncConfigurationInput, CreateSyncConfigurationOutput } from "../models/models_0";
import { CreateSyncConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a sync configuration which allows Amazon Web Services to sync content from a Git
 *       repository to update a specified Amazon Web Services resource. Parameters for the sync
 *       configuration are determined by the sync type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, CreateSyncConfigurationCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, CreateSyncConfigurationCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // CreateSyncConfigurationInput
 *   Branch: "STRING_VALUE", // required
 *   ConfigFile: "STRING_VALUE", // required
 *   RepositoryLinkId: "STRING_VALUE", // required
 *   ResourceName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 *   PublishDeploymentStatus: "ENABLED" || "DISABLED",
 *   TriggerResourceUpdateOn: "ANY_CHANGE" || "FILE_CHANGE",
 *   PullRequestComment: "ENABLED" || "DISABLED",
 * };
 * const command = new CreateSyncConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSyncConfigurationOutput
 * //   SyncConfiguration: { // SyncConfiguration
 * //     Branch: "STRING_VALUE", // required
 * //     ConfigFile: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE", // required
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps", // required
 * //     RepositoryLinkId: "STRING_VALUE", // required
 * //     RepositoryName: "STRING_VALUE", // required
 * //     ResourceName: "STRING_VALUE", // required
 * //     RoleArn: "STRING_VALUE", // required
 * //     SyncType: "CFN_STACK_SYNC", // required
 * //     PublishDeploymentStatus: "ENABLED" || "DISABLED",
 * //     TriggerResourceUpdateOn: "ANY_CHANGE" || "FILE_CHANGE",
 * //     PullRequestComment: "ENABLED" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSyncConfigurationCommandInput - {@link CreateSyncConfigurationCommandInput}
 * @returns {@link CreateSyncConfigurationCommandOutput}
 * @see {@link CreateSyncConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSyncConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded the maximum limit for connections.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>Unable to create resource. Resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class CreateSyncConfigurationCommand extends $Command
  .classBuilder<
    CreateSyncConfigurationCommandInput,
    CreateSyncConfigurationCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "CreateSyncConfiguration", {})
  .n("CodeConnectionsClient", "CreateSyncConfigurationCommand")
  .sc(CreateSyncConfiguration)
  .build() {
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
