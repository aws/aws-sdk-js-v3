// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSyncConfigurationInput, CreateSyncConfigurationOutput } from "../models/models_0";
import { de_CreateSyncConfigurationCommand, se_CreateSyncConfigurationCommand } from "../protocols/Aws_json1_0";

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
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class CreateSyncConfigurationCommand extends $Command
  .classBuilder<
    CreateSyncConfigurationCommandInput,
    CreateSyncConfigurationCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_connections_20191201", "CreateSyncConfiguration", {})
  .n("CodeStarConnectionsClient", "CreateSyncConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateSyncConfigurationCommand)
  .de(de_CreateSyncConfigurationCommand)
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
