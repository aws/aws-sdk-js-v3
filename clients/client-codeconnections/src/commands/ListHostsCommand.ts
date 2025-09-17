// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListHostsInput, ListHostsOutput } from "../models/models_0";
import { de_ListHostsCommand, se_ListHostsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHostsCommand}.
 */
export interface ListHostsCommandInput extends ListHostsInput {}
/**
 * @public
 *
 * The output of {@link ListHostsCommand}.
 */
export interface ListHostsCommandOutput extends ListHostsOutput, __MetadataBearer {}

/**
 * <p>Lists the hosts associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, ListHostsCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, ListHostsCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // ListHostsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHostsCommand(input);
 * const response = await client.send(command);
 * // { // ListHostsOutput
 * //   Hosts: [ // HostList
 * //     { // Host
 * //       Name: "STRING_VALUE",
 * //       HostArn: "STRING_VALUE",
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps",
 * //       ProviderEndpoint: "STRING_VALUE",
 * //       VpcConfiguration: { // VpcConfiguration
 * //         VpcId: "STRING_VALUE", // required
 * //         SubnetIds: [ // SubnetIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // SecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         TlsCertificate: "STRING_VALUE",
 * //       },
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHostsCommandInput - {@link ListHostsCommandInput}
 * @returns {@link ListHostsCommandOutput}
 * @see {@link ListHostsCommandInput} for command's `input` shape.
 * @see {@link ListHostsCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class ListHostsCommand extends $Command
  .classBuilder<
    ListHostsCommandInput,
    ListHostsCommandOutput,
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
  .s("CodeConnections_20231201", "ListHosts", {})
  .n("CodeConnectionsClient", "ListHostsCommand")
  .f(void 0, void 0)
  .ser(se_ListHostsCommand)
  .de(de_ListHostsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHostsInput;
      output: ListHostsOutput;
    };
    sdk: {
      input: ListHostsCommandInput;
      output: ListHostsCommandOutput;
    };
  };
}
