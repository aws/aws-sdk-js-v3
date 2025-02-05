// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSyncConfigurationsInput, ListSyncConfigurationsOutput } from "../models/models_0";
import { de_ListSyncConfigurationsCommand, se_ListSyncConfigurationsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSyncConfigurationsCommand}.
 */
export interface ListSyncConfigurationsCommandInput extends ListSyncConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListSyncConfigurationsCommand}.
 */
export interface ListSyncConfigurationsCommandOutput extends ListSyncConfigurationsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of sync configurations for a specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, ListSyncConfigurationsCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, ListSyncConfigurationsCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeConnectionsClient(config);
 * const input = { // ListSyncConfigurationsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RepositoryLinkId: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 * };
 * const command = new ListSyncConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSyncConfigurationsOutput
 * //   SyncConfigurations: [ // SyncConfigurationList // required
 * //     { // SyncConfiguration
 * //       Branch: "STRING_VALUE", // required
 * //       ConfigFile: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
 * //       RepositoryLinkId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ResourceName: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       SyncType: "CFN_STACK_SYNC", // required
 * //       PublishDeploymentStatus: "ENABLED" || "DISABLED",
 * //       TriggerResourceUpdateOn: "ANY_CHANGE" || "FILE_CHANGE",
 * //       PullRequestComment: "ENABLED" || "DISABLED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSyncConfigurationsCommandInput - {@link ListSyncConfigurationsCommandInput}
 * @returns {@link ListSyncConfigurationsCommandOutput}
 * @see {@link ListSyncConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSyncConfigurationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListSyncConfigurationsCommand extends $Command
  .classBuilder<
    ListSyncConfigurationsCommandInput,
    ListSyncConfigurationsCommandOutput,
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
  .s("CodeConnections_20231201", "ListSyncConfigurations", {})
  .n("CodeConnectionsClient", "ListSyncConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListSyncConfigurationsCommand)
  .de(de_ListSyncConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSyncConfigurationsInput;
      output: ListSyncConfigurationsOutput;
    };
    sdk: {
      input: ListSyncConfigurationsCommandInput;
      output: ListSyncConfigurationsCommandOutput;
    };
  };
}
