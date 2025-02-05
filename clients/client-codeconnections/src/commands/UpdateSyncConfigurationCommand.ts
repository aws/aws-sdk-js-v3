// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSyncConfigurationInput, UpdateSyncConfigurationOutput } from "../models/models_0";
import { de_UpdateSyncConfigurationCommand, se_UpdateSyncConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the sync configuration for your connection and a specified external Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, UpdateSyncConfigurationCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, UpdateSyncConfigurationCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeConnectionsClient(config);
 * const input = { // UpdateSyncConfigurationInput
 *   Branch: "STRING_VALUE",
 *   ConfigFile: "STRING_VALUE",
 *   RepositoryLinkId: "STRING_VALUE",
 *   ResourceName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 *   SyncType: "CFN_STACK_SYNC", // required
 *   PublishDeploymentStatus: "ENABLED" || "DISABLED",
 *   TriggerResourceUpdateOn: "ANY_CHANGE" || "FILE_CHANGE",
 *   PullRequestComment: "ENABLED" || "DISABLED",
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
 * //     PullRequestComment: "ENABLED" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSyncConfigurationCommandInput - {@link UpdateSyncConfigurationCommandInput}
 * @returns {@link UpdateSyncConfigurationCommandOutput}
 * @see {@link UpdateSyncConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSyncConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UpdateOutOfSyncException} (client fault)
 *  <p>The update is out of sync. Try syncing again.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 * @public
 */
export class UpdateSyncConfigurationCommand extends $Command
  .classBuilder<
    UpdateSyncConfigurationCommandInput,
    UpdateSyncConfigurationCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeConnections_20231201", "UpdateSyncConfiguration", {})
  .n("CodeConnectionsClient", "UpdateSyncConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSyncConfigurationCommand)
  .de(de_UpdateSyncConfigurationCommand)
  .build() {
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
