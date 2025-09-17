// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSyncConfigurationInput, GetSyncConfigurationOutput } from "../models/models_0";
import { de_GetSyncConfigurationCommand, se_GetSyncConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSyncConfigurationCommand}.
 */
export interface GetSyncConfigurationCommandInput extends GetSyncConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetSyncConfigurationCommand}.
 */
export interface GetSyncConfigurationCommandOutput extends GetSyncConfigurationOutput, __MetadataBearer {}

/**
 * <p>Returns details about a sync configuration, including the sync type and resource name. A sync configuration allows the configuration to sync (push and pull) changes from the remote repository for a specified branch in a Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, GetSyncConfigurationCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, GetSyncConfigurationCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // GetSyncConfigurationInput
 *   SyncType: "CFN_STACK_SYNC", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new GetSyncConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSyncConfigurationOutput
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
 * @param GetSyncConfigurationCommandInput - {@link GetSyncConfigurationCommandInput}
 * @returns {@link GetSyncConfigurationCommandOutput}
 * @see {@link GetSyncConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSyncConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class GetSyncConfigurationCommand extends $Command
  .classBuilder<
    GetSyncConfigurationCommandInput,
    GetSyncConfigurationCommandOutput,
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
  .s("CodeConnections_20231201", "GetSyncConfiguration", {})
  .n("CodeConnectionsClient", "GetSyncConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetSyncConfigurationCommand)
  .de(de_GetSyncConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSyncConfigurationInput;
      output: GetSyncConfigurationOutput;
    };
    sdk: {
      input: GetSyncConfigurationCommandInput;
      output: GetSyncConfigurationCommandOutput;
    };
  };
}
