// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSyncConfigurationInput, GetSyncConfigurationOutput } from "../models/models_0";
import { GetSyncConfiguration$ } from "../schemas/schemas_0";

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
 * import { CodeStarConnectionsClient, GetSyncConfigurationCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetSyncConfigurationCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
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
 * @param GetSyncConfigurationCommandInput - {@link GetSyncConfigurationCommandInput}
 * @returns {@link GetSyncConfigurationCommandOutput}
 * @see {@link GetSyncConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSyncConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
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
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class GetSyncConfigurationCommand extends $Command
  .classBuilder<
    GetSyncConfigurationCommandInput,
    GetSyncConfigurationCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStar_connections_20191201", "GetSyncConfiguration", {})
  .n("CodeStarConnectionsClient", "GetSyncConfigurationCommand")
  .sc(GetSyncConfiguration$)
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
